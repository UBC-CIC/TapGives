const UssdMenu    = require("ussd-menu-builder");
const invokeAddCustomer = require('./lambdas/invokeAddCustomer');
const invokeVisitStepFunction = require('./lambdas/invokeVisitStepFunction');
const invokePaymentStepFunction = require('./lambdas/invokePaymentStepFunction');

let firstName, lastName, idNumber, signUpPin, siteNumber, loginPin;

const subscriptionAmount = 1;


async function runMenu(args, context, user) {
    // TODO ASAP: make regex stricter for all inputs //
    // TODO ASAP: pass in language from index.js; currently assumes english //
    
    const menu = new UssdMenu();
    
    //////          signup states           //////
    let startSignup = () => {
        return {
            next: {
                "*": "first-name"
            }
        };
    };
    
    menu.state("first-name", {
        run: () => {
            menu.con("Enter your first name:");
        },
        next: {
            "*": "last-name"
        }
    }); 
    
    menu.state("last-name", {
        run: () => {
            firstName = menu.val;
            menu.con("Enter your last name:");
        },
        next: {
            "*": "id-number"
        }
    });
    
    menu.state("id-number", {
        run: () => {
            lastName = menu.val;
            menu.con("Enter your ID number:");
        },
        next: {
            "*": "pin"
        }
    });

    menu.state("pin", {
        run: () => {
            idNumber = Number(menu.val);
            menu.con("Enter a 4 digit pin:");
        },
        next: {
            "*": "site-number"
        }
    });
    
    menu.state("site-number", {
        run: () => {
            signUpPin = Number(menu.val);
            menu.con("Enter your site number:");
        },
        next: {
            "*": "sign-up-complete"
        }
    });

    menu.state("sign-up-complete", {
        run: async () => {
            siteNumber = menu.val;
            
            const createcustomerinput = {
                phoneNumber: args.phoneNumber,
                validSubscription: false,
                language: 'en',
                firstName: firstName,
                lastName: lastName,
                idNumber: idNumber,
                pin: signUpPin,
                siteID: siteNumber
            };
            
            // add customer to the table
            let msg = await invokeAddCustomer(createcustomerinput);
            console.log(msg);
            
            menu.end("You are now being registered!" +
            "\nPlease allow 1 minute, then restart the session " +
            "and proceed to 'Purchase/Renew Subscription'.");
        }
    });
    
    
    
    //////          known user states           //////
    let startKnownUser = () => {
        return {
            run: () => {
                menu.con("Welcome back, " + user.firstName + "!" +
                "\n———————" +
                "\n Please enter your 4 digit pin to proceed:");
            },
            next: {
                "*": "validate-user"
            }
        };
    };
    
    menu.state("validate-user", {
        run: () => {
            loginPin = Number(menu.val);

            // validate pin
            console.log("VALIDATING PIN");
            
            if (user.pin !== loginPin) {
                menu.end("Incorrect pin.");
            }
            
            if (!user.validSubscription) {
                menu.con("Your subscription is not valid for the month." + 
                "\n---------------------------------" + 
                "\n What would you like to do?" + 
                "\n2. Purchase/Renew Subscription" + 
                "\n0. Exit"
                );
            } else {
                menu.con("Your subscription is valid for the month." + 
                    "\n---------------------------------" + 
                    "\n What would you like to do?" + 
                    "\n1. Collect water" + 
                    "\n0. Exit"
                );
            }
        }, 
        next: {
            "1": "collect-water",
            "2": "purchase-renew-subscription",
            "0": "exit"
        }
    });
    
    menu.state("collect-water", {
        run: async () => {
            if (!user.validSubscription) {
                menu.end("Invalid selection. Please retry.");
            } else {
                let res = await invokeVisitStepFunction(user.idNumber, user.siteID, args.phoneNumber);
                console.log(res);
                
                menu.end("You will receive a message shortly with your verification code. Thank you.");
            }
        }
    });
    
    menu.state("purchase-renew-subscription", {
        run: () => {
            if (user.validSubscription) {
                menu.end("Invalid selection. Subscription is already valid.");
            } else {
                menu.con("Press 1 to proceed with the transaction of " + subscriptionAmount + 
                " shillings for a monthly subscription." + 
                "\nPress 0 to exit.");
            }
        }, 
        next: {
            "1": "start-mpesa",
            "0": "exit"
        }
    });
    
    menu.state("start-mpesa", {
        run: async () => {
            await invokePaymentStepFunction(user.idNumber, args.phoneNumber, subscriptionAmount);
            
            menu.end("If you have completed the payment, thank you. " + 
            "If not, please continue to do so. " + 
            "You will receive a notification shortly informing you of the " + 
            "success of your payment. Thank you.");
        }
    });
    
    
    //////          exit state          //////
    menu.state("exit", {
        run: () => {
            menu.end("Thank you. Goodbye.");
        }
    });
    
    
    //////          run english menu            ////// 

    let startState = (user) ? startKnownUser() : startSignup();
    menu.startState(startState);
    let resMsg = await menu.run(args);
    console.log(resMsg); // probably don't need
    context.succeed(resMsg);


}

module.exports = runMenu;
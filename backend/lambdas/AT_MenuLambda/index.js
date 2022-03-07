const UssdMenu       = require("ussd-menu-builder");
const runMenu        = require('./runMenu');
const invokeGetCustomer    = require('./lambdas/invokeGetCustomer');

// ENSURE USER CAN ONLY SIGN UP TO SITE IN A GIVEN LIST //
// ONLY WHERE THERE EXIST SITE MANAGERS //

let globalUser;

exports.handler = async (event, context) => {
    const menu = new UssdMenu();

    let args = {
        phoneNumber: event.phoneNumber,
        sessionId: event.sessionId,
        serviceCode: event.serviceCode,
        text: event.text
    };

    console.log("Args: ", args);
    
    let unknownUserStartState = () => {
        return {
            run: () => {
                menu.con("Welcome to TapGives!" +
                "\n Karibu TapGives!" +
                "\n————————————" +
                "\n Select a language: " +
                "\n Chagua lugha: " + 
                "\n1. English" +
                "\n2. Swahili" + 
                "\n0. Exit");
            },
            next: {
                "1": "start-en",
                "2": "start-sw",
                "0": "exit"
            }
        };
    };
    
    let knownUserStartState = () => {
        return {
            run: () => {
                if (globalUser.language === 'en') {
                    runMenu(args, context, globalUser);
                } else {
                    // runSwahili(args, context, globalUser);
                }
            }
        };
    };
    
    menu.state("start-en", {
        run: async () => {
            await runMenu(args, context, globalUser);
        }
    });
    
    // menu.state("start-sw", {
    //     run: () => {
    //         runSwahili(args, context, globalUser);
    //     }
    // });
    
    menu.state("exit", {
        run: () => {
            menu.end("Thank you. Goodbye." + 
            "\nAsante. Kwaheri.");
        }
    });

    
    //////          getting menu started            //////
    
    let getUser = async () => {
        globalUser = await invokeGetCustomer(args.phoneNumber);
    };
    
    // Kickoff menus
    await getUser();
    
    let startState = (globalUser) ? knownUserStartState() : unknownUserStartState();
    menu.startState(startState);
    let resMsg = await menu.run(args);
    console.log(resMsg); // probably don't need
    context.succeed(resMsg);
};
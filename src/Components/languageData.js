export const basePhrases  = {
    en:{
        signIn:"Sign In",
        email:"Email",
        password:"Password",
        forgot:"Forgot your password?",
        forgotQuery:"Enter your email address and we'll send you a code to help you reset your password.",
        reset:"Send reset code",
        back:"Back",
        createAccount:"Create an account",
        uppercase: 'At least one uppercase letter' ,
        lowercase: 'At least one lowercase letter' ,
        digit: 'At least one digit' ,
        special: 'At least one special character' ,
        minLength: 'Should be more than 8 characters' ,
        maxLength: 'Should be less than 16 characters',
        enterValidEmail: "Please enter a valid email or create an account",
        enterReset:"Enter received code",
        checkEmail:"Please check your email",
        forCode:"for a reset code and create a new password.",
        verificationError:"Please enter correct reset code.",
        createPassword:"Create new password",
        reenter:"Re-enter the password",
        noMatch:"Passwords do not match",
        helperText:"Your password must have the following:",
        firstName:"First Name",
        lastName:"Last Name",
        phoneNumber: "Phone number",
        passwordRequirements: "Your password must have the following:",
        confirmPassword: "Confirm Password",
        signUp: "Sign Up",
        verifyAccount: "Verify Account",
        emailCheck: "Please check your email for a confirmation code. This may take several minutes.",
        invalidCode: "Invalid verification code provided, please try again.",
        newCode: "New verification code sent successfully.",
        noCode: "Didn't receive your verification code?",
        resend: "Resend Code",
        verify: "Verify",
        enterPassword: "Enter new password",
        setPassword: "Set Password",
        accountExists: "An account with the given email already exists.",
        validEmail: "Please enter a valid email.",
        passwordReset: "Password Reset",
        setNewPassword: "Set New Password",
        siteOwnership: "Change site ownership permissions by Site Manager",
        updateSitesManaged: "Update sites managed",
        createNewSite: "Create new site",
        editSelectedSite: "Edit selected sites",
        deleteSelectedSites: "Delete selected sites",
        createNewSiteDialog: "To create a new Site, enter the relevant details and press create",
        editSiteDialog: "To edit this site, fill in the details and press Edit",
        create: "Create",
        cancel: "Cancel",
        deleteSiteWarning: "WARNING: This will delete all associated customers and site managers",
        name: "Name",
        serviceRadius: "Radius (Km)",
        latitude: "Latitude",
        longitude: "Longitude",
        description: "Description",
        cognitoID: "Cognito ID",
        givenName: "Given Name",
        familyName: "Family Name",
        siteName: "Site name",
        siteDescription: "Site Description",
        smsDescription: "SMS description",
        avgWaitMinute: "Average Wait time (minutes)",
        avgLineCount: "Average line length",
        estimatedDaily: "Daily Total Usage (L)",
        subscriptionFee: "Subscription Fee",
        expectedJerrycans: "Expected Jerrycans",
        nickname: "Nickname",
        updatePassword: "Update Password",
        verificationCode: "Didn't receive your verification code?",
        resendCode: "Resend Code",
        or: "or",
        siteID: "Site ID",
        customerID: "Customer ID",
        languageCode: "Language code",
        languageName: "Language Name",
        addNewLanguage: "Add new language",
        syncLanguageToCloud: "Sync Language to Cloud",
        addLanguageTemplate: "Add new language template (does not upload until you finish submit phrases)",
        english: "English Phrase",
        translation: "Translated Phrase",
        deleteLanguageTemplate: "Delete selected language?",
        add: "Add",
        delete: "Delete",
        language: "Language",
        sites: "Sites",
        siteInformation: "Site Information",
        recentVisits: "Recent Visits",
        ////////////////////// MENU LAMBDA /////////////////////

        // should first two be under en? cause they're bilingual
        // maybe have a third language: Unknown, 'uk'
        menu_unknownUserStartState: "Welcome to TapGives!" +
            "\n Karibu TapGives!" +
            "\n———" +
            "\n Select a language: " +
            "\n Chagua lugha: " +
            "\n1. English" +
            "\n2. Swahili" +
            "\n0. Exit",
        menu_multilingualExit: "Thank you. Goodbye." +
            "\nAsante. Kwaheri.",

        /* signup text */
        menu_firstNamePrompt: "Enter your first name:",
        menu_lastNamePrompt: "Enter your last name:",
        menu_idNumberPrompt: "Enter your ID number:",
        menu_pinSignUpPrompt: "Enter a 4 digit pin:",
        menu_siteNicknamePrompt: "Enter your site nickname:",
        menu_registrationConfirmation: "You are now being registered!" +
            "\nPlease allow 1 minute, then restart the session " +
            "and proceed to 'Purchase/Renew Subscription' to activate " +
            "your subscription.",
        menu_invalidSiteNickname: "No site matches the provided nickname." +
            "\nPlease confirm the site nickname and retry. Thank you.",

        /* known customer text */
        menu_welcomeBack: "Welcome back, ",
        menu_pinPrompt: "Please enter your 4 digit pin to proceed:",
        menu_incorrectPin: "Incorrect pin.",
        menu_validSubscriptionOptions: "Your subscription is valid for the month." +
            "\n---" +
            "\n What would you like to do?" +
            "\n1. Collect water" +
            "\n0. Exit",
        menu_invalidSubscriptionOptions: "Your subscription is not valid for the month." +
            "\n---" +
            "\n What would you like to do?" +
            "\n2. Purchase/Renew Subscription" +
            "\n0. Exit",
        menu_invalidSelectionInCollectWater: "Invalid selection. Please retry.",
        menu_collectWaterVerification: "You will receive a message shortly with your verification code. Thank you.",
        menu_invalidSelectionInPurchaseSubscription: "Invalid selection. Subscription is already valid.",
        menu_purchaseSubscriptionConfirmationPt1: "Press 1 to proceed with the transaction of ",
        menu_purchaseSubscriptionConfirmationPt2: " shillings for a monthly subscription." + "\nPress 0 to exit.",
        menu_paymentAndNotification: "Please proceed to pay for the subscription. " +
            "You will receive a notification shortly afterwards. Thank you.",
        menu_exit: "Thank you. Goodbye.",


        ////////////////////// SEND SUBSCRIPTION MESSAGES LAMBDA /////////////////////
        // edit
        subscriptionSuccess: "you have been subscribed",
        subscriptionFailure: "problem subscribing you. retry",
        reminder:"remember to subscribe",
        unsubscription: "you have been unsubscribed",


        ////////////////////// SEND VISIT MESSAGES LAMBDA /////////////////////
        // edit
        customerMessage: "dear customer, verification is: ",
        siteManagerMessage: "dear manager, customer verification is: ",

    },
    sw: {
        signIn:"Weka sahihi ",
        email:"Barua pepe",
        password:"Nenosiri",
        forgot:"Umesahau nenosiri yako?",
        forgotQuery:"Weka barua pepe yako na tutakutumia msimbo ili kukusaidia kuweka upya nenosiri lako.",
        reset:"Tuma msimbo wa kuweka upya",
        back:"Nyuma",
        createAccount:"Fungua akaunti",
        uppercase: 'Angalau herufi kubwa moja' ,
        lowercase: 'Angalau herufi ndogo moja' ,
        digit: 'Angalau tarakimu moja' ,
        special: 'Angalau mhusika mmoja maalum' ,
        minLength: 'Inapaswa kuwa zaidi ya herufi 8' ,
        maxLength: 'Inapaswa kuwa chini ya herufi 16',
        enterValidEmail: "Tafadhali ingiza barua pepe halali au ufungue akaunti",
        enterReset:"Weka msimbo uliopokelewa",
        checkEmail:"Tafadhali angalia barua pepe yako ",
        forCode:"kwa msimbo wa kuweka upya na unda nenosiri mpya.",
        verificationError:"Tafadhali weka msimbo sahihi wa kuweka upya.",
        createPassword:"Unda nenosiri mpya",
        reenter:"Ingiza tena nenosiri",
        noMatch:"Manenosiri hayalingani",
        helperText:"Nenosiri lako lazima liwe na yafuatayo:",
        firstName:"Jina la kwanza",
        lastName:"Jina la familia",
        passwordRequirements: "Nenosiri lako lazima liwe na yafuatayo:",
        confirmPassword: "Thibitisha Nenosiri",
        signUp: "Jisajili",
        verifyAccount: "Thibitisha Akaunti",
        emailCheck: "Tafadhali angalia barua pepe yako kwa nambari ya kuthibitisha. Hii inaweza kuchukua dakika kadhaa.",
        invalidCode: "Nambari ya kuthibitisha imetolewa, tafadhali jaribu tena.",
        newCode: "Nambari mpya ya uthibitishaji imetumwa kwa mafanikio.",
        noCode: "Hukupokea nambari yako ya kuthibitisha?",
        resend: "Tuma tena Msimbo",
        verify: "Thibitisha",
        enterPassword: "Weka nenosiri jipya",
        setPassword: "Weka Nenosiri",
        accountExists: "Akaunti iliyo na barua pepe uliyopewa tayari ipo.",
        validEmail: "Tafadhali weka barua pepe halali.",
        passwordReset: "Weka Upya Nenosiri",
        setNewPassword: "Weka Nenosiri Jipya",
        siteOwnership: "Badilisha ruhusa za umiliki wa tovuti na Msimamizi wa Tovuti",
        updateSitesManaged: "Sasisha tovuti zinadhibitiwa",
        createNewSite: "Unda tovuti mpya",
        editSelectedSite: "Unda tovuti mpya",
        deleteSelectedSites: "Futa tovuti zilizochaguliwa",
        createNewSiteDialog: "Ili kuunda Tovuti mpya, weka maelezo muhimu na ubonyeze unda",
        editSiteDialog: "Ili kuhariri tovuti hii, jaza maelezo na ubonyeze Hariri",
        create: "Unda",
        cancel: "Ghairi",
        deleteSiteWarning: "ONYO: Hii itafuta wateja wote wanaohusishwa na wasimamizi wa tovuti",
        name: "Jina",
        serviceRadius: "Kipenyo (Km)",
        latitude: "Latitudo",
        longitude: "Longitude",
        description: "Maelezo",
        cognitoID: "Cognito ID",
        givenName: "Jina Lililopewa",
        familyName: "Jina la ukoo",
        siteName: "Jina la tovuti",
        siteDescription: "Maelezo ya Tovuti",
        smsDescription: "Maelezo ya sms",
        avgWaitMinute: "Muda wa wastani wa Kusubiri (dakika)",
        avgLineCount: "Urefu wa wastani wa mstari",
        estimatedDaily: "Jumla ya Matumizi ya Kila Siku (L)",
        subscriptionFee: "Ada ya Usajili",
        expectedJerrycans: "Wanaotarajiwa wa Jerrycans",
        nickname: "Jina la utani",
        updatePassword: "Sasisha Nenosiri",
        verificationCode: "Hukupokea nambari yako ya kuthibitisha?",
        resendCode: "Tuma tena Msimbo",
        or: "au",
        siteID: "Kitambulisho cha tovuti",
        customerID: "Kitambulisho cha Mteja",
        languageCode: "Msimbo wa lugha",
        languageName: "Jina la Lugha",
        addNewLanguage: "Ongeza lugha mpya",
        syncLanguageToCloud: "Sawazisha Lugha kwa Wingu",
        addLanguageTemplate: "Ongeza kiolezo cha lugha mpya (haipakii hadi umalize kuwasilisha misemo)",
        english: "Neno la Kiingereza",
        translation: "Neno lililotafsiriwa",
        deleteLanguageTemplate: "Je, ungependa kufuta lugha uliyochagua?",
        add: "Ongeza",
        delete: "Futa",
        language: "Lugha",
        sites: "Maeneo",
        siteInformation: "Habari za Tovuti",
        recentVisits: "Ziara za Hivi Karibuni",

        ////////////////////// MENU LAMBDA /////////////////////

        // should first two be under en? cause they're bilingual
        // maybe have a third language: Unknown, 'uk'
        menu_unknownUserStartState: "Welcome to TapGives!" +
            "\n Karibu TapGives!" +
            "\n———" +
            "\n Select a language: " +
            "\n Chagua lugha: " +
            "\n1. English" +
            "\n2. Swahili" +
            "\n0. Exit",
        menu_multilingualExit: "Thank you. Goodbye." +
            "\nAsante. Kwaheri.",

        /* signup text */
        menu_firstNamePrompt: "Ingiza jina lako la kwanza:",
        menu_lastNamePrompt: "Ingiza jina lako la mwisho:",
        menu_idNumberPrompt: "Ingiza nambari yako ya kitambulisho:",
        menu_pinSignUpPrompt: "Ingiza pini ya tarakimu 4:",
        menu_siteNicknamePrompt: "Ingiza jina la utani la tovuti yako ya maji:",
        menu_registrationConfirmation: "Sasa unaandikishwa!" +
            "\nTafadhali ruhusu dakika 1, kisha uanze upya kipindi " +
            "na uendelee na 'Nunua/Usasishe Usajili' ili kuamilisha " +
            "usajili wako.",
        menu_invalidSiteNickname: "Hakuna tovuti ya maji inayolingana na jina la utani lililotolewa." +
            "\nTafadhali thibitisha jina la utani la tovuti ya maji na ujaribu tena. Asante.",

        /* known customer text */
        menu_welcomeBack: "Karibu tena, ",
        menu_pinPrompt: "Tafadhali weka pin yako ya tarakimu 4 ili kuendelea:",
        menu_incorrectPin: "Nenosiri mbaya.",
        menu_validSubscriptionOptions: "Usajili wako ni halali kwa mwezi." +
            "\n---" +
            "\n Ungependa kufanya nini?" +
            "\n1. Kusanya maji" +
            "\n0. Toka",
        menu_invalidSubscriptionOptions: "Usajili wako si halali kwa mwezi." +
            "\n---" +
            "\n Ungependa kufanya nini?" +
            "\n2. Nunua/Sasisha Usajili" +
            "\n0. Toka",
        menu_invalidSelectionInCollectWater: "Uteuzi mbaya. Tafadhali jaribu tena.",
        menu_collectWaterVerification: "Utapokea ujumbe baada ya muda mfupi ulio na nambari yako ya uthibitishaji. Asante.",
        menu_invalidSelectionInPurchaseSubscription: "Uteuzi mbaya. Usajili tayari ni halali.",
        menu_purchaseSubscriptionConfirmationPt1: "Bonyeza 1 ili kuendelea na shughuli ya ",
        menu_purchaseSubscriptionConfirmationPt2: "shilingi kwa usajili wa kila mwezi." + "\nBonyeza 0 ili kuondoka.",
        menu_paymentAndNotification: "Tafadhali endelea kulipia usajili." +
            "Utapokea arifa muda mfupi baadaye. Asante.",
        menu_exit: "Asante kwaheri.",


        ////////////////////// SEND SUBSCRIPTION MESSAGES LAMBDA /////////////////////
        // edit
        subscriptionSuccess: "umesajiliwa",
        subscriptionFailure: "tatizo la kukusajili. jaribu tena",
        reminder: "kumbuka kujiandikisha",
        unsubscription: "umeondolewa",


        ////////////////////// SEND VISIT MESSAGES LAMBDA /////////////////////
        // edit
        customerMessage: "mpendwa mteja, uthibitishaji ni:",
        siteManagerMessage: "mpendwa meneja, uthibitishaji wa mteja ni: ",

    }
}
export const baseLanguages = [
    {id: "en", language: "English"},
    {id: "sw", language: "Swahili"},
]
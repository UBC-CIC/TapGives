import {API, Auth} from "aws-amplify";
import * as queries from "../../graphql/queries";
import * as mutations from "../../graphql/mutations";
import {Language, Phrase} from "../../models";
import LocalizedStrings from "react-localization";

const baseLanguages  = {
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
        setNewPassword: "Set New Password"
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
        setNewPassword: "Weka Nenosiri Jipya"
    }
}
class LocalizationHelper {
    static async loggedIn(){
        try {
            await Auth.currentAuthenticatedUser()
            return true
        }   catch(e) {
            return false
        }
    }
    // Checks store for languages, if fails, returns the default languages , then queries backend to update for later queries
    static getLanguageCodesFast() {
        if (localStorage.hasOwnProperty("languages")) {
            return JSON.parse(localStorage.getItem("languages"))
        } else {
            // for (const languageCode in baseLanguages) {
            //     if (!localStorage.hasOwnProperty(languageCode)) {
            //         localStorage.setItem(languageCode, JSON.stringify(baseLanguages[languageCode]))
            //     }
            // }
            try {
                return [{id: "en", language: "English"}, {id: "sw", language: "Swahili"}]
            } finally {
                LocalizationHelper.getLanguageCodes().then(
                    LocalizationHelper.getLanguagePhrases)
            }
        }
    }
    /*
        payload in shape:
        {
            en: {
                signIn:"Sign In",
                email:"Email",
                ...
            },
            sw: {
                ...
            }
        }
     */
    static async getLanguageCodes() {
        if (localStorage.hasOwnProperty("languages") && sessionStorage.hasOwnProperty("updated")) {
            return JSON.parse(localStorage.getItem("languages"))
        } else {
            if (localStorage.hasOwnProperty("languages")) {
                try {
                    return JSON.parse(localStorage.getItem("languages"))
                } finally {
                    let languageRaw;
                    if (await LocalizationHelper.loggedIn()) {
                        languageRaw = (await API.graphql({query: queries.listLanguages, authMode: 'AMAZON_COGNITO_USER_POOLS'})).data.listLanguages.items
                    }
                    else
                        languageRaw = (await API.graphql({query: queries.listLanguages, authMode: 'AWS_IAM'})).data.listLanguages.items
                    localStorage.setItem("languages",
                        JSON.stringify(languageRaw))
                    sessionStorage.setItem("updated", true)
                }
            } else {
                let languageRaw;
                if (await LocalizationHelper.loggedIn())
                    languageRaw = (await API.graphql({query: queries.listLanguages, authMode: 'AMAZON_COGNITO_USER_POOLS'})).data.listLanguages.items
                else
                    languageRaw = (await API.graphql({query: queries.listLanguages, authMode: 'AWS_IAM'})).data.listLanguages.items
                localStorage.setItem("languages",
                    JSON.stringify(languageRaw))
                sessionStorage.setItem("updated", true)
                return languageRaw
            }
        }
    }
    // Checks store for languages, if fails, returns the default languages , then queries backend to update for later queries
    static getLanguagePhrasesFast() {
        const languageCodes = LocalizationHelper.getLanguageCodesFast()
        let languagePhrases = {}
        for (const language in languageCodes) {
            const code = languageCodes[language].id
            if (localStorage.hasOwnProperty(code)) {
                languagePhrases[code] = JSON.parse(localStorage.getItem(code))
            } else {
                return baseLanguages
            }
        }
        return languagePhrases
    }
    static async getLanguagePhrases() {
        const languageCodes = await LocalizationHelper.getLanguageCodes()
        let languagePhrases = {}
        for (const language in languageCodes) {
            const code = languageCodes[language].id
            if (!localStorage.hasOwnProperty(code)) {
                languagePhrases[code] = {}
                // Query and return phrases for each language
                let phrases;
                if (await LocalizationHelper.loggedIn())
                    phrases = (await API.graphql({query: queries.phraseByLanguage, authMode: 'AMAZON_COGNITO_USER_POOLS', variables:{languageID: code}})).data.phraseByLanguage.items
                else
                    phrases = (await API.graphql({query: queries.phraseByLanguage, authMode: 'AWS_IAM', variables:{languageID: code}})).data.phraseByLanguage.items
                console.log(phrases)
                for (const val in phrases) {
                    languagePhrases[code][phrases[val].id] = phrases[val].data
                }
                localStorage.setItem(code, JSON.stringify(languagePhrases[code]))
            } else {
                languagePhrases[code] = JSON.parse(localStorage.getItem(code))
            }
        }
        return(languagePhrases)
    }
    static async checkUpdatedLanguages() {
        // localStorage.clear()
        const languageCodes = LocalizationHelper.getLanguageCodesFast()
        for (const language in languageCodes) {
            localStorage.removeItem(languageCodes[language].id)
        }
        sessionStorage.clear()
        await LocalizationHelper.getLanguagePhrases()
    }
    static async addMultipleLanguageCodes(languageCode) {
        for (const code in languageCode){
            LocalizationHelper.addLanguageCode(code, languageCode[code])
        }
    }
    static async addLanguageCode(languageCode, languageName) {
        try {
            const languageInput = {
                id: languageCode,
                language: languageName,
            }
            await API.graphql({
                query: mutations.createLanguage,
                variables: {input: languageInput}
            })
        } catch (error) {
            console.log("Error saving Language: "+languageCode + languageName, error);
        }
    }
    static async editPhrase(languageCode, phraseID, newData) {
        try {
            const languageInput = {
                id: phraseID,
                languageID: languageCode,
                data: newData,
            }
            await API.graphql({
                query: mutations.updatePhrase,
                variables: {input: languageInput}
            })
        } catch (error) {
            console.log("Error saving phrase: "+languageCode + phraseID, error);
        }
    }
    static async addMultipleLanguagePhrases(languagePhrases) {
        for (const languageID in languagePhrases) {
            for (const phrase in languagePhrases[languageID]) {
                LocalizationHelper.addLanguagePhrase(languageID, phrase, languagePhrases[languageID][phrase])
            }
        }
    }
    static async addLanguagePhrase(languageID, phraseName, dataName) {
        try {
            const phrase = {
                languageID: languageID,
                id: phraseName,
                data: dataName,
            }
            await API.graphql({
                query: mutations.createPhrase,
                variables: {input: phrase}
            })
        } catch (error) {
            console.log("Error saving phrase: "+languageID+phraseName+dataName, error);
        }
    }
    static async deleteLanguageCascade(languageID) {
        let phrases;
        if (await LocalizationHelper.loggedIn())
            phrases = (await API.graphql({query: queries.phraseByLanguage, authMode: 'AMAZON_COGNITO_USER_POOLS', variables:{languageID: languageID}})).data.phraseByLanguage.items
        else
            phrases = (await API.graphql({query: queries.phraseByLanguage, authMode: 'AWS_IAM', variables:{languageID: languageID}})).data.phraseByLanguage.items
        for (const phrase in phrases) {
            const phraseData = {
                id: phrases[phrase].id,
                languageID: phrases[phrase].languageID
            }
            API.graphql({
                query: mutations.deletePhrase,
                variables: { input: phraseData}
            })
        }
        const languageData = {
            id: languageID
        }
        await API.graphql({
            query: mutations.deleteLanguage,
            variables: {input: languageData}
        })
    }
}

export default LocalizationHelper
import {API, Auth} from "aws-amplify";
import * as queries from "../../graphql/queries";
import * as mutations from "../../graphql/mutations";
import {Language, Phrase} from "../../models";
import LocalizedStrings from "react-localization";
import {updateLoginState} from "../../Actions/loginActions";
import {updateLanguageCodes, updateLanguageState, updateStringsState} from "../../Actions/languageActions";
import {connect} from "react-redux";
import {baseAssociations, baseLanguages} from "../languageData";

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
        if (!sessionStorage.hasOwnProperty("updated")) {
            LocalizationHelper.getLanguageCodes().then(LocalizationHelper.getLanguagePhrases)
        }
        if (localStorage.hasOwnProperty("languages")) {
            return JSON.parse(localStorage.getItem("languages"))
        } else {
            // for (const languageCode in baseLanguages) {
            //     if (!localStorage.hasOwnProperty(languageCode)) {
            //         localStorage.setItem(languageCode, JSON.stringify(baseLanguages[languageCode]))
            //     }
            // }
            try {
                return baseAssociations
            } finally {
                LocalizationHelper.getLanguageCodes().then(LocalizationHelper.getLanguagePhrases)
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
                    if (languageRaw !== 0) {
                        console.log(languageRaw)
                        localStorage.setItem("languages", JSON.stringify(languageRaw))
                    }
                    sessionStorage.setItem("updated", true)
                }
            } else {
                let languageRaw;
                if (await LocalizationHelper.loggedIn())
                    languageRaw = (await API.graphql({query: queries.listLanguages, authMode: 'AMAZON_COGNITO_USER_POOLS'})).data.listLanguages.items
                else
                    languageRaw = (await API.graphql({query: queries.listLanguages, authMode: 'AWS_IAM'})).data.listLanguages.items
                if (languageRaw.length !== 0)
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
                updateLanguageCodes(languageCodes)
                updateStringsState(languagePhrases)
            } else {
                languagePhrases[code] = JSON.parse(localStorage.getItem(code))
            }
        }
        return(languagePhrases)
    }
    static async checkUpdatedLanguages() {
        // localStorage.clear()
        const languageCodes = JSON.parse(localStorage.getItem("languages"))
        for (const language in languageCodes) {
            localStorage.removeItem(languageCodes[language].id)
        }
        sessionStorage.clear()
        await LocalizationHelper.getLanguagePhrases()
    }
    static async addMultipleLanguageCodes(languageCode) {
        for (const code in languageCode){
            LocalizationHelper.addLanguageCode(languageCode[code].id, languageCode[code].language)
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
            console.log("Error saving Language: "+ languageCode + languageName, error);
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
    static getLanguage() {
        if (localStorage.hasOwnProperty("code") && localStorage.hasOwnProperty("language")) {
            return ({
                code: localStorage.getItem("code"),
                language: localStorage.getItem("language"),
            })
        } else {
            localStorage.setItem("code", "en")
            localStorage.setItem("language", "English")
            return ({
                code: localStorage.getItem("code"),
                language: localStorage.getItem("language"),
            })
        }
    }
    static setLanguage(code, language) {
        localStorage.setItem("code", code)
        localStorage.setItem("language", language)
    }
}


const mapDispatchToProps = {
    updateLanguageState,
    updateStringsState,
    updateLanguageCodes,
};


export default connect(mapDispatchToProps)(LocalizationHelper);
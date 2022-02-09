import {API} from "aws-amplify";
import * as queries from "../../graphql/queries";
import * as mutations from "../../graphql/mutations";
import {Language, Phrase} from "../../models";
import LocalizedStrings from "react-localization";

class LocalizationHelper {
    static async getLanguageList() {
        if (localStorage.hasOwnProperty("languages") && sessionStorage.hasOwnProperty("updated")) {
            return JSON.parse(localStorage.getItem("languages"))
        } else {
            if (localStorage.hasOwnProperty("languages")) {
                try {
                    return JSON.parse(localStorage.getItem("languages"))
                } finally {
                    const languageRaw = (await API.graphql({query: queries.listLanguages, authMode: 'AWS_IAM'})).data.listLanguages.items
                    localStorage.setItem("languages",
                        JSON.stringify(languageRaw))
                    sessionStorage.setItem("updated", true)
                }
            } else {
                const languageRaw = (await API.graphql({query: queries.listLanguages, authMode: 'AWS_IAM'})).data.listLanguages.items
                localStorage.setItem("languages",
                    JSON.stringify(languageRaw))
                sessionStorage.setItem("updated", true)
                return languageRaw
            }
        }
    }
    static async getLanguages() {
        const languageRaw = await this.getLanguageList()
        let languageProcessed = {}
        for (const language in languageRaw) {
            const code = languageRaw[language].id
            if (!localStorage.hasOwnProperty(code)) {
                languageProcessed[code] = {}
                // Query and return phrases for each language
                const languagePhrases = (await API.graphql({query: queries.listPhrases, authMode: 'AWS_IAM', variables:{filter: {languageID: {eq: code}}}})).data.listPhrases.items
                // console.log(languagePhrases)
                for (const val in languagePhrases) {
                    languageProcessed[code][languagePhrases[val].phrase] = languagePhrases[val].data
                }
                localStorage.setItem(code, JSON.stringify(languageProcessed[code]))
            } else {
                languageProcessed[code] = JSON.parse(localStorage.getItem(code))
            }
        }
        return(languageProcessed)
    }
    static async checkUpdatedLanguages() {
        
    }
    static async addMultipleLanguageCodes(languageCode) {
        for (const code in languageCode){
            this.addLanguageCode(code, languageCode[code])
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
    static async addMultipleLanguagePhrases(languagePhrases) {
        for (const languageID in languagePhrases) {
            for (const phrase in languagePhrases[languageID]) {
                this.addLanguagePhrase(languageID, phrase, languagePhrases[languageID][phrase])
            }
        }
    }
    static async addLanguagePhrase(languageID, phraseName, dataName) {
        try {
            const phrase = {
                languageID: languageID,
                phrase: phraseName,
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
}

export default LocalizationHelper
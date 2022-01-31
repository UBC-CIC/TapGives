import {API} from "aws-amplify";
import * as queries from "../../graphql/queries";
import * as mutations from "../../graphql/mutations";
import {Language, Phrase} from "../../models";
import LocalizedStrings from "react-localization";

class LocalizationHelper {
    static async getLanguages() {
        const languageRaw = (await API.graphql({query: queries.listLanguages, authMode: 'AWS_IAM'})).data.listLanguages.items
        let languageProcessed = {}
        for (const language in languageRaw) {
            const code = languageRaw[language].id
            languageProcessed[code] = {}
            // Query and return phrases for each language
            const languagePhrases = (await API.graphql({query: queries.listPhrases, authMode: 'AWS_IAM', variables:{filter: {languageID: {eq: code}}}})).data.listPhrases.items
            // console.log(languagePhrases)
            for (const val in languagePhrases) {
                languageProcessed[code][languagePhrases[val].phrase] = languagePhrases[val].data
            }
        }
        return(languageProcessed)
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
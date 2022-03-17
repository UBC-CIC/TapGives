import {Auth, Storage} from "aws-amplify";
import {updateLanguageCodes, updateLanguageState, updateStringsState} from "../../Actions/languageActions";
import {connect} from "react-redux";
import {baseLanguages, basePhrases} from "../languageData";
const store = async() => {
    localStorage.setItem("languages", JSON.stringify(await LocalizationHelper.queryLanguages()))
    localStorage.setItem("phrases", JSON.stringify(await LocalizationHelper.queryPhrases()))
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
        try {
            if (!sessionStorage.hasOwnProperty("updated")) {
                sessionStorage.setItem("updated",true)

                store()
            }
        } catch (e) {
            console.log("Failed querying phrases",e)
        }
        try {
            if (!localStorage.hasOwnProperty("languages"))
                throw new Error("No languages")
            return JSON.parse(localStorage.getItem("languages"))
        } catch (e) {
            console.log("Saved languages bad, try deleting cache")
            return baseLanguages
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
        try {
            const languages = await LocalizationHelper.queryLanguages()
            localStorage.setItem("languages", JSON.stringify(languages))
            return languages
        } catch (e) {
            console.log("Failed querying languages",e)
            return baseLanguages
        }
    }
    // Checks store for languages, if fails, returns the default languages , then queries backend to update for later queries
    static getLanguagePhrasesFast() {
        try {
            if (!sessionStorage.hasOwnProperty("updated")) {
                sessionStorage.setItem("updated",true)
                store()
            }
        } catch (e) {
            console.log("Failed querying phrases",e)
        }
        try {
            if (!localStorage.hasOwnProperty("phrases"))
                throw new Error("No phrases")
            return JSON.parse(localStorage.getItem("phrases"))
        } catch (e) {
            console.log("Saved phrases bad, try deleting cache")
            return basePhrases
        }
    }
    static async getLanguagePhrases() {
        try {
            await store()
            console.log(JSON.parse(localStorage.getItem("phrases")))
            return JSON.parse(localStorage.getItem("phrases"))
        } catch (e) {
            console.log("Failed querying phrases",e)
            return basePhrases
        }
    }
    static async checkUpdatedLanguages() {
        // localStorage.clear()
        await LocalizationHelper.getLanguagePhrases()
    }
    static async updateLanguage(languages, phrases) {
        await Storage.put("baseLanguages.json", languages)
        await Storage.put("basePhrases.json", phrases)
        localStorage.setItem("languages", JSON.stringify(languages))
        localStorage.setItem("phrases", JSON.stringify(phrases))
    }

    static async deleteLanguageCascade(languageID) {
        if (languageID === "en") {
            console.log("Cannot delete english")
            return
        }
        let languages = await LocalizationHelper.queryLanguages()
        let phrases = await LocalizationHelper.queryPhrases()
        console.log(languages)
        languages = languages.splice(languages.findIndex((language)=>language.id ===languageID),1)
        delete phrases[languageID]
        console.log(languages)
        console.log(phrases)
        await Storage.put("baseLanguages.json", languages)
        await Storage.put("baseLanguages.json", phrases)
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
    // eg: en -> English
    static async queryLanguages() {
        return JSON.parse(await (await Storage.get(`baseLanguages.json`, { download: true })).Body.text())
    }
    // eg: username: Enter Username here
    static async queryPhrases() {
        console.log(JSON.parse(await (await Storage.get(`basePhrases.json`, { download: true })).Body.text()))
         return JSON.parse(await (await Storage.get(`basePhrases.json`, { download: true })).Body.text())
    }
}


const mapDispatchToProps = {
    updateLanguageState,
    updateStringsState,
    updateLanguageCodes,
};


export default connect(mapDispatchToProps)(LocalizationHelper);
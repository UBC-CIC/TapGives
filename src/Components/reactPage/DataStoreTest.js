import React from "react";
import Amplify, {DataStore} from "aws-amplify";
import {Language, Phrase} from "../../models";
import {Button, TextField} from "@material-ui/core";
import amplifyConfig from "../../aws-exports";
Amplify.configure(amplifyConfig);
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
const baseAssociations = {
    en : "English",
    sw : "Swahili",
}
class DataStoreTest extends React.Component {
    constructor() {
        super();
        this.state = {
            id : "",
            phrase : "",
            data : ""

        }
    }
    async componentDidMount() {
        try {
            // await DataStore.save(
            //     new Language({
            //         id: "l0",
            //         code: "en",
            //         language: "English"
            //     })
            // );
            // console.log("Post saved successfully!");
        } catch (error) {
            console.log("Error saving language", error);
        }
        try {
            const posts = await DataStore.query(Language);
            console.log("Languages retrieved successfully!", JSON.stringify(posts, null, 2));
        } catch (error) {
            console.log("Error retrieving language", error);
        }

    }
    async clearDataStore () {
        try {
            await DataStore.clear()
            const posts = await DataStore.query(Language);
            console.log("Posts retrieved successfully!", JSON.stringify(posts, null,    2));
        } catch (error) {
            console.log("Error retrieving posts", error);
        }
    }

    async addPhrase() {
        try {
            await DataStore.save(
                new Phrase({
                    code : this.state.id,
                    phrase : this.state.phrase,
                    data : this.state.data,
                })
            )
        } catch (error) {
            console.log("Error saving phrase", error);
        }
        console.log(this.state.data)
    }

    async syncData() {
        const languageRaw = await DataStore.query(Language)
        let languageProcessed = {}
        for (const language in languageRaw){
            const code = languageRaw[language].code
            languageProcessed[code] = {}
            const languagePhrases = await DataStore.query(Phrase, phrase=>phrase.code("eq", code))
            for (const val in languagePhrases) {
                languageProcessed[code][languagePhrases[val].phrase] = languagePhrases[val].data
            }

        }
        console.log(languageProcessed)
    }
    async addBaseData() {
        let phraseList = []

        for (const code in baseLanguages) {
            console.log(code) // Prints current language being saved
            phraseList.push([])
            for (const phrase in baseLanguages[code]) {
                try {
                    phraseList[phraseList.length - 1].push(DataStore.save(
                        new Phrase({
                            code : code,
                            phrase : phrase,
                            data : baseLanguages[code][phrase]
                        })
                    ))
                } catch (error) {
                    console.log("Error saving phrase: "+baseLanguages[code]+phrase+baseLanguages[code][phrase], error);
                }
            }
        }
        await Promise.all(phraseList.map((language)=>Promise.all(language)))
    }
    async addLanguages() {

        let languageList = []
        for (const code in baseAssociations){
            try {
                languageList.push(DataStore.save(
                    new Language({
                        code: code,
                        language: baseAssociations[code]
                    })
                ))
            } catch (error) {
                console.log("Error saving Language: "+code+baseAssociations[code], error);
            }
        }
    }
    render() {
        return(<div>
            <div>
                This should be the dataStore test
            </div>
            <Button variant="outlined" onClick={this.clearDataStore.bind(this)}>
                Clear DataStore
            </Button>
            <Button variant="outlined" onClick={this.syncData.bind(this)}>
                Sync to cloud
            </Button>
            <TextField variant="outlined"  label={"Language Code"} onChange={(val)=>{this.setState({id: val.target.value})}}></TextField>
            <TextField variant="outlined" label={"Phrase Prompt"} onChange={(val)=>{this.setState({phrase: val.target.value})}}></TextField>
            <TextField variant="outlined"  label={"Data"} onChange={(val)=>{this.setState({data: val.target.value})}}></TextField>
            <Button variant="outlined" onClick={this.addPhrase.bind(this)}>
                Add phrase
            </Button>
            <Button variant="outlined" onClick={this.addBaseData.bind(this)}>
                Add Base Data
            </Button>
            <Button variant="outlined" onClick={this.addLanguages.bind(this)}>
                Add Base Languages
            </Button>
        </div>)
    }
}

export default DataStoreTest
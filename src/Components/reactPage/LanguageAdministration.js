import React, {useState} from "react";
import {
    Box,
    Button, Container, Dialog, DialogActions, DialogContentText,
    FormControl, FormLabel,
    InputLabel,
    NativeSelect,
    Table, TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow, TextField
} from "@material-ui/core";
import LocalizedStrings from "react-localization";
import LocalizationHelper from "../Helpers/LocalizationHelper";
import Grid from "@material-ui/core/Grid";
import {center} from "@turf/turf";
import {GridCell} from "@mui/x-data-grid";
import {connect} from "react-redux";


class LanguageAdministration extends React.Component {
    constructor(props) {
        super(props);
        const languageRequirements = [
            {
                id: "id",
                display: this.props.strings.languageCode,
            },
            {
                id: "language",
                display: this.props.strings.languageName,
            },
        ]
        const languagePhrases = LocalizationHelper.getLanguagePhrasesFast()
        // Object.keys(languagePhrases)[0]
        const phraseCodes = Object.entries(languagePhrases["en"])
        const newLanguageInfo = languageRequirements.reduce((prev, currReq)=> {
            return Object.assign(prev, {[currReq.id]: ""})
        }, {})
        const newLanguageErrors = languageRequirements.reduce((prev, currReq)=> {
            return Object.assign(prev, {[currReq.id]: false})
        }, {})
        this.state = {
            languageRequirements: languageRequirements,
            currentLanguage: "English",
            currentLanguageCode: "en",
            languageCode: LocalizationHelper.getLanguageCodesFast(),
            languagePhrases: languagePhrases,
            phraseCodes: phraseCodes,
            translatedPhrases: JSON.parse(JSON.stringify(languagePhrases["en"])),// deep copy
            openNewLanguageMenu: false,
            newLanguageErrors:newLanguageErrors,
            newLanguageInfo:newLanguageInfo,
            deleteLanguageMenu: false,
        }
    }
    changeLanguage(input) {
        const languageName = input.target.value
        console.log(languageName)
        const languageCode = this.state.languageCode.find((language)=>{
                return language.language === languageName
            }).id
        console.log(languageCode)
        console.log(this.state.languagePhrases)
        this.setState({
            currentLanguage: input.target.value,
            currentLanguageCode: languageCode,
            translatedPhrases: JSON.parse(JSON.stringify(this.state.languagePhrases[languageCode])) // deep copy
        })
        //this.state.languagePhrases[this.state.currentLanguageCode][phrase[0]]
        console.log(this.state.languagePhrases[this.state.currentLanguageCode])
    }
    createNewLanguage() {
        // console.log(this.state.newLanguageInfo)
        // console.log(this.state.newLanguageErrors)
        let allPassed = true
        let errors = this.state.languageRequirements.reduce((prev, req)=> {
            const out = !/.+/.test(this.state.newLanguageInfo[req.id]) || this.state.languageCode.some((language)=>language[req.id] === this.state.newLanguageInfo[req.id])
            if (out)
                allPassed = false
            return Object.assign(prev, {
                [req.id] : out
            })
        },{})
        this.setState({
            newLanguageErrors: errors
        })
        if (allPassed) {
            // Empty the values for the next language
            const newLanguageInfo = this.state.languageRequirements.reduce((prev, currReq)=> {
                return Object.assign(prev, {[currReq.id]: ""})
            }, {})
            const newLanguageErrors = this.state.languageRequirements.reduce((prev, currReq)=> {
                return Object.assign(prev, {[currReq.id]: false})
            }, {})
            // Create empty phrase list for the language
            let phrases = {}
            for (const phrase in this.state.phraseCodes)
                phrases = Object.assign(phrases, {[this.state.phraseCodes[phrase][0]]: ""})

            this.state.languageCode.push({
                id: this.state.newLanguageInfo.id,
                language: this.state.newLanguageInfo.language,
            })
            this.setState({
                languagePhrases: Object.assign(this.state.languagePhrases, {[this.state.newLanguageInfo.id]:phrases}),
                openNewLanguageMenu: false,
                newLanguageInfo: newLanguageInfo,
                newLanguageErrors: newLanguageErrors,
            })
            this.changeLanguage({target:{value:this.state.newLanguageInfo.language}})
        }
    }
    async updateLanguage() {
        const languages = await LocalizationHelper.getLanguageCodes()
        // Language is in storage, only update language
        if (languages.some((language) => language.id === this.state.currentLanguageCode)) {
            console.log("update")
            // await all actions together
            let promiseList = []
            for (const phrase in this.state.translatedPhrases) {
                console.log(this.state.translatedPhrases[phrase])
                if (!this.state.languagePhrases[this.state.currentLanguageCode].hasOwnProperty(phrase)) {
                    promiseList.push(LocalizationHelper.addLanguagePhrase(this.state.currentLanguageCode, phrase, this.state.translatedPhrases[phrase]))
                } else if (this.state.translatedPhrases[phrase] !== this.state.languagePhrases[this.state.currentLanguageCode][phrase]) {
                    promiseList.push(LocalizationHelper.editPhrase(this.state.currentLanguageCode, phrase, this.state.translatedPhrases[phrase]))
                }
            }
            await Promise.all(promiseList)
            await LocalizationHelper.checkUpdatedLanguages()
        } else { //Language is not in storage, will upload
            console.log("upload")
            // await all actions together
            let promiseList = []
            promiseList.push(LocalizationHelper.addLanguageCode(this.state.currentLanguageCode, this.state.currentLanguage))
            for (const phrase in this.state.translatedPhrases) {
                promiseList.push(LocalizationHelper.addLanguagePhrase(this.state.currentLanguageCode, phrase, this.state.translatedPhrases[phrase]))
            }
            await Promise.all(promiseList)
            await LocalizationHelper.checkUpdatedLanguages()
        }
        sessionStorage.setItem("updated", "false")
        this.setState({
            languageCode: await LocalizationHelper.getLanguageCodes(),
            languagePhrases: await LocalizationHelper.getLanguagePhrases(),
        })
        this.setState({
            languagePhrases: Object.assign(this.state.languagePhrases, {
                [this.state.currentLanguageCode]: this.state.translatedPhrases
            })
        })
    }
    async deleteLanguage() {

    }
    render() {
        return <div>
            <Grid container direction={"row"} alignItems={"center"} >
                <FormControl>
                    <NativeSelect
                        value={this.state.currentLanguage}
                        inputProps={{
                            name: "Language",
                            id: "selectLanguage"
                        }}
                        onChange={this.changeLanguage.bind(this)}
                    >{this.state.languageCode.map((val) => {return <option > {val.language} </option>})}
                    </NativeSelect>
                </FormControl>
                <FormLabel>{this.props.strings.languageCode + ": " + this.state.currentLanguageCode}</FormLabel>
                <Button variant={"outlined"} onClick={()=>{this.setState({openNewLanguageMenu: true})}}>{this.props.strings.addNewLanguage}</Button>
                <Button variant={"outlined"} onClick={this.updateLanguage.bind(this)}>{this.props.strings.syncLanguageToCloud}</Button>
                <Button variant={"outlined"} onClick={()=>{this.setState({deleteLanguageMenu: true})}}>{this.props.strings.delete}</Button>
                <Dialog open={this.state.openNewLanguageMenu} onClose={()=>{this.setState({openNewLanguageMenu: false})}} maxWidth={"md"} >
                    <DialogActions>
                        <Grid container direction={"column"} justifyContent={"center"}>
                            <DialogContentText>
                                {this.props.strings.addLanguageTemplate}
                            </DialogContentText>
                            <Grid container direction = "row" spacing = {1}>
                                {this.state.languageRequirements.map((requirement)=> (
                                    <Grid item>
                                        <TextField
                                            autoFocus
                                            margin="dense"
                                            type="text"
                                            fullWidth
                                            variant="standard"
                                            label = {requirement.display}
                                            error = {this.state.newLanguageErrors[requirement.id]}
                                            defaultValue = {this.state.newLanguageInfo[requirement.id]}
                                            onChange={(input)=> {
                                                const text = input.target.value
                                                this.setState({
                                                    newLanguageInfo: Object.assign(this.state.newLanguageInfo, {
                                                        [requirement.id]:text
                                                    })
                                                })
                                            }}/>
                                    </Grid>
                                ))}
                            </Grid>
                            <DialogActions>
                                <Button onClick={()=>{this.setState({openNewLanguageMenu: false})}}>Cancel</Button>
                                <Button onClick={this.createNewLanguage.bind(this)}>Add</Button>
                            </DialogActions>
                        </Grid>

                    </DialogActions>
                </Dialog>
                <Dialog open={this.state.deleteLanguageMenu} onClose={()=>{this.setState({deleteLanguageMenu: false})}} maxWidth={"md"} >
                    <DialogActions>
                        <Grid container direction={"column"} justifyContent={"center"}>
                            <DialogContentText>
                                {this.props.strings.deleteLanguageTemplate}
                            </DialogContentText>
                            <DialogActions>
                                <Button onClick={()=>{this.setState({deleteLanguageMenu: false})}}>{this.props.strings.cancel}</Button>
                                <Button onClick={this.deleteLanguage.bind(this)}>{this.props.strings.delete}</Button>
                            </DialogActions>
                        </Grid>

                    </DialogActions>
                </Dialog>
            </Grid>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell >Phrase Code</TableCell>
                        <TableCell align={"center"}>{this.props.strings.english}</TableCell>
                        <TableCell align="right">{this.props.strings.translation}</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {this.state.phraseCodes.map((phrase) =>
                        <TableRow key = {phrase[0]}>
                            <TableCell>{phrase[0]}</TableCell>
                            <TableCell align={"center"}>{phrase[1]}</TableCell>
                            <TableCell align="right">
                                <TextField
                                    fullWidth
                                    value={this.state.translatedPhrases[phrase[0]]}
                                    onChange={(value) => {
                                        this.setState({
                                            translatedPhrases: Object.assign(this.state.translatedPhrases, {
                                                [phrase[0]]: value.target.value
                                            })
                                        })
                                    }}
                                />
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    }
}


const mapStateToProps = (state) => {
    return {
        language: state.languageState.language,
        code: state.languageState.code,
        languageCode: state.languageState.languageCodes,
        strings: state.languageState.strings,
    };
};



export default connect(mapStateToProps)(LanguageAdministration);
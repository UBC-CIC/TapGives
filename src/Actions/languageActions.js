
// ===================================---CHANGE LOGIN STATE---=======================================
// Updates the login state of the application
export const updateLanguageState = (payload) => {
    /*
        payload in shape:
        {
            code: "en",
            language: "English",
        }
     */
    // console.log(payload)
    return (dispatch) => {
        dispatch({ type: "SET_LANGUAGE", payload: payload });
    }
}
export const updateStringsState = (payload) => {
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
    return (dispatch) => {
        dispatch({ type: "SET_STRINGS", payload: payload });
    }
}
export const updateLanguageCodes = (payload) => {
    /*
        payload in shape:
        [
            {
                id: "en",
                language: "English,
            },
            {
                id: "sw",
                language: "Swahili",
            },
        ]
     */
    return (dispatch) => {
        dispatch({ type: "SET_LANGUAGE_CODES", payload: payload });
    }
}
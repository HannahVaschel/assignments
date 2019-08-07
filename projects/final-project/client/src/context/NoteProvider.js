import React, { Component } from 'react'
import axios from 'axios'

const NoteContext = React.createContext()

class NoteProvider extends Component {
    constructor(){
        super()
        this.state = {
            user: JSON.parse(localStorage.getItem("user")) || {},
            token: localStorage.getItem("token") || "",
            authErrMsg: "",

            params: "",
            exactLink: "",
            resultArr: [],
            searchType: "byGeneral",

            convertedNotes: [],


        }
    }
    // * Tab Translator Functions
    tabToNote = fretsObj => {
        const frets = Object.values(fretsObj)
        console.log(frets)

        const notes = ["G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#"]
        const strings = ["E", "B", "G", "D", "A", "E"]
        let convertedNotes = []
        let fret
        for (let i = 0; i < frets.length; i++){
            fret = frets[i]
            let x = notes.indexOf(strings[i])
            if(fret >= 12){
                fret = fret % 12
            } else  fret = Number(fret)
            console.log(x)
            switch(fret){
                case 0:
                    convertedNotes.push(notes[x])
                    break
                case 1:
                    convertedNotes.push(notes[x + 1])
                    break
                case 2:
                    convertedNotes.push(notes[x + 2])
                    break
                case 3:
                    convertedNotes.push(notes[x + 3])
                    break
                case 4:
                    convertedNotes.push(notes[x + 4])
                    break
                case 5:
                    convertedNotes.push(notes[x + 5])
                    break
                case 6:
                    convertedNotes.push(notes[x + 6])
                    break
                case 7:
                    convertedNotes.push(notes[x + 7])
                    break
                case 8:
                    convertedNotes.push(notes[x + 8])
                    break
                case 9:
                    convertedNotes.push(notes[x + 9])
                    break
                case 10:
                    convertedNotes.push(notes[x + 10])
                    break
                case 11:
                    convertedNotes.push(notes[x + 11])
                    break
            }

        }
        console.log(convertedNotes)
        this.setState({ convertedNotes: convertedNotes })
    }

    // * Search Functions
    setSearchType = selected => {
        console.log(selected)
        this.setState({
            searchType: selected
        })
    }
    searchTabs = (params) => {
        const { artistName, songName, general, searchSelect } = params
        const artist = `a=${artistName}`
        const song = `s=${songName}`

        // axios.get(`http://www.songsterr.com/a/wa/bestMatchForQueryString?s=${songName}&a=${artistName}`)
        //     .then(res => console.log(res))
        //     .catch(err => console.log(err))
        
            
        if(artistName && songName){
            this.setState({ exactLink: `http://www.songsterr.com/a/wa/bestMatchForQueryString?s=${songName}&a=${artistName}`})
        } else {
            axios.get(`http://www.songsterr.com/a/ra/songs.json?pattern=${general}`)
                .then(res => {
                    this.setState({ resultArr: res.data })
                })
                .catch(err => console.log(err))
        }

        // this.setState(prevState => ({
        //     params: [...prevState.params, params]
        // }))
    }

    openNewTab = link => {
        window.open(link)
    }



    // * User Authorization Functions
    signup = credentials => {
        axios.post("/auth/signup", credentials)
            .then(res => {
                const { user, token } = res.data
                localStorage.setItem("user", JSON.stringify(user))
                localStorage.setItem("token", token)
                this.setState({ user, token })
            })
            .catch(err => this.handleAuthErr(err.response.data.errMsg))
    }

    login = credentials => {
        axios.post("/auth/login", credentials)
            .then(res => {
                const { user, token } = res.data
                localStorage.setItem("user", JSON.stringify(user))
                localStorage.setItem("token", token)
                this.setState({ user, token })
            })
            .catch(err => this.handleAuthErr(err.response.data.errMsg))
    }

    logout = () => {
        localStorage.removeItem("user")
        localStorage.removeItem("token")
        this.setState({ user: {}, token: "" })
    }

    handleAuthErr = authErrMsg => {
        this.setState({ authErrMsg })
    }


    render(){
        return(
            <NoteContext.Provider
                value={{
                    user: this.state.user,
                    token: this.state.token,
                    authErrMsg: this.state.authErrMsg,

                    signup: this.signup,
                    login: this.login,
                    logout: this.logout,

                    resultArr: this.state.resultArr,
                    exactLink: this.state.exactLink,
                    searchType: this.state.searchType,

                    searchTabs: this.searchTabs,
                    openNewTab: this.openNewTab,
                    setSearchType: this.setSearchType,

                    convertedNotes: this.state.convertedNotes,

                    tabToNote: this.tabToNote,
                }}
            >
                {this.props.children}
            </NoteContext.Provider>
        )
    }
}

export default NoteProvider

export const withNotes = C => props => (
    <NoteContext.Consumer>
        { value => <C {...value} {...props} /> }
    </NoteContext.Consumer>
)
import React, { Component } from 'react'

const ThemeContext = React.createContext()

class ThemeProvider extends Component {
    constructor(){
        super()
        this.state = {
            theme: "light"
        }
    }

    changeTheme = () => {
        console.log("themeChanged!")
        this.setState(prevState => ({
            theme: prevState.theme === "light" ? "dark" : "light"
        }))
    }

    render(){
        return(
            <ThemeContext.Provider
                value={{
                    theme: this.state.theme,
                    changeTheme: this.changeTheme,
                }}>
                    { this.props.children }
            </ThemeContext.Provider>
        )
    }
}

export const withTheme = C => props => (
    <ThemeContext.Consumer>
        { value => <C {...value} {...props}/> }
    </ThemeContext.Consumer>
)

export default ThemeProvider
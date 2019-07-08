import React from 'react'
import { withTheme }  from './context/ThemeProvider.js'

const App = props => {
    return(
        <div className={`app app-${props.theme}`}>
            <header className={`header header-${props.theme}`}>
                <h1>WELCOME to the Theme Changer</h1>
            </header>

            <main className={`main main-${props.theme}`}>
                <p>Click the Button to Toggle Theme</p>
                <button onClick={props.changeTheme}>Toggle Theme</button>
            </main>

            <footer className={`footer footer-${props.theme}`}>
                <p>This is a footer</p>
            </footer>
        </div>
    )
}

export default withTheme(App)
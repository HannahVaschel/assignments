import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'


// Functional Component -> Stateless or Display Component
    // capitalize function (component) names in react

// function HelloWorld(){
//     return (
//         <div>
//             <h1>Hello World</h1>
//             <h1>Hello World</h1>
//             <h1>Hello World</h1>
//         </div>
//     )
// }

// JSX (looks like html, acts like html... but works in javascript!)

// you can't return more than one item. you can wrap multiple items in one, i.e. put them inside a div, but you cannot return more than one thing


            // What to render, // Where to render
ReactDOM.render(<App />, document.getElementById('root'))
                                        // you'll ALWAYS put it in root
                // ^^^ this is the syntax to call a function in react ( <FunctionName />)


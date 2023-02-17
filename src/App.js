import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Calculator from "./calculator"

export default class App extends React.Component{
    render(){
        return(
            <>
                <Router>
                    <Routes>
                        <Route path={"/"} element={ <Calculator /> } ></Route>
                    </Routes>
                </Router>
            </>
        )
    }
}
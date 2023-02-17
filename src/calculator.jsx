import React from "react";

export default class Calculator extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            output: "",
        }
    }
    addDigit = (digit) => {
        this.setState((prevState) => ({
            output: prevState.output + digit,
        }))
    }
  
    addOperator = (operator) => {
        this.setState((prevState) => ({
            output: prevState.output + operator,
        }))
    }
  
    clearOutput = () => {
        this.setState({
            output: "",
        })
    }
  
    calculate = () => {
        try {
            this.setState({
                output: eval(this.state.output),
            })
        } catch (error) {
            this.setState({
                output: "Error",
            })
        }
    }
    render(){
        const { output } = this.state
        return(
            <>
                <div>
                    <div className="bg-slate-50 rounded-md p-3 shadow-lg">
                        <input type="text" className="text-3xl text-right h-16 w-80 pr-4 bg-white border-none rounded-lg shadow-md mb-4 pointer-events-none" value={output} readonly /><br />

                        <button className="w-16 h-16 text-lg m-2 rounded-md shadow-md bg-white text-gray-600 focus:outline-none hover:bg-gray-100 active:shadow-none" onClick={() => this.addDigit(1)}>1</button>
                        <button className="w-16 h-16 text-lg m-2 rounded-md shadow-md bg-white text-gray-600 focus:outline-none hover:bg-gray-100 active:shadow-none" onClick={() => this.addDigit(2)}>2</button>
                        <button className="w-16 h-16 text-lg m-2 rounded-md shadow-md bg-white text-gray-600 focus:outline-none hover:bg-gray-100 active:shadow-none" onClick={() => this.addDigit(3)}>3</button>
                        <button className="w-16 h-16 text-lg m-2 rounded-md shadow-md bg-white text-gray-600 focus:outline-none hover:bg-gray-100 active:shadow-none" onClick={() => this.addOperator('+')}>+</button><br />

                        <button className="w-16 h-16 text-lg m-2 rounded-md shadow-md bg-white text-gray-600 focus:outline-none hover:bg-gray-100 active:shadow-none" onClick={() => this.addDigit(4)}>4</button>
                        <button className="w-16 h-16 text-lg m-2 rounded-md shadow-md bg-white text-gray-600 focus:outline-none hover:bg-gray-100 active:shadow-none" onClick={() => this.addDigit(5)}>5</button>
                        <button className="w-16 h-16 text-lg m-2 rounded-md shadow-md bg-white text-gray-600 focus:outline-none hover:bg-gray-100 active:shadow-none" onClick={() => this.addDigit(6)}>6</button>
                        <button className="w-16 h-16 text-lg m-2 rounded-md shadow-md bg-white text-gray-600 focus:outline-none hover:bg-gray-100 active:shadow-none" onClick={() => this.addOperator('-')}>-</button><br />

                        <button className="w-16 h-16 text-lg m-2 rounded-md shadow-md bg-white text-gray-600 focus:outline-none hover:bg-gray-100 active:shadow-none" onClick={() => this.addDigit(7)}>7</button>
                        <button className="w-16 h-16 text-lg m-2 rounded-md shadow-md bg-white text-gray-600 focus:outline-none hover:bg-gray-100 active:shadow-none" onClick={() => this.addDigit(8)}>8</button>
                        <button className="w-16 h-16 text-lg m-2 rounded-md shadow-md bg-white text-gray-600 focus:outline-none hover:bg-gray-100 active:shadow-none" onClick={() => this.addDigit(9)}>9</button>
                        <button className="w-16 h-16 text-lg m-2 rounded-md shadow-md bg-white text-gray-600 focus:outline-none hover:bg-gray-100 active:shadow-none" onClick={() => this.addOperator('*')}>*</button><br />

                        <button className="w-16 h-16 text-lg m-2 rounded-md shadow-md bg-white text-gray-600 focus:outline-none hover:bg-gray-100 active:shadow-none" onClick={() => this.addDigit(0)}>0</button>
                        <button className="w-16 h-16 text-lg m-2 rounded-md shadow-md bg-white text-gray-600 focus:outline-none hover:bg-gray-100 active:shadow-none" onClick={() => this.clearOutput()}>C</button>
                        <button className="w-16 h-16 text-lg m-2 rounded-md shadow-md bg-white text-gray-600 focus:outline-none hover:bg-gray-100 active:shadow-none" onClick={() => this.calculate()}>=</button>
                        <button className="w-16 h-16 text-lg m-2 rounded-md shadow-md bg-white text-gray-600 focus:outline-none hover:bg-gray-100 active:shadow-none" onClick={() => this.addOperator('/')}>/</button><br />
                    </div>
                </div>
            </>
        )
    }
}
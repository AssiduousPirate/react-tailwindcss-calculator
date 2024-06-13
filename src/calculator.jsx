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

    deleteLastInput = () => {
        this.setState((prevState) => ({
            output: prevState.output.slice(0, -1),
        }));
    };
    render(){
        const { output } = this.state
        return(
            <>
                <div>
                    <div className="bg-slate-50 rounded-md p-2 shadow-lg">
                        <input type="text" className="text-3xl text-right h-16 w-80 bg-white border-none rounded-lg shadow-md mx-2 mb-3 pointer-events-none" value={output.toLocaleString('en-US')} readonly /><br />

                        <button className="w-16 h-16 text-lg mx-2 my-2 rounded-md shadow-md bg-white text-gray-600 focus:outline-none hover:bg-gray-100 active:shadow-none" onClick={() => this.addDigit(1)}>1</button>
                        <button className="w-16 h-16 text-lg mx-3 my-2 rounded-md shadow-md bg-white text-gray-600 focus:outline-none hover:bg-gray-100 active:shadow-none" onClick={() => this.addDigit(2)}>2</button>
                        <button className="w-16 h-16 text-lg mx-3 my-2 rounded-md shadow-md bg-white text-gray-600 focus:outline-none hover:bg-gray-100 active:shadow-none" onClick={() => this.addDigit(3)}>3</button>
                        <button className="w-16 h-16 text-lg mx-2 my-2 rounded-md shadow-md bg-white text-gray-600 focus:outline-none hover:bg-gray-100 active:shadow-none" onClick={() => this.addOperator('+')}>+</button><br />

                        <button className="w-16 h-16 text-lg mx-2 my-2 rounded-md shadow-md bg-white text-gray-600 focus:outline-none hover:bg-gray-100 active:shadow-none" onClick={() => this.addDigit(4)}>4</button>
                        <button className="w-16 h-16 text-lg mx-3 my-2 rounded-md shadow-md bg-white text-gray-600 focus:outline-none hover:bg-gray-100 active:shadow-none" onClick={() => this.addDigit(5)}>5</button>
                        <button className="w-16 h-16 text-lg mx-3 my-2 rounded-md shadow-md bg-white text-gray-600 focus:outline-none hover:bg-gray-100 active:shadow-none" onClick={() => this.addDigit(6)}>6</button>
                        <button className="w-16 h-16 text-lg mx-2 my-2 rounded-md shadow-md bg-white text-gray-600 focus:outline-none hover:bg-gray-100 active:shadow-none" onClick={() => this.addOperator('-')}>-</button><br />

                        <button className="w-16 h-16 text-lg mx-2 my-2 rounded-md shadow-md bg-white text-gray-600 focus:outline-none hover:bg-gray-100 active:shadow-none" onClick={() => this.addDigit(7)}>7</button>
                        <button className="w-16 h-16 text-lg mx-3 my-2 rounded-md shadow-md bg-white text-gray-600 focus:outline-none hover:bg-gray-100 active:shadow-none" onClick={() => this.addDigit(8)}>8</button>
                        <button className="w-16 h-16 text-lg mx-3 my-2 rounded-md shadow-md bg-white text-gray-600 focus:outline-none hover:bg-gray-100 active:shadow-none" onClick={() => this.addDigit(9)}>9</button>
                        <button className="w-16 h-16 text-lg mx-2 my-2 rounded-md shadow-md bg-white text-gray-600 focus:outline-none hover:bg-gray-100 active:shadow-none" onClick={() => this.addOperator('*')}>*</button><br />

                        <button className="w-16 h-16 text-lg mx-2 my-2 rounded-md shadow-md bg-white text-gray-600 focus:outline-none hover:bg-gray-100 active:shadow-none" onClick={() => this.addDigit(0)}>0</button>
                        <button className="w-16 h-16 text-lg mx-3 my-2 rounded-md shadow-md bg-white text-gray-600 focus:outline-none hover:bg-gray-100 active:shadow-none" onClick={() => this.clearOutput()}>C</button>
                        <button className="w-16 h-16 text-lg mx-3 my-2 rounded-md shadow-md bg-white text-gray-600 focus:outline-none hover:bg-gray-100 active:shadow-none" onClick={() => this.deleteLastInput()}>D</button>
                        <button className="w-16 h-16 text-lg mx-2 my-2 rounded-md shadow-md bg-white text-gray-600 focus:outline-none hover:bg-gray-100 active:shadow-none" onClick={() => this.addOperator('/')}>/</button><br />

                        <button className="w-80 h-16 text-lg m-2 rounded-md shadow-md bg-white text-gray-600 focus:outline-none hover:bg-gray-100 active:shadow-none" onClick={() => this.calculate()}>=</button>
                    </div>
                </div>
            </>
        )
    }
}

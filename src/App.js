import React, { Component } from "react"
import { connect } from "react-redux"
import AddForm from "./todo/AddForm"
import Done from "./todo/Done"
import Incomplete from "./todo/Incomplete"


// code > 設定　> ユーザースニペット


class App extends Component {
    td = {
        width: "250px"
    }
    style = {
        display: "flex"
    }
    IStyle = {
        width: "400px",
        backgroundColor: "yellow",
        height: "400px"
        
    }
    DStyle = {
        width: "400px",
        backgroundColor: "yellow",
    }

    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <h1>Todo</h1>
                <AddForm />
                <hr />
                <div style={this.style} >
                <Incomplete style={this.IStyle} />
                <Done style={this.DStyle} />
                </div>
            </div>
        )
    }
}

export default connect ()(App)
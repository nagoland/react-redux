import React, { Component } from "react"
import { connect } from "react-redux"
import deleteTodo from "./Store"
import doneTodo from "./Store"

class IItem extends Component {
    style = {
        fontSize: "14px",
        padding: "10px 20px"
    }
    constructor(props){
        super(props)
        this.doDelete = this.doDelete.bind(this)
        this.moveDone = this.moveDone.bind(this)
    }

    doDelete(e){
        e.preventDefault()
        console.log("a")
        let action = deleteTodo()
        this.props.dispatch(action)
    }
    moveDone(e){
        e.preventDefault()
        this.setState({
            index: this.props.index
        })
        let action = doneTodo(this.state.message)
        this.props.dispatch(action)
        this.setState({
            index: undefined
        })
    }
    render(){
        return(
            <p style={this.style} index={this.props.index}>{this.props.value}</p>
        )
    }
}

export default connect ((state) => state)(IItem)
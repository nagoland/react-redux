import React, { Component } from "react"
import { connect } from "react-redux"

class DItem extends Component {
    style = {
        backgroundColor: "red",
        fontSize: "14px",
        padding: "10px 20px"
    }
    render(){
        return(
            <p style={this.style} index={this.props.index}>{this.props.value}</p>
        )
    }
}


export default connect()(DItem)
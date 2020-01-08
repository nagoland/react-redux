import React, { Component } from "react"
import { connect } from "react-redux"
import IItem from "./IItem"
import deleteTodo from "./Store"
import doneTodo from "./Store"

class Incomplete extends Component {
    btn = {
        fontSize: "12pt",
        color: "#006",
        padding: "1px 10px"
    }
    style = {
        display: "flex",
        alignItems: "center",
        color: "red",
    }

    render(){
        let data 
        let n = 0
        switch(this.props.mode){
            case "default":
            data = this.props.data.map((value)=>(
                <div style={this.style}>
                <IItem key={n++} value={value} index={n++} />
                    <form onSubmit={this.doDelete}>
                    <input type="submit" value="削除" />
                </form>
                <form onSubmit={this.moveDone}>
                    <input type="submit" value="完了" />
                </form>
                </div>
            ))
            break

            case "delete":
                data = this.props.data.map((value)=>(
                <div>
                    <IItem key={value} value={value} index={n++} />
                    <form onSubmit={this.doDelete}>
                        <input type="submit" value="削除" />
                    </form>
                    <form onSubmit={this.moveDone}>
                        <input type="submit" value="完了" />
                    </form>
                </div>
                ))
            break

            case "done":
                data = this.props.data.map((value)=>(
                <IItem key={value} value={value} index={n++} />
                ))
            break

        }

        return(
            <div>
                {data}
            </div>
        )
    }
}


export default connect((state)=>state)(Incomplete)
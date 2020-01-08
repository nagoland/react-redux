import React, { Component } from "react"
import { connect } from "react-redux"
import DItem from "./DItem"


class Done extends Component {
    
    render(){
        let data 
        let n = 0
        switch(this.props.mode){
            case "done":
            data = this.props.doneTodo.map((value)=>(
                <DItem key={value} value={value} index={n++} />
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

export default connect((state)=>state)(Done)
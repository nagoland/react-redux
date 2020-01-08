import { createStore } from "redux"

const initData = {
    data:["sample data"],
    message: "Todoリストを作ろう",
    mode: "default",
    doneTodo:[]
}

export function todoReducer(state = initData, action) {
    switch(action.type) {
        case "ADD":
            return addReduce(state, action)

        case "DELETE":
            return deleteReduce(state, action)

        case "DONE":
            return doneReduce(state, action)

        default:
            return state
    }
}


function addReduce(state, action){
    let data = [
        action.message
    ]
    let newdata = state.data.slice()
    newdata.push(data)
    console.log("default")
    console.log(action.index)
    return {
        data: newdata,
        message: data + "を追加しました",
        mode: "default",
        doneTodo:state.doneTodo
    }
}


function deleteReduce(state, action) {
    let data = state.data[action.index]
    let newdata = state.data.slice()
    newdata.splice(action.index, 1)
    console.log("deleteわず")
    return {
        data:newdata,
        message: data + "を削除しました",
        mode: "delete",
        doneTodo: state.doneTodo
    }
}


function doneReduce(state, action) {
    let data = state.data[action.index]
    let newdata = state.data.slice()
    state.doneTodo.push(data)
    newdata.splice(action.index, 1)

    return {
        data: newdata,
        message: data + "を完了しました",
        mode: "done",
        doneTodo: state.doneTodo
    }

}


export function addTodo(text,num) {
    return {
        type: "ADD",
        message: text,
        index: num
    }
}


export function deleteTodo(num) {
    return {
        type: "DELETE",
        index: num
    }
}


export function doneTodo(num) {
    return {
        type: "DONE",
        index: num
    }
}


export default createStore(todoReducer)
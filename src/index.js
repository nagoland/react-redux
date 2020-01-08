import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import TodoStore from "./todo/Store"
import App from "./App"


ReactDOM.render(
    <Provider store={TodoStore}>
        <App />
    </Provider>,
    document.getElementById("root")
)
import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { Provider } from "react-redux"
import MemoStore from "./memo/Store"
const root = document.getElementById("root")

ReactDOM.render(
    <Provider store={MemoStore}>
        <App />
    </Provider>,root
)

import { combineReducers } from "@reduxjs/toolkit";
import book from "./bookReducer"

const rootReducer = combineReducers({
    book,
})

export default rootReducer
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./auth/auth.reducer";
import { patientReducer } from "./patient/patient.reducer";

const rootReducers = combineReducers({
    auth:authReducer,
    patient:patientReducer
})

export const store = legacy_createStore(rootReducers,applyMiddleware(thunk))
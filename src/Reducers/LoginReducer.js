import { LOGIN_SAVE } from "../Actions/actions";

const loginInitials = {
    loginParameters: []
}

const loginReducer = (state=loginInitials, action) =>{
        switch(action.type){
            case LOGIN_SAVE:{
                const { id, email, password } = action.payload
                return {...state, loginParameters: [...state.loginParameters, {id, email, password}]}
            }
            default:{
                return state
            }
        }
}

export default loginReducer
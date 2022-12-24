import * as types from './constants/enums'

const initialState = {
    motdepasse : '',
    isConnected: false,
    isOpen: false,
    tryPass: false,
    playing: false
}

const basic = (state = initialState, action={}) =>
{
    switch(action.type){
        case types.DIALOG:
            return {
                ...state,
                isOpen: !state.isOpen,
                tryPass: false
            }
        case types.SECRET:
            let secret = action.payload === types.SECRET_PWD
            return{
                ...state,
                isConnected: secret,
                tryPass: !(secret) 
            }
        case types.RESETPASS:
            return{
                ...state,
                tryPass: false
            }
        case types.PLAYING:
            return{
                ...state,
                playing: action.payload
            }
            
        default: 
            return state;
    }
}
export default basic;

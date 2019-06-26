


export default (state={}, action)=>{
    switch(action.type){
        case 'LOGIN_SUCCESS':
            return {...state, userInfo: action.payload}
        case 'SEARCH_USER':
            return {...state, totalCount: action.totalCount, users: action.users}
        default:
            return state
    }
}
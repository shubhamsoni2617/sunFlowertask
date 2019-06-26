import axios from 'axios'
import history from '../../history'


export const login = (loginData)=>async (dispatch) => {

    
    const response= await axios.get('https://api.github.com/search/users?q=eric')

        let token= null

        let userKey=null;

        let userInfo=null

            for(let key in response.data.items){
                
                // taking login as username and password
                if (loginData.username===response.data.items[key].login && loginData.password===response.data.items[key].login){
                    token= true;
                    userKey=key
                }
            }

           

            if(token){
                userInfo=response.data.items[userKey]

                history.push('/homepage')
            }

            dispatch({
                type:'LOGIN_SUCCESS',
                payload: userInfo
            })
}


export const searchUser = (text)=>async (dispatch) => {

    
    const response= await axios.get(`https://api.github.com/search/users?q=${text}`)

    console.log(response.data)

    dispatch({
        type:'SEARCH_USER',
        totalCount: response.data.total_count,
        users: response.data.items
    })

}

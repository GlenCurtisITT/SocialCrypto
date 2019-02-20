import config from "../components/Config/config";
import axios from "axios/index";

const getJwt = () => {
    return localStorage.getItem('token_id')
}

const getUserFromJwt = async() => {
    let jwt = getJwt();
    let res = undefined;
    if(jwt){
        res = await axios.get(
            `${config.domain}/users/userFromToken`,
            {headers: {
                    Authorization: `Bearer ${jwt}`
                }}
        )
    }
    return res;
}

export default {getUserFromJwt}
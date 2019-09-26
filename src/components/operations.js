import axios from 'axios';

const getPosition = async (obj) => {
    let result = await axios.post(`https://api-checkbus.herokuapp.com/${obj.city}/${obj.route}`)
    return result
}

export default getPosition
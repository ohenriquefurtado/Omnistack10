import axios from 'axios'

const api = axios.create({
  baseURL: 'http://10.7.6.197:3333'
})

export default api
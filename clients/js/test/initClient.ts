import { ChromaClient } from '../src/index'

const PORT = process.env.PORT || '8000'
const URL = 'http://localhost:' + PORT
const vecspace = new ChromaClient(URL)

export default vecspace
import axios from 'axios'
const baseUrl = '/sendEmail'

const sendEmail = async contact => {
	const response = await axios.post(baseUrl, contact)
	console.log(response)
	return response
}

export default sendEmail 
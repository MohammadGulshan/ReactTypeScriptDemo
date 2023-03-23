import axios from "axios"

export const requestGetColor = () => {
	return axios.request({
		method: 'get',
		url: 'https://my-json-server.typicode.com/MohammadGulshan/demo/db'
	})
}
let {uploadUrl, requestUrl, downloadUrl} = require('./config')

function request(url = '', data = {}, method = 'get') {
	let baseUrl = requestUrl
	url = baseUrl + url
	return new Promise((resolve, reject) => {
		wx.request({
			url,
			data,
			method,
			success({data, cookies, errMsg, header, statusCode}) {
				resolve(data)
			},
			error(err) {
				reject(err)
			}
		})
	})
}
function upload(url, filePath, name = 'file', formData = {}) {
	let baseUrl = requestUrl
	url = baseUrl + url
	return new Promise((resolve, reject) => {
		wx.uploadFile({
			url,
			filePath,
			name,
			formData,
			success({data, statusCode}) {
				data = JSON.parse(data)
				resolve(data)
			},
			error(err) {
				reject(err)
			}
		})
	})
}
function download() {

}
module.exports = { request, upload, download }
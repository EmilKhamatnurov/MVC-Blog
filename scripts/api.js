class API {
	constructor() {
		this.baseUrl = 'https://jsonplaceholder.typicode.com';
	}
	// Возвращаем список постов в формате JSON
	fetchPosts() {
		return fetch(`${this.baseUrl}/posts`)
			.then(data => data.json())
	}
}
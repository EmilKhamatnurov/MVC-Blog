class View {
	constructor( {onNewPost} ) {
		this.postsNode = document.querySelector('#posts');
		this.titleInputNode = document.querySelector('#title-input');
		this.bodyInputNode = document.querySelector('#body-input');
		this.addPostBtnNode = document.querySelector('#add-post-btn');
		this.errorOutputNode = document.querySelector('#error');

		this.addPostBtnNode.addEventListener('click', this.handleBtnClick);
		this.onNewPost = onNewPost;
	}

	render(posts, isError) {
		this.postsNode.innerHTML = '';
		this.errorOutputNode.innerText = '';

		if (isError) {
			this.errorOutputNode.innerText = 'Ошибка ввода поста';
		}

		posts.forEach(post => {
			this.postsNode.innerHTML += `
				<p>${this._buildDateString(post.timestamp)}</p>
				<p>${post.title}</p>
				<p>${post.body}</p>
			`
		});
	}

	handleBtnClick = () => {
		const title = this.titleInputNode.value;
		const body = this. bodyInputNode.value;
		
		this.onNewPost(title, body);
	}

	_buildDateString = (timestamp) => {
		const date = new Date(timestamp);
		return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
	}
}
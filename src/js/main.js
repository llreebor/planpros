// HIDe VIDeo title
function hideVideoTitle() {
	const title = document.getElementById('video-text')

	if (title) {
		setTimeout(() => {
			title.classList.add('hidden')
		}, 3000)
	}
}

hideVideoTitle()

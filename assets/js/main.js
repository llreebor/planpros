// function accordion() {
// 	const items = document.querySelectorAll(".accordion__item-trigger")
// 	items.forEach((item) => {
// 		item.addEventListener("click", () => {
// 			const parent = item.parentNode
// 			if (parent.classList.contains("accordion__item-active")) {
// 				parent.classList.remove("accordion__item-active")
// 			} else {
// 				document
// 					.querySelectorAll(".accordion__item")
// 					.forEach((child) => child.classList.remove("accordion__item-active"))
// 				parent.classList.add("accordion__item-active")
// 			}
// 		})
// 	})
// }
// accordion()

function accordion() {
	const items = document.querySelectorAll(".accordion__item")
	const triggers = document.querySelectorAll(".accordion__trigger")
	const contents = document.querySelectorAll(".accordion__content")
	triggers.forEach((trigger, i) => {
		if (items[0].classList.contains("active")) {
			contents[0].classList.add("active")
		}
		trigger.addEventListener("click", () => {
			const parent = trigger.parentNode

			if (!parent.classList.contains("active")) {
				// If you want only one to be open at a time, and others to close - UNCOMMENT the code below.
				// Если нужно что бы открывался ТОЛЬКО один, а остальные закрывались - РАСКОММЕНТИРУЙ код ниже
				// items.forEach((item, i) => {
				// 	if (i !== idx && item.classList.contains('active')) {
				// 		item.classList.remove('active')
				// 	}
				// })
				// Open the current accordion item
				// Открыть текущий пункт аккордеона
				parent.classList.add("active")
				contents[i].classList.add("active")
			} else {
				// Close the current accordion item
				// Закрыть текущий пункт аккордеона
				parent.classList.remove("active")
				contents[i].classList.remove("active")
			}
		})
	})
}
accordion()

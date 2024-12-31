// FAQ
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

// Future Date
function getFutureDate() {
	const today = new Date() // Current date
	today.setDate(today.getDate() + 3) // Add 3 days

	// Array of month names
	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	]

	// Format the date
	const month = months[today.getMonth()]
	const day = today.getDate()
	const year = today.getFullYear()

	return `${month} ${day}, ${year}.`
}

// Insert the date into all elements with the class "future-date"
window.onload = function () {
	const dateElements = document.querySelectorAll(".future-date") // Select all elements with the class
	const futureDate = getFutureDate()

	dateElements.forEach((element) => {
		element.innerText = futureDate
	})
}

[input, timer, buttonSubmit, modal, modalBtn] = [document.getElementById('input'), document.getElementById('timer-view'), document.getElementById('submit'), document.getElementById('modal'), document.getElementById('mbtn')]
let inputValue
buttonSubmit.addEventListener('click', () => {
	[inputValue, timer.textContent] = [input.value, inputValue]
	setTimer(inputValue)
})

async function setTimer(options) {
	const tim = await setInterval(function mytimer() {
		options--
		timer.textContent = options
		if (options == 0) {
			clearInterval(tim)
			modal.classList.add('active')
			modalBtn.addEventListener('click', () => {
				modal.classList.remove('active')
				input.value = ''
			})
		}
	}, 100)
}

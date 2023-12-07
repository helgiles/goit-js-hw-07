function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

const controls = document.querySelector('#controls');
const number = controls.querySelector('input');

const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');

const boxes = document.querySelector('#boxes');

const destroyBoxes = () => {
	boxes.innerHTML = '';
};

const createBoxes = amount => {
	const newBoxes = [];
	let size = 30;

	for (let i = 0; i < amount; i++) {
		const box = document.createElement('div');
		size += 10;
		box.style.width = `${size}px`;
		box.style.height = `${size}px`;
		box.style.backgroundColor = getRandomHexColor();
		newBoxes.push(box);
	}
	boxes.append(...newBoxes);
};

createButton.addEventListener('click', () => {
	destroyBoxes();
	const amount = number.value;
	if (amount >= 1 && amount <= 100) {
		createBoxes(amount);
	}
	number.value = '';
});

destroyButton.addEventListener('click', destroyBoxes);

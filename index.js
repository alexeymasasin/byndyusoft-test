const input = document.querySelector('input');
const button = document.querySelector('button');
const resultElement = document.querySelector('.result');

button.addEventListener('click', (e) => {
	e.preventDefault();
	try {
		const inputValues = input.value.split(',').filter((item) => !isNaN(item));
		if (inputValues.length < 2) {
			throw new Error(
				'Пожалуйста, введите как минимум два числа, разделенных запятой.'
			);
		}
		const arr = inputValues.map((item) => parseFloat(item));
		const result = sumOfTwoMinimals(arr);
		resultElement.textContent = `Результат: ${result}`;
	} catch (error) {
		resultElement.textContent = `Ошибка: ${error.message}`;
	}
});

input.addEventListener('keypress', (e) => {
	if (e.key === 'Enter') {
		e.preventDefault();
		try {
			const inputValues = input.value.split(',').filter((item) => !isNaN(item));
			if (inputValues.length < 2) {
				throw new Error(
					'Пожалуйста, введите как минимум два числа, разделенных запятой.'
				);
			}
			const arr = inputValues.map((item) => parseFloat(item));
			const result = sumOfTwoMinimals(arr);
			resultElement.textContent = `Результат: ${result}`;
		} catch (error) {
			resultElement.textContent = `Ошибка: ${error.message}`;
		}
	}
});

function sumOfTwoMinimals(arr) {
	if (arr.length === 0) {
		throw new Error('Массив не может быть пустым');
	}

	if (!Array.isArray(arr) || !arr.every((item) => typeof item === 'number')) {
		throw new Error('Массив должен содержать только числовые значения');
	}

	arr.sort((a, b) => a - b);
	return arr[0] + arr[1];
}

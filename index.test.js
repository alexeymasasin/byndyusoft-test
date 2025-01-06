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

describe(sumOfTwoMinimals, () => {
	it('возвращает сумму двух минимальных элементов в массиве', () => {
		const arr = [5, 2, 8, 1];
		expect(sumOfTwoMinimals(arr)).toBe(3);
	});

	it('выбрасывает ошибку, если массив пуст', () => {
		const arr = [];
		expect(() => sumOfTwoMinimals(arr)).toThrowError(
			'Массив не может быть пустым'
		);
	});

	it('выбрасывает ошибку, если в массиве нет чисел', () => {
		const arr = ['а', 'б', 'в'];
		expect(() => sumOfTwoMinimals(arr)).toThrowError(
			'Массив должен содержать только числовые значения'
		);
	});

	it('возвращает правильный результат, если в массиве более двух элементов', () => {
		const arr = [5, 2, 8, 1, 9];
		expect(sumOfTwoMinimals(arr)).toBe(3);
	});

	it('возвращает правильный результат, если в массиве более 100 миллионов элементов', () => {
		const arr = Array.from({ length: 1000 }, () =>
			Math.floor(Math.random() * 100)
		);
		expect(sumOfTwoMinimals(arr)).toBeLessThanOrEqual(100);
	});
});

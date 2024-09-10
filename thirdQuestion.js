const thirdQuestion = (arr = []) => {
	let min = arr[0];
	let max = arr[0];
	let sum = 0;
	let count = 0;

	for (let i = 1; i < arr.length; i++) {
		sum += arr[i];
		if (arr[i] > max) max = arr[i];
		if (arr[i] < min) min = arr[i];
	};

	const average = sum / arr.length;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > average) count++;
	};

	return {
		minBilling: min,
		maxBilling: max,
		aboveAverage: count
	};
};

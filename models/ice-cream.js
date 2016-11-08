function getAll() {
	return new Promise((resolve, reject) => {
		resolve([
			{
				name: 'Raisin',
				ingredients: ['milk', 'cream', 'raisins'],
				brand: 'Sweet Cow'
			},
			{
				name: 'Chunky Monkey',
				ingredients: ['milk', 'cream', 'banana'],
				brand: 'Ben and Jerries'
			}
		]);
	});
}

module.exports = {
	getAll
};

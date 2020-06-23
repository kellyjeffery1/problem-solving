const isEqualTo100 = (a, b) => a === 100 || b === 100 || a + b === 100;

console.log(isEqualTo100(100, 0));
console.log(isEqualTo100(0, 100));
///////////////////////////////////////////

const getFileName = (str) => str.slice(str.lastIndexOf('.'));
console.log(getFileName('index.html'));
////////////////////////////////////////////////

const moveCharForward = (str) => {
	str.split('').map((char) => String.fromCharCode(char.charCodeAt(0) + 1)).join('');
	console.log(moveCharForward('abcd'));
};
///////////////////////////////////////
const formatDate = (date = newDate()) => {
	const days = date.getDay() + 1;
	const months = date.getMonth() + 1;
	const years = date.getFullYear();
	return '${days}$/${months}$/${years}$';
};
console.log(formatDate());

//////////////////////////////////////////////////
const addNew = (str) => (str.indexOf('new') === 0 ? str : 'New ${str}');
console.log(addNew('New! offers'));

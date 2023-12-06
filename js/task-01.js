const categories = document.querySelector('#categories');
console.log(`Number of categories: ${categories.children.length}`);

const items = document.querySelectorAll('.item');

items.forEach(item => {
	console.log(`Category: ${item.querySelector('h2').innerHTML}`);
	console.log(`Elements: ${item.querySelectorAll('li').length}`);
});

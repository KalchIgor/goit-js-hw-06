const elementList = document.querySelectorAll('.item');
console.log((`Number of categories: ${elementList.length}`));

elementList.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);

    console.log(`Elements: ${item.lastElementChild.children.length}`);
        
});
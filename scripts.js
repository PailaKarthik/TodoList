
let input = document.querySelector('input');
let btn = document.querySelector('.addbtn');
let list = document.querySelector('.list-items');
let changetheme = document.querySelector('.changetheme');

changetheme.addEventListener('click', () => {
    document.body.classList.toggle('bg-color');
    document.querySelector('.container').classList.toggle('container-color');
    document.querySelector('.changetheme').classList.toggle('changetheme-color');
    saveproducts();
});

btn.addEventListener('click', () => {
    if(input.value === ''){
        alert('Please enter some text');
    }
    else{
        let li = document.createElement('li');
        li.innerText = input.value;
        list.append(li);

        let span = document.createElement('span');
        span.innerHTML = '<img src="icons8-cancel-50.png" alt="">';
        li.append(span);

        input.value = '';
    }
    saveproducts();
});

list.addEventListener('click', (e) => {
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
    }
    else if(e.target.tagName === 'IMG'){
        e.target.parentElement.parentElement.remove();
    }
    saveproducts();
});

function saveproducts(){
    localStorage.setItem('products', list.innerHTML);
}

window.addEventListener('load', () => {
    list.innerHTML = localStorage.getItem('products');
});
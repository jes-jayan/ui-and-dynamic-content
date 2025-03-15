function showMenu() {
    const nav = document.querySelector('.navbar');
    nav.classList.toggle('show');
}


let item = document.getElementById('item');
let btn = document.getElementById('submit-button');
let ul = document.querySelector('.myList');
let fb = document.querySelector('.feedback');


let feedback = "";

function addItem() {
    
    li = document.createElement('li');

    if (item.value) {

        itemValue = item.value;
        li.textContent = itemValue;
        ul.appendChild(li);

        feedback = "";
        item.value = "";
        item.focus();
        
    } else {

        feedback = "Nothing entered";
        fb.innerHTML = feedback;
    }

}

btn.addEventListener('click',addItem);
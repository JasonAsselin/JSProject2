let input = document.getElementById('userinfo');
document.getElementById('button').addEventListener('click', userValue);

//using function userValue to display alert if user text is non-existant
function userValue() {
	let x = input.value;
		if (x.length === 0) {
			alert('To-do item cannot be empty');
		return;
	}

	//creating checkbox and providing it user info after box is generated
	let div = document.createElement('div');
	let item = document.createElement('input');
	item.setAttribute('type', 'checkbox');
	item.addEventListener('click', boxChecked);
	let node = document.createTextNode(x);
	
	div.appendChild(item);
 	div.appendChild(node);

	let tasks = document.getElementById('mylist');
	tasks.appendChild(div);

	//creating button element and naming 'delete item'
	let button1 = document.createElement('button');
	let remove = document.createTextNode('Delete item');

	button1.appendChild(remove);
	div.appendChild(document.createElement('br'));
	div.appendChild(button1);

	button1.addEventListener('click', function(e) {
		e.currentTarget.parentNode.remove();
		alert('Item was deleted');
  	}, false);

  input.value = "";
}

//creating function to check if box has been clicked or not
function boxChecked(event){
    let i = event.currentTarget.checked;
        if(i){ 
            event.currentTarget.parentNode.style.textDecoration='line-through';
        }    
        else{
            event.currentTarget.parentNode.style.textDecoration='none';
        }
}




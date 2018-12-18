var taskList  = document.getElementById('myList');
var taskField = document.getElementById('wr-text');
var btnForAdd = document.getElementById('addText');
btnForAdd.onclick = writeInput;

function writeInput() { 
  var value = taskField.value; 
  taskField.value = ""; 
  addTask(value);
} 

function addTask(content) { 
  var list = document.createElement('div'); 
  list.classList.add('row', 'list-text', 'd-flex', 'align-items-center'); 
  taskList.appendChild(list); 

  var list_left = document.createElement('div'); 
  list_left.classList.add('col-md-8'); 
  list.appendChild(list_left); 

  var list_left_text = document.createElement('p'); 
  list_left_text.innerHTML = content; 
  list_left.appendChild(list_left_text); 

  var list_right = document.createElement('div'); 
  list_right.classList.add('col-md-4'); 
  list.appendChild(list_right); 

  var list_right_btn = document.createElement('button'); 
  list_right_btn.innerHTML = 'delete text';
  list_right_btn.classList.add('delete'); 
  list_right_btn.onclick = function() {
    list.remove();
  }
  
  list_right.appendChild(list_right_btn);
} 

var btnReload = document.getElementById('reload');
btnReload.onclick = function() {
  location.reload();
}

var btnPixelplex = document.getElementById('pixelp');
btnPixelplex.onclick = function() {
  window.open('https://pixelplex.io', '_blank');
}

var slider = document.getElementById("myRange");
if (localStorage.getItem('speed')) {
  speed = +localStorage.getItem('speed');
} else {
  speed = +slider.value;
}

slider.value = speed;

var output = document.getElementById("demo");
var timer = document.getElementById("timer");
output.innerHTML = speed;

var sec = 0;
slider.oninput = function(e) {
  speed = +e.target.value;
  output.textContent = speed;
  localStorage.setItem('speed', speed);
}

function tick() {
  sec += speed;
  timer.textContent = sec;
}

setInterval(tick, 1);


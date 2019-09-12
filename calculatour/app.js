function add(num){
   document.getElementById('text').value += num;
}

function back(){
   var bac = document.getElementById('text').value;
   document.getElementById('text').value = bac.substring(0,bac.length -1);
}

function eq(){
   var equ = document.getElementById('text').value;
   if(equ){
   document.getElementById('text').value = eval(equ)
}
}



















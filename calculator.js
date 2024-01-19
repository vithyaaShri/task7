/* Display() displays the number which is clicked by the user */

function display(res) {
    let bttn = document.getElementById('result');
    bttn.value += res;
 }

 /* Result() is for equal to(=) button */

 function Result() {
    let a = document.getElementById('result').value;
    let b = eval(a);
    document.getElementById('result').value = b;
 }

 /* Thus function will clear the input text box */

 function Clear() {
    let input = document.getElementById('result');
    input.value = '';
 }

/* Back() is for DEL button */
 function Back() {
    let bttn = document.getElementById('result');
    bttn.value = bttn.value.slice(0,-1);
 }

/* Will give alert if input other than number is pressed */

window.addEventListener('keypress',check);
 function check(c)
 {
   let m= c.key;
   switch(m){
      case '1':
         display;
         break;
      case '2':
         display;
         break;
      case '3':
         display;
         break;
      case '4':
         display;
         break;
      case '5':
         display;
         break;
      case '6':
         display;
         break;
      case '7':
         display;
         break;
      case '8':
         display;
         break;
      case '9':
         display;
         break;
      case '0':
         display;
         break;
         default:{
            alert("Only numbers are allowed");
            Back();
         }
         
 }}
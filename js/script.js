var stopSubmit = true;
var inp = document.querySelectorAll('.inptag');
var error = document.querySelectorAll('.error');
var btn = document.querySelector('.btn');
console.log(inp);
btn.onclick = function(e){
  for (var i = 0; i < inp.length; i++){
    var input = inp[i];
    if (input.checkValidity() == true){
      alert(input.checkValidity());
      error[i].classList.add('error-active');
      inp[i].classList.add('input-active');
      stopSubmit = true;  
    } else {
      error[i].classList.remove('error-active');
      inp[i].classList.remove('input-active');
      stopSubmit = false;
    }
    
  }
  if (stopSubmit) {
    e.preventDefault();
  }
  
  
  
};




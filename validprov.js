function validate(){    
if (document.Form1.password.value == "") {
  alert("Введите ответ");
  document.Form1.password.focus();
  return false;
} 
if (document.Form1.password.value == "175870")  {  
window.location.href='zahodokok.html';
} else  {   
window.location.href='uhodbyby.html';
}
}

document.getElementById('firstName').addEventListener('keypress',function(e){
	if ((e.charCode >= 97 && e.charCode <= 122) || (e.charCode>=65 && e.charCode<=90)){
	   alert("زبان کیبورد شما انگلیسی است");
	   e.preventDefault();
   }
});
function isPersian(str){
   var p = /^[\u0600-\u06FF\s]+$/;
   return p.test(str);
}
document.getElementById('lastName').addEventListener('keypress',function(e){
	if ((e.charCode >= 97 && e.charCode <= 122) || (e.charCode>=65 && e.charCode<=90)){
	   alert("زبان کیبورد شما انگلیسی است");
	   e.preventDefault();
   }
});
function isPersian(str){
   var p = /^[\u0600-\u06FF\s]+$/;
   return p.test(str);
}


///////////////////////////////
/// timer for resend code
window.onload = function () {
   var threeMinutes = 60 * 3,
       display = document.querySelector('#time');
       startTimer(threeMinutes, display);
};
function startTimer(duration, display) {
   var timer = duration, minutes, seconds;
   setInterval(function () {
       minutes = parseInt(timer / 60, 10)
       seconds = parseInt(timer % 60, 10);

       minutes = minutes < 10 ? "0" + minutes : minutes;
       seconds = seconds < 10 ? "0" + seconds : seconds;

       display.textContent = minutes + ":" + seconds;

       if (--timer < 0) {
           timer = duration;
       }
       if(minutes==0 && seconds == 0){
          timer=0;
          document.getElementById("code").classList.add("show");
          document.getElementById("timeSection").classList.add("hide");
          
       }
   }, 1000);
}
///////////////////////////////
/// check keyboard language
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

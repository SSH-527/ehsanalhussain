let defaultBtn = document.querySelector("#default");
let customBtn = document.querySelector("#customBtn");
let fileName = document.querySelector(".fileName");
let regExp = /[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+$/;
function active(){
    defaultBtn.click();
}
defaultBtn.addEventListener ("change",function(){
    if(this.value) {
        let nameValue=this.value.match(regExp);
        fileName.style.display="block";
        fileName.textContent=nameValue;
    }
    else {
        fileName.style.display="block";
        fileName.textContent="فایلی انتخاب نشده است.";
    }
});
//change panel item
let tabItem = document.querySelectorAll(".tabItem");
let tabContent = document.querySelectorAll(".content");
for (let i=0; i<tabItem.length; i++){
    tabItem[i].addEventListener("click", function(){
        document.querySelector("li.tabItem.active").classList.remove("active");
        tabItem[i].classList.add("active");
        document.querySelector("div.content.activeContent").classList.remove("activeContent");
        tabContent[i].classList.add("activeContent");
    })
}
//mobile menu 
let menuIcon=document.querySelector(".menuIcon");
let mobileMenu=document.querySelector(".panelItem");
let close=document.querySelector(".cross")
menuIcon.addEventListener("click" ,function(){
   document.querySelector("div.panelItem").classList.toggle("show"); 
   document.querySelector("div.panelItem").classList.remove("hidden"); 
});
close.addEventListener("click",function(){
    document.querySelector("div.panelItem").classList.toggle("hidden");
    document.querySelector("div.panelItem").classList.remove("show");
});
//privew img
function previewFile() {
    var preview = document.querySelector('.pic-1');
    var preview2 = document.querySelector('.pic-2');
    var file    = document.querySelector('input[type=file]').files[0];
    var reader  = new FileReader();
  
    reader.onloadend = function () {
      preview.src = reader.result;
      preview2.src = reader.result;
    }
  
    if (file) {
      reader.readAsDataURL(file);
    } else {
      preview.src = "";
      preview2.src = "";
    }
  }
  //show check table 
  let showTable=document.getElementById("checkTable");
  showTable.addEventListener("click" , function(){
    document.getElementById("checkPayTable").classList.remove("hide");
    document.getElementById("checkPayTable").classList.add("checkTable");
    document.getElementById("mainContent").classList.add("hide");
   })
  /////////////////////////////////////////////////////////////////////////////
  let numInput=document.querySelectorAll("input[type=number]");
  numInput.forEach(function(input){
    input.addEventListener("change" , function(e){
      if(e.target.value == ''){
        e.target.value=0
      }
    })
  })
  //variable defining
  let num1=document.getElementById("num1").value;
  let num2=document.getElementById("num2").value;
  let sumFood=document.getElementById("sumFood");
  let sumHotel=document.getElementById("sumHotel");
  let priceFood=document.getElementById("priceFood").innerText;
  let priceHotel=document.getElementById("priceHotel").innerText;
  let foodDesired=document.getElementById("foodDesired").value;
  let hotelDesired=document.getElementById("hotelDesired").value;
  sumFood.innerText=num1*parseInt(priceFood);
  let totalSumField=document.getElementById("totalSumField");
  totalSumField.innerText=parseInt(sumFood.innerText)+parseInt(sumHotel.innerText);
  let totalPay=document.getElementById("totalPay");
  totalPay.innerText=parseInt(sumFood.innerText)+parseInt(sumHotel.innerText);
  //food
  //set value in check payment table
   let tdNum1=document.getElementById("tdNum1");
   tdNum1.innerText=document.getElementById("num1").value;
   let tdPriceFood=document.getElementById("tdPriceFood");
   tdPriceFood.innerText=document.getElementById("priceFood").innerText;
   let tdFoodDesired=document.getElementById("tdFoodDesired");
   tdFoodDesired.innerText=parseInt(document.getElementById("foodDesired").value);
   let tdSumFood=document.getElementById("tdSumFood");
   tdSumFood.innerText=document.getElementById("sumFood").innerText;  
   // click plus button
   if(document.getElementById("plus").addEventListener("click" , function(){
    num1=document.getElementById("num1").value;
    priceFood=document.getElementById("priceFood").innerText;
    sumFood.innerText=num1*parseInt(priceFood); 
    totalSumField.innerText=parseInt(sumFood.innerText)+parseInt(sumHotel.innerText);
    totalPay.innerText=parseInt(sumFood.innerText)+parseInt(sumHotel.innerText);
    let foodDesired=document.getElementById("foodDesired");
    foodDesired.value=0;
  //set value in check payment table
  let tdNum1=document.getElementById("tdNum1");
  tdNum1.innerText=document.getElementById("num1").value;
  let tdPriceFood=document.getElementById("tdPriceFood");
  tdPriceFood.innerText=document.getElementById("priceFood").innerText;
  let tdFoodDesired=document.getElementById("tdFoodDesired");
  tdFoodDesired.innerText=0;
  let tdSumFood=document.getElementById("tdSumFood");
  tdSumFood.innerText=document.getElementById("sumFood").innerText;
  })); 
  else if(document.getElementById("foodDesired").addEventListener("input", function() {
    sumFood.innerText=parseInt(document.getElementById("foodDesired").value)
    totalSumField.innerText=parseInt(sumFood.innerText)+parseInt(sumHotel.innerText);
    totalPay.innerText=parseInt(sumFood.innerText)+parseInt(sumHotel.innerText);
    let num1=document.getElementById("num1");
    num1.value=0;
   //set value in check payment table
   let tdNum1=document.getElementById("tdNum1");
   tdNum1.innerText=document.getElementById("num1").value;
   let tdPriceFood=document.getElementById("tdPriceFood");
   tdPriceFood.innerText=document.getElementById("priceFood").innerText;
   let tdFoodDesired=document.getElementById("tdFoodDesired");
   document.getElementById("foodDesired").addEventListener("input", () => 
   tdFoodDesired.innerText=parseInt(document.getElementById("foodDesired").value)
   );
   let tdSumFood=document.getElementById("tdSumFood");
   tdSumFood.innerText=document.getElementById("sumFood").innerText;  
  }));
  //click minus button
  if(document.getElementById("minus").addEventListener("click" , function(){
    num1=document.getElementById("num1").value;
    priceFood=document.getElementById("priceFood").innerText;
    sumFood.innerText=num1*parseInt(priceFood); 
    totalSumField.innerText=parseInt(sumFood.innerText)+parseInt(sumHotel.innerText);
    totalPay.innerText=parseInt(sumFood.innerText)+parseInt(sumHotel.innerText);
    //set value in check payment table
   let tdNum1=document.getElementById("tdNum1");
   tdNum1.innerText=document.getElementById("num1").value;
   let tdPriceFood=document.getElementById("tdPriceFood");
   tdPriceFood.innerText=document.getElementById("priceFood").innerText;
   let tdFoodDesired=document.getElementById("tdFoodDesired");
   tdFoodDesired.innerText=0;
   let tdSumFood=document.getElementById("tdSumFood");
   tdSumFood.innerText=document.getElementById("sumFood").innerText;
  })); 
  else if(document.getElementById("foodDesired").addEventListener("input", function() {
    sumFood.innerText=parseInt(document.getElementById("foodDesired").value)
    totalSumField.innerText=parseInt(sumFood.innerText)+parseInt(sumHotel.innerText);
    totalPay.innerText=parseInt(sumFood.innerText)+parseInt(sumHotel.innerText);
    let num1=document.getElementById("num1");
    num1.value=0;
   //set value in check payment table
   let tdNum1=document.getElementById("tdNum1");
   tdNum1.innerText=document.getElementById("num1").value;
   let tdPriceFood=document.getElementById("tdPriceFood");
   tdPriceFood.innerText=document.getElementById("priceFood").innerText;
   let tdFoodDesired=document.getElementById("tdFoodDesired");
   document.getElementById("foodDesired").addEventListener("input", () => 
   tdFoodDesired.innerText=parseInt(document.getElementById("foodDesired").value)
   );
   let tdSumFood=document.getElementById("tdSumFood");
   tdSumFood.innerText=document.getElementById("sumFood").innerText;
  }));
  //hotel
  sumHotel.innerText=num2*parseInt(priceHotel);
  //set value in check payment table
  let tdNum2=document.getElementById("tdNum2");
  tdNum2.innerText=document.getElementById("num2").value;
  let tdPriceHotel=document.getElementById("tdPriceHotel");
  tdPriceHotel.innerText=document.getElementById("priceHotel").innerText;
  let tdHotelDesired=document.getElementById("tdHotelDesired");
  tdHotelDesired.innerText=parseInt(document.getElementById("hotelDesired").value);
  let tdSumHotel=document.getElementById("tdSumHotel");
  tdSumHotel.innerText=document.getElementById("sumHotel").innerText; 
  //click plus button
  totalSumField.innerText=parseInt(sumFood.innerText)+parseInt(sumHotel.innerText);
  totalPay.innerText=parseInt(sumFood.innerText)+parseInt(sumHotel.innerText);
  if(document.getElementById("plusHotel").addEventListener("click", function() {
    num2=document.getElementById("num2").value;
    priceHotel=document.getElementById("priceHotel").innerText;
    sumHotel.innerText=num2*parseInt(priceHotel);
    totalSumField.innerText=parseInt(sumFood.innerText)+parseInt(sumHotel.innerText);
    totalPay.innerText=parseInt(sumFood.innerText)+parseInt(sumHotel.innerText);
    let hotelDesired=document.getElementById("hotelDesired");
    hotelDesired.value=0;
  //set value in check payment table
  let tdNum2=document.getElementById("tdNum2");
  tdNum2.innerText=document.getElementById("num2").value;
  let tdPriceHotel=document.getElementById("tdPriceHotel");
  tdPriceHotel.innerText=document.getElementById("priceHotel").innerText;
  let tdHotelDesired=document.getElementById("tdHotelDesired");
  tdHotelDesired.innerText=0;
  let tdSumHotel=document.getElementById("tdSumHotel");
  tdSumHotel.innerText=document.getElementById("sumHotel").innerText;
  }));
  else if(document.getElementById("hotelDesired").addEventListener("input", function() {
    sumHotel.innerText=parseInt(document.getElementById("hotelDesired").value)
    totalSumField.innerText=parseInt(sumFood.innerText)+parseInt(sumHotel.innerText);
    totalPay.innerText=parseInt(sumFood.innerText)+parseInt(sumHotel.innerText);
    let num2=document.getElementById("num2");
    num2.value=0;
  //set value in check payment table
  let tdNum2=document.getElementById("tdNum2");
  tdNum2.innerText=document.getElementById("num2").value;
  let tdPriceHotel=document.getElementById("tdPriceHotel");
  tdPriceHotel.innerText=document.getElementById("priceHotel").innerText;
  let tdHotelDesired=document.getElementById("tdHotelDesired");
  document.getElementById("hotelDesired").addEventListener("input", () => 
  tdHotelDesired.innerText=parseInt(document.getElementById("hotelDesired").value)
  );
  let tdSumHotel=document.getElementById("tdSumHotel");
  tdSumHotel.innerText=document.getElementById("sumHotel").innerText;  
  }));
  // click minus button
  if(document.getElementById("minusHotel").addEventListener("click", function() {
    num2=document.getElementById("num2").value;
    priceHotel=document.getElementById("priceHotel").innerText;
    sumHotel.innerText=num2*parseInt(priceHotel);
    totalSumField.innerText=parseInt(sumFood.innerText)+parseInt(sumHotel.innerText);
    totalPay.innerText=parseInt(sumFood.innerText)+parseInt(sumHotel.innerText);
    let hotelDesired=document.getElementById("hotelDesired");
    hotelDesired.value=0;
  //set value in check payment table
  let tdNum2=document.getElementById("tdNum2");
  tdNum2.innerText=document.getElementById("num2").value;
  let tdPriceHotel=document.getElementById("tdPriceHotel");
  tdPriceHotel.innerText=document.getElementById("priceHotel").innerText;
  let tdHotelDesired=document.getElementById("tdHotelDesired");
  tdHotelDesired.innerText=0;
  let tdSumHotel=document.getElementById("tdSumHotel");
  tdSumHotel.innerText=document.getElementById("sumHotel").innerText;
  }));
  else if(document.getElementById("hotelDesired").addEventListener("input", function() {
    sumHotel.innerText=parseInt(document.getElementById("hotelDesired").value)
    totalSumField.innerText=parseInt(sumFood.innerText)+parseInt(sumHotel.innerText);
    totalPay.innerText=parseInt(sumFood.innerText)+parseInt(sumHotel.innerText);
    let num2=document.getElementById("num2");
    num2.value=0;
  //set value in check payment table
  let tdNum2=document.getElementById("tdNum2");
  tdNum2.innerText=document.getElementById("num2").value;
  let tdPriceHotel=document.getElementById("tdPriceHotel");
  tdPriceHotel.innerText=document.getElementById("priceHotel").innerText;
  let tdHotelDesired=document.getElementById("tdHotelDesired");
  document.getElementById("hotelDesired").addEventListener("input", () => 
  tdHotelDesired.innerText=parseInt(document.getElementById("hotelDesired").value)
  );
  let tdSumHotel=document.getElementById("tdSumHotel");
  tdSumHotel.innerText=document.getElementById("sumHotel").innerText;
}));

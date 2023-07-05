//////////////////////
// cost edit image
let imgFood = document.querySelectorAll(".defualt");
imgFood.forEach((e)=>{
  e.addEventListener("change" , function(){
    console.log(e.value);
  })
})

//////////////////////
// popup
let exit = document.querySelector(".exitBtn");
let popup = document.querySelector(".popup");
let closePopup = document.querySelector(".closePopup");
let popupWrapper = document.querySelector(".popupWrapper");
exit.addEventListener("click", function () {
  popup.classList.add("showPopup");
  popupWrapper.classList.add("showPopup");
})
closePopup.addEventListener("click", function () {
  popup.classList.remove("showPopup");
  popupWrapper.classList.remove("showPopup");
})
popupWrapper.addEventListener("click", function () {
  popup.classList.remove("showPopup");
  popupWrapper.classList.remove("showPopup");
})
//////////////////////
// popup
let cancel = document.querySelectorAll(".cancelRes");
let popupCancel = document.querySelector(".popupCancelRes");
let closePopupCancel = document.querySelector(".closePopupCancel");
let popupWrapperCancel = document.querySelector(".popupWrapper");
cancel.forEach((e)=>{
  e.addEventListener("click", function () {
    popupCancel.classList.add("showPopup");
    popupWrapperCancel.classList.add("showPopup");
  })
})
closePopupCancel.addEventListener("click", function () {
  popupCancel.classList.remove("showPopup");
  popupWrapperCancel.classList.remove("showPopup");
})
popupWrapperCancel.addEventListener("click", function () {
  popupCancel.classList.remove("showPopup");
  popupWrapperCancel.classList.remove("showPopup");
})
//////////////////////
// mobile menu
let menuIcon = document.querySelector(".menuIcon");
let mobileMenu = document.querySelector(".panelItem");
let close = document.querySelector(".cross")
menuIcon.addEventListener("click", function () {
  document.querySelector("div.panelItem").classList.toggle("show");
  document.querySelector("div.panelItem").classList.remove("hidden");
});
close.addEventListener("click", function () {
  document.querySelector("div.panelItem").classList.toggle("hidden");
  document.querySelector("div.panelItem").classList.remove("show");
});
//////////////////////
// new cost image
let newCostImg = document.querySelector("#newCostImg");
let newCostImgValue = document.querySelector("#newCostImg").value;
let fileNameNewCost = document.querySelector("#fileNameNewCost");
let regExpNewCost = /[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+$/;
function activeNewCostImg() {
  newCostImg.click();
}
newCostImg.addEventListener("change", function () {
  if (this.value) {
    let nameValueNewCost = this.value.match(regExpNewCost);
    fileNameNewCost.style.display = "block";
    fileNameNewCost.textContent = nameValueNewCost;
    newCostImgValue = fileNameNewCost.textContent;
    console.log(newCostImgValue);
  }
  else {
    fileNameNewCost.style.display = "block";
    fileNameNewCost.textContent = "فایلی انتخاب نشده است.";
  }
});
let imgInp=document.getElementById("newCostImg");
let pic=document.querySelector(".pic-preview");
imgInp.onchange = evt => {
  const [file] = imgInp.files
  if (file) {
    pic.src = URL.createObjectURL(file)
  }
}

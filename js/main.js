/////////////////////////////
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
/////////////////////////////
//mobile menu 
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
/////////////////////////////
//change panel item
// let tabItem = document.querySelectorAll(".tabItem");
// let tabContent = document.querySelectorAll(".content");
// for (let i = 0; i < tabItem.length; i++) {
//   tabItem[i].addEventListener("click", function () {
//     document.querySelector("li.tabItem.active").classList.remove("active");
//     tabItem[i].classList.add("active");
//     document.querySelector("div.content.activeContent").classList.remove("activeContent");
//     tabContent[i].classList.add("activeContent");
//   })
// }
/////////////////////////////
// input type file change userImg
let defaultBtn = document.querySelector("#defaultImgUser");
let defaultBtnValue = document.querySelector("#defaultImgUser").value;
let customBtn = document.querySelector("#customBtn");
let fileName = document.querySelector(".fileName");
let regExp = /[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+$/;
function active() {
  defaultBtn.click();
}
defaultBtn.addEventListener("change", function () {
  if (this.value) {
    let nameValue = this.value.match(regExp);
    fileName.style.display = "block";
    fileName.textContent = nameValue;
    defaultBtnValue = fileName.textContent;
    console.log(defaultBtnValue);
  }
  else {
    fileName.style.display = "block";
    fileName.textContent = "فایلی انتخاب نشده است.";
  }
});
/////////////////////////////
//privew img
function previewFile() {
  var preview = document.querySelector('.pic-1');
  var preview2 = document.querySelector('.pic-2');
  var preview3 = document.querySelector('.pic-3');
  var file = document.querySelector('input[type=file]').files[0];
  var reader = new FileReader();
  reader.onloadend = function () {
    preview.src = reader.result;
    preview2.src = reader.result;
    preview3.src = reader.result;
  }
  if (file) {
    reader.readAsDataURL(file);
  } else {
    preview.src = "#";
    preview2.src = "#";
    preview3.src = "#";
  }
}
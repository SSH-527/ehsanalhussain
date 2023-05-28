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
//popup
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
////////////////////////////////////////////////////////
// render cost
// select element .................
// const costEl = document.querySelector(".cost");
// const total = document.getElementById("total");
// function render costs ......................
// function renderCost() {
//   costs.forEach((cost) => {
//     costEl.innerHTML += `
//       <div class="container marginSection">
//       <div class="row">
//           <div class="col-lg-4 col-sm-12">
//               <div class="costItem ">
//                   <img src="${cost.imgSrc}" alt="${cost.name}">
//                   <h5 class="title" >${cost.name}</h5>
//                   <p class="costItemDesc">${cost.description}
//                   </p>
//               </div>
//           </div>
//           <div class="costFeature col-lg-8 col-sm-12">
//               <div class="feature col-sm-12">
//                   <h6>قیمت هر سهم :</h6>
//                   <span class="price">${cost.price}</span>
//                   <span class="rial" style="color: #1a8acc;">ریال</span>
//               </div>
//               <div class="feature">
//                   <h6 class="col-sm-2">تعداد :</h6>
//                   <div class="units col-lg-4 col-sm-8">
//                   <div class="btnNumber plus col-lg-1 col-sm-2"
//                   onclick="changeNumberOfUnits('plus',${cost.id}); this.parentNode.querySelector('input[type=number]').stepUp();"
//                  >+</div>
//               <input type="number" value="${cost.number}" name="${cost.id}_number" class="number col-lg-5 col-sm-8 desired" min="0" readonly>
               
//               <div class="btnNumber minus col-lg-1 col-sm-4"
//                   onclick="this.parentNode.querySelector('input[type=number]').stepDown(); changeNumberOfUnits('minus',${cost.id}); ">-</div>
//                   </div>
//               </div>
//               <div class="feature">
//                   <h6>مبلغ دلخواه :</h6>
//                   <input type="number" class="desired myPay" value="${cost.desired}" name="${cost.id}_myPay" required onclick="changeNumberOfUnits('input',${cost.id});">
//                   <span class="rial">ریال</span>
//               </div>
//               <div class="feature">
//                   <h6> مجموع :</h6>
//                   <input type="number" class="sum spInput" value="${cost.sum}" name="${cost.id}_sum" readonly>
//                   <span class="rial">ریال</span>
//               </div>
//           </div>
//       </div>
//   </div>
//       `;
//   })
// }
// renderCost();
//change number 
// let number=[];
// function changeNumberOfUnits(action, id) {
//   let costs =[document.querySelectorAll(".cost")];
//   let numberOfUnits =[document.querySelectorAll(".number").value];
//   costs.forEach((cost)=>{
//     for (let i=0; i<=cost.length; i++){
//       if (id === i) {
//         if (action === "plus") {
//           number[i]=number[i]+1;
//           numberOfUnits[i]=number;
//           console.log(numberOfUnits[i]);
//         }
//       }
//     }
//   })
// }
    
//     let sumCostArray = [document.querySelectorAll(".sum")];
//     let sumCost = document.querySelectorAll(".sum");
//     let input = [document.querySelectorAll(".number")];
//     let myPrice = document.querySelectorAll(".myPay");
//     let myPriceArray = [document.querySelectorAll(".myPay")];
    // let number =0;
    // if (id === 0) {
    //   /////////////////////////
    //   //click plus button
    //   if (action === "plus") {
        // number++;
        // console.log(number);
        // cost.desired = 0;
        // cost.sum = (cost.number * cost.price) + cost.desired;
        // sumCostArray.forEach((e) => {
        //   for (let i = 0; i <= e.length; i++) {
        //     if (cost.id === i) {
        //       e[i].value = (cost.number * cost.price) + cost.desired;
        //     }
        //   }
        // })
        // myPriceArray.forEach((e) => {
        //   for (let i = 0; i <= e.length; i++) {
        //     if (cost.id === i) {
        //       e[i].value = 0;
        //     }
        //   }
        // })
      // }
      /////////////////////////
      //click minus button
      // else if (action === "minus" && cost.number > 0) {
      //   cost.number--;
      //   cost.desired = 0;
      //   cost.sum = (cost.number * cost.price) + cost.desired;
      //   sumCostArray.forEach((e) => {
      //     for (let i = 0; i <= e.length; i++) {
      //       if (cost.id === i) {
      //         e[i].value = (cost.number * cost.price) + cost.desired;
      //       }
      //     }
      //   })
      // }
      /////////////////////////
      //input price
      // else if (action === "input") {
      //   cost.number = 0;
      //   cost.sum = (cost.number * cost.price) + cost.desired;
      //   input.forEach((e) => {
      //     for (let i = 0; i <= e.length; i++) {
      //       if (cost.id === i) {
      //         e[i].value = 0;
      //       }
      //     }
      //   })
      //   sumCostArray.forEach((e) => {
      //     for (let i = 0; i <= e.length; i++) {
      //       if (cost.id === i) {
      //         e[i].value = 0;
      //       }
      //     }
      //   })
        // myPrice.forEach(function call(des, index) {
        //   des.addEventListener("input", function () {
        //     let myPay = des.value;
        //     cost.desired = myPay;
        //     cost.sum = (cost.number * cost.price) + parseInt(myPay);
        //     let temp = 0;
        //     sumCostArray.forEach((e) => {
        //       for (let i = 0; i <= e.length; i++) {
        //         if (i === index && cost.id === i) {
        //           e[i].value = myPay;
        //         }
        //         temp += parseInt(e[i].value);
        //         total.value = parseInt(temp);
        //       }
        //     })
        //   })
        // })
        /////////////////////////
        //if null input
        // myPrice.forEach(function call(e, index) {
        //   e.addEventListener("change", function (e) {
        //     let temp = 0;
        //     if (e.target.value == '') {
        //       e.target.value = 0
        //       sumCostArray.forEach((e) => {
        //         for (let i = 0; i <= e.length; i++) {
        //           if (i === index) {
        //             e[i].value = 0;
        //           }
        //           temp += parseInt(e[i].value);
        //           total.value = parseInt(temp);
        //         }
        //       })
        //     }
        //   })
        // })
      // }
    // }
    // let temp = 0;
    // sumCost.forEach((e) => {
    //   temp += parseInt(e.value);
    //   total.value = temp;
    // })
  
// }

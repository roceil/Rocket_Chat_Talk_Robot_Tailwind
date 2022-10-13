// 彈性選擇區塊
// DOM
const numBtn = document.querySelector(`#numBtn`);
const userNum = document.querySelectorAll(`#userNum`);
const monthNum = document.querySelectorAll(`#monthNum`);
const unit = document.querySelectorAll(`#unit`);
const problemList = document.querySelectorAll(`#problemList`)
console.log(problemList);

// 宣告
let userStr;
let monthStrBasic;
let monthStrFormal;
let nanStr;

// 數字按鈕監聽
numBtn.addEventListener("click", function (e) {
  userStr = e.target.value;
  monthStrBasic = e.target.value * 0.06;
  monthStrFormal = e.target.value * 0.16;
  nanStr = `秘密`;
  if (e.target.value === undefined) {
    return;
  } else {
    userNum[0].textContent = userStr;
    userNum[1].textContent = userStr;
    if (e.target.value === `>25000`) {
      monthNum[0].textContent = nanStr;
      monthNum[1].textContent = nanStr;
      unit[0].setAttribute("class", `hidden`);
      unit[1].setAttribute("class", `hidden`);
      return;
    } else {
      monthNum[0].textContent = monthStrBasic;
      monthNum[1].textContent = monthStrFormal;
      unit[0].setAttribute("class", `text-xs leading-[1.41666]  pt-[10px]`);
      unit[1].setAttribute("class", `text-xs leading-[1.41666]  pt-[10px]`);
      return;
    }
  }
});

// jQuery
$(document).ready(function () {
  $(`#problemList`).click(function (e) { 
    $(`#toggle`).toggle();
  });
});
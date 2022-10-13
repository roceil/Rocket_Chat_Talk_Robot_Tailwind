"use strict";

// DOM
var numBtn = document.querySelector("#numBtn");
var userNum = document.querySelectorAll("#userNum");
var monthNum = document.querySelectorAll("#monthNum");
var unit = document.querySelectorAll("#unit");
var problemList = document.querySelectorAll("#problemList");
var numBtnInit = document.querySelectorAll(".numBtnInit"); // 宣告

var userStr;
var monthStrBasic;
var monthStrFormal;
var nanStr;
var activeStr = "btn btn-plan-num btn-plan-num-active";
var numBtnInitStr = "btn btn-plan-num"; // jQuery

$(function () {
  // scollTopBtn
  $(".topBtn").click(function (e) {
    console.log("\u5F80\u4E0A\u8DD1");
    $("html,body").animate({
      scrollTop: 0
    }, 1000);
  }); // 監聽方案費用頁的常見問題區

  $(".question h3").click(function (e) {
    e.preventDefault(); //在 h2 上動態新增 class

    $(this).toggleClass("active"); //h2 在父層元素中，找到 p 元素，並且給它滑動效果

    $(this).parent().find("p").slideToggle(); //找到 img 元素，並且更改src

    $(this).find("img").attr("src", "https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/chatTalker_images/icon_minus.svg"); //h2 在父層 .question 元素中，找到其他 .question 同層元素，再找到該同層元素的 p 標籤，並向上收闔

    $(this).parent().siblings().find("p").slideUp(); //h2 在父層 .question 元素中，找到其他 .question 同層元素，再找到該同層元素的 h2 標籤，並動態移除 class

    $(this).parent().siblings().find("h3").removeClass("active");
  });
}); // 數字按鈕監聽

numBtn.addEventListener("click", function (e) {
  numBtnInitFun();
  userStr = e.target.value;
  monthStrBasic = e.target.value * 0.06;
  monthStrFormal = e.target.value * 0.16;
  nanStr = "\u79D8\u5BC6";

  if (e.target.value === undefined) {
    // 假如沒點到按鈕則中斷程式碼執行
    return;
  } else {
    // 針對監聽到的按鈕賦予active的class以變色
    e.target.setAttribute("class", activeStr); // 針對監聽到的按鈕值修改用戶數的數字

    userNum[0].textContent = userStr;
    userNum[1].textContent = userStr; // 判斷點擊到的按鈕是不是最後一個

    if (e.target.value === ">25000") {
      // 假設是最後一個按鈕，因為每月費用會顯示NaN，所以直接顯示nanStr的內容
      monthNum[0].textContent = nanStr;
      monthNum[1].textContent = nanStr; // 假設是最後一個按鈕，因為顯示nanStr的內容，所以單位隱藏

      unit[0].setAttribute("class", "hidden");
      unit[1].setAttribute("class", "hidden");
      return;
    } else {
      // 假設不是點擊最後一個按鈕，修改每月費用的數字
      monthNum[0].textContent = monthStrBasic;
      monthNum[1].textContent = monthStrFormal; // 假設不是點擊最後一個按鈕，則讓單位顯示出來

      unit[0].setAttribute("class", "text-xs leading-[1.41666]  pt-[10px]");
      unit[1].setAttribute("class", "text-xs leading-[1.41666]  pt-[10px]");
    }
  }
}); //全部的numBtn class初始化

function numBtnInitFun() {
  for (var i = 0; i < numBtnInit.length; i++) {
    numBtnInit[i].setAttribute('class', numBtnInitStr);
  }
}
//# sourceMappingURL=all.js.map

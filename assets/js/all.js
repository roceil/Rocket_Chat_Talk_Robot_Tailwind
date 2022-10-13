"use strict";

// 彈性選擇區塊
// DOM
var numBtn = document.querySelector("#numBtn");
var userNum = document.querySelectorAll("#userNum");
var monthNum = document.querySelectorAll("#monthNum");
var unit = document.querySelectorAll("#unit");
var problemList = document.querySelectorAll("#problemList");
console.log(problemList); // 宣告

var userStr;
var monthStrBasic;
var monthStrFormal;
var nanStr; // 數字按鈕監聽

numBtn.addEventListener("click", function (e) {
  userStr = e.target.value;
  monthStrBasic = e.target.value * 0.06;
  monthStrFormal = e.target.value * 0.16;
  nanStr = "\u79D8\u5BC6";

  if (e.target.value === undefined) {
    return;
  } else {
    userNum[0].textContent = userStr;
    userNum[1].textContent = userStr;

    if (e.target.value === ">25000") {
      monthNum[0].textContent = nanStr;
      monthNum[1].textContent = nanStr;
      unit[0].setAttribute("class", "hidden");
      unit[1].setAttribute("class", "hidden");
      return;
    } else {
      monthNum[0].textContent = monthStrBasic;
      monthNum[1].textContent = monthStrFormal;
      unit[0].setAttribute("class", "text-xs leading-[1.41666]  pt-[10px]");
      unit[1].setAttribute("class", "text-xs leading-[1.41666]  pt-[10px]");
      return;
    }
  }
}); // jQuery

$(document).ready(function () {
  $("#problemList").click(function (e) {
    $("#toggle").toggle();
  });
});
$(function () {
  $(".question h3").click(function (e) {
    e.preventDefault(); //在 h2 上動態新增 class

    $(this).toggleClass("active"); //h2 在父層元素中，找到 p 元素，並且給它滑動效果

    $(this).parent().find("p").slideToggle(); //找到 img 元素，並且更改src

    $(this).find("img").attr("src", "https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/chatTalker_images/icon_minus.svg"); //h2 在父層 .question 元素中，找到其他 .question 同層元素，再找到該同層元素的 p 標籤，並向上收闔

    $(this).parent().siblings().find("p").slideUp(); //h2 在父層 .question 元素中，找到其他 .question 同層元素，再找到該同層元素的 h2 標籤，並動態移除 class

    $(this).parent().siblings().find("h3").removeClass("active");
  });
});
//# sourceMappingURL=all.js.map

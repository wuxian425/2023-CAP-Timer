const Today = new Date();

// 目標日期
let countDownTime = new Date("May 20 2023 08:20:00");

function remainTime() {

  let timeNow = new Date();
  let remain = countDownTime - timeNow;

  let day = Math.floor(remain / 1000 / 60 / 60 / 24) + 1;

  if (day > 0) {
  	var str = "僅僅" + day + "天！";
  } else {
  	if (day <= 0) {
  		var str = "沒有時間了！";
  	};
  };

  document.getElementById('timer').innerHTML = str;
}

// 重複呼叫函數 remainTime()
const timeinterval = setInterval(function() {
  var t = countDownTime - (new Date());

  if (t < 0) {
    clearInterval(timeinterval);
    // 時間到了
  } else {
    remainTime()
  }
}, 1000);
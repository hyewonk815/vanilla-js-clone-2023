const clock = document.querySelector('h2#clock');

function getClock() {
  const dateDay = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
  const date = new Date();
  const dateYear = date.getFullYear();
  const dateMonth = date.getMonth() + 1;
  const dateDate = date.getDate();
  const day = dateDay[date.getDay()];
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  clock.innerText = `${dateYear}년 ${dateMonth}월 ${dateDate}일 ${day} ${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);

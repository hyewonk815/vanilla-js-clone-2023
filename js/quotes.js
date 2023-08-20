const quotes = [
  {
    quote: '오늘 특별한 순간들은 내일의 추억이에요.',
    author: '알라딘',
  },
  {
    quote: '오직 내가 할 수 있는 건 다음 할 일을 하는 것 뿐이야.',
    author: '겨울왕국',
  },
  {
    quote: '행복이 네가 있는 곳에 있다는 걸 깨닫게 되는 날이 올 거야.',
    author: '모아나',
  },
  {
    quote: '과거는 아플 수 있어.',
    author: '라이온 킹',
  },
  {
    quote: '누구든 무엇이든 될 수 있어.',
    author: '주토피아',
  },
  {
    quote: '난 더 이상 숨지 않고, 오늘을 즐기며 최선을 다할 거야.',
    author: '코코',
  },
  {
    quote: '익숙한 곳에서 벗어나서 모험해.',
    author: '라푼젤',
  },
  {
    quote: '난 내 삶의 모든 순간을 살아갈 거야.',
    author: '소울',
  },
  {
    quote: '매일 행복할 순 없지만, 행복한 것들은 매일 있어.',
    author: '곰돌이 푸',
  },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `(${todaysQuote.author})`;

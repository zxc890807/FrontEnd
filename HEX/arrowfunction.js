// 函式陳述式
function numA(x) {
  return x * x;
}

// 函示表達式
const numB = function (x) {
  return x * x;
};

// 箭頭函式
const numC = (x) => {
  return x * x;
};

// 如果只有需要return可以省略大括號
const numD = (x) => `數字相乘=${x * x}`;

// 但是如果函示中沒有參數要代入，前面的小括號還是不能省略
const numE = () => `不省略小括號`;

// 陣列操作 map、filter
const data = [1, 8, 13, 20];
const newData = data.map(function (item) {
  return item + 2;
});

// map with arrow function
const newData2 = data.map((item) => item + 2);

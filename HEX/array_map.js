const arr = [1, 5, 10];
const newar = arr.map(function (item) {
  return item * item;
});
// JS array map
// 原始陣列運算後，傳回新陣列
// 不會影響原陣列

const data = [1, 8, 13, 20];
const newdata = data.map(function (item) {
  let obj = {};
  obj.checknum = item < 10;
  return obj;
});
// JS array filter
// 篩選出符合條件的內容，傳回新陣列
// 不會影響原陣列

const newdata23 = arr.filter(function (item) {
  return item >= 5;
});

const scoreData = [
  { name: "小名", score: 88 },
  { name: "小美", score: 87 },
  { name: "小黑", score: 28 }
];

const filterScore = scoreData.filter(function (item) {
  return item.score >= 60;
});

// JS find 從頭開始搜索陣列直到找到第一個符合的元素
const findScore = scoreData.find(function (item) {
  return item.score >= 60;
});

// JS findIndex
const colors = ["red", "blue", "black"];
const blueIndex = colors.findIndex(function (item) {
  return item == "blue";
});

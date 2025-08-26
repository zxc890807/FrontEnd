const btn = document.querySelector('.btn');
const T = document.querySelector('h1');
const P = document.querySelector('p');
const list = document.querySelector('ul');

let count = 0;
// event建立:監聽按鈕點擊事件
// e視為一個物件，裡面會記錄點擊當下的各種數據，可以撈出來看
btn.addEventListener("click",function(e){
    count+=1;
    P.textContent = count;
    console.log(e.clientX)
    console.log(e.target)
})

// Chrome裡面對元素按右鍵->檢查->裡面的Event Listeners可以查看監聽事件
// nodeName可以知道該元素在document的節點名稱
console.log(btn.nodeName);

// 在List上綁監聽，可以偵測list上的點擊事件
// 點擊的事件可以範圍很廣，不一定只侷限在btn上
list.addEventListener("click",function(list_click){
    console.log(list_click)
    console.log(list_click.target.nodeName)
    if (list_click.target.nodeName == "INPUT"){
        console.log("點到按鈕");
    }else{
        console.log("點到LI");
    }
})

// 取消預設觸發行為:按下連結的時候不轉址，改為觸發其他動作
const link = document.querySelector('a');
link.addEventListener("click",function(link_click){
    link_click.preventDefault();
    console.log("連結點擊但不轉址");
    link.textContent = "點了沒轉地址";
})
function displayList() {
    // フルーツの親要素を取得
    var fruitsDiv = document.getElementById("fruits");
  
    // 既にul要素が存在する場合は元の表示に切り替え、ul要素を削除
    var existingUl = fruitsDiv.querySelector("ul");
    if (existingUl) {
      fruitsDiv.innerHTML = ""; // フルーツの要素を一度クリアする
      var fruits = fruitsDiv.getAttribute("data-original-content");
      fruitsDiv.innerHTML = fruits; // 元の表示（<p>タグ）に戻す
    } else {
      // ul要素を作成
      var ul = document.createElement("ul");
  
      // フルーツの各要素を取得してli要素に追加し、ulに追加
      var fruits = fruitsDiv.innerHTML; // 元の表示を一時的に保存
      fruitsDiv.setAttribute("data-original-content", fruits); // 元の表示をデータ属性に保存
      fruitsDiv.innerHTML = ""; // フルーツの要素を一度クリアする
  
      var fruitItems = fruits.split("<p>").filter(function(item) {
        return item.trim() !== ""; // 空の要素を除外
      });
  
      fruitItems.forEach(function(fruit) {
        var li = document.createElement("li");
        li.textContent = fruit.replace("</p>", ""); // <p>タグを除去
        ul.appendChild(li);
      });
  
      // ul要素をfruitsDivに追加
      fruitsDiv.appendChild(ul);
    }
  }
  
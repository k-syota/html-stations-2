function changeBackgroundColor(e) {
  // ここに背景色を変える処理を書く。
  // チェックボックスの値取得
  const checkbox = document.getElementById("check");
  // 状態取得
  const isChecked = checkbox.checked;
  if (isChecked) {
    document.getElementById("text").style.backgroundColor = "red"
  } else {
    document.getElementById("text").style.backgroundColor = "transparent"
  }
}

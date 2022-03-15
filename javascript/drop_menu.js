// 処理が複雑になった時に読みやすくするため、定義と実行は分て記述
// 値の変更をしやすくする為に変数に代入
function dropMenu(){
  const button = $("#drop_menu_btn");
  const menu = $("#drop_menu");
  button.click(function() {
      menu.Toggle("500", "linear")
  });
};

$(function() {
  dropMenu();
})
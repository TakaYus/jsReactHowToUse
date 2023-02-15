import React from "react";

const Message = (props) => {
  // 分割代入の記述
  const { color, children } = props;

  console.log(
    "読み込みの確認/Messageオブジェクトがインポートされる度に読み込まれる。"
  );

  const ContentStyle = {
    // color:props.color,
    color,
    fontSize: "50px"
  };
  return <p style={ContentStyle}>メッセージjsxファイル</p>;
};

export default Message;

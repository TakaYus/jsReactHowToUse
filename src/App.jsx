import React, { useEffect } from "react";
import { useState } from "react";
import Message from "./component/Message";

const App = () => {
  const ContentStyle = {
    color: "blue",
    fontSize: "30px"
    // React上では、font-size は Fontsize となる。
  };

  // stateに変化を与える関数（トリガー）を定義して、
  // const [初期値(トリガーで動的に変化する) , 動的に変動の仕方を決めるのに使用] = useState(初期値)
  const onClickCountUp = () => {
    setNum(Num + 1);
  };

  const [Num, setNum] = useState(0);
  // 可変の状態 useState():動的な処理を行う際に使用
  // stateが変更されると再レンダリングされる
  // 動的に値を変更するときに使用する

  // useEffect（アロー関数のカタチ）を使用することで、
  // レンダリングのタイミングを制御できる
  // const [初期値（動的に変動する）, (空:null)] = useState(初期値)
  // とすることで、一回目の処理だけレンダリングする
  // 下記は、3の倍数のタイミングのみ処理を実行する記述
  useEffect(() => {
    if (Num > 0) {
      if (Num % 3 === 0) {
        FaseShowFlag || setFaseShowFlag(true);
      } else {
        FaseShowFlag && setFaseShowFlag(false);
      }
    }
  }, [Num]);

  const onClickSwichShowFlag = () => {
    setFaseShowFlag(!FaseShowFlag);
  };

  const [FaseShowFlag, setFaseShowFlag] = useState(false);

  return (
    <>
      <h1 style={{ color: "red" }}>こんばんは</h1>
      <p style={ContentStyle}>こんにちは！</p>
      <Message color="pink">第二引数のchildrenに該当</Message>
      <Message color="green">第二引数のchildrenに該当</Message>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwichShowFlag}>on/off</button>
      <p>{Num}</p>
      {FaseShowFlag && <p>ON</p>}
      {FaseShowFlag || <p>OFF</p>}
    </>
    // &&:trueならば右の処理に進む
    // ||:falseならば右の処理に進む
  );
};

// このファイル以外でApp関数を利用できるようにする記述
export default App;

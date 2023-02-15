// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";

// import App from "./App";

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

// リアクト環境構築 ver 17.0.2　用のコード
// import { StrictMode } from "react";
// import ReactDom from "react-dom";
// import App from "./App";

// ReactDom.render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
//   document.getElementById("root")
// );

// ReactとDOM操作用のライブラリ の 読込みの記述（※必須）
import React from "react";
import ReactDom from "react-dom";
// Reactコンポーネントを呼び出す記述
import App from "./App";

// Reactでは関数の中でHTMLタグを書く
// 出力する内容は、return()の内部に通常のHTMLとほぼ同じ
/* <>又は<React.Fragment>タグで、HTMLのコンテンツを包括する */

// const App = () => {
//   return (
//     // <React.Fragment>
//     <>
//       <h1>こんにちは</h1>
//       <p>あああ</p>
//     </>
//     // </React.Fragment>
//   );
// };

// Render関数（関数レンダリングを使用する際に使うメソッド）
ReactDom.render(<App />, document.getElementById("root"));

// コンポーネントの命名規則
// 可能 ： App / PascalCase　→　頭文字を大文字にする
// 不可能 ; app → 頭文字を小文字にしてはいけない
// 推奨しない ;  camelCase , snake_case , kebab-case

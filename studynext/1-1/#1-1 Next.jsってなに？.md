# Next.jsってなーに？
>Next.js（ネクストジェイエス）は、Node.js上に構築されたオープンソースのWebアプリケーションフレームワークであり、サーバーサイドスクリプトや静的Webサイトの生成などの、ReactベースのWebアプリケーション開発を提供する。  
>(出典: フリー百科事典『ウィキペディア（Wikipedia）』)  
  
ん，わからん．まずNode.jsって何？なんかすごいいろいろできるらしい？

## 勉強するぞ！！！！！

**Next.js**ってなに！？！？！？

そうだ勉強しよう．

公式チュートリアルを読むことが上達の近道なので，  
公式チュートリアル読む→実際になんか作ってみる(最終的にポートフォリオサイトつくれたらいいな！)   

ってのをやっていくよ．  
↓  
[神サイト(React Foundations)](https://nextjs.org/learn/react-foundations)


# 読む．

javascript，htmlはギリ読めるからReact勉強したらなんとかなりそう...？  
とりあえず読んでわかったことを要約しつつ読むよ．

## ReactとNect.jsについて

[第1章 ReactとNext.jsについて](https://nextjs.org/learn/react-foundations/what-is-react-and-nextjs)    


**Nect.jsはReactのフレームワークで，ReactはJavaScriptのライブラリ**  
らしい．  

ウェブアプリケーションを作る時にラクできる． 
具体例がないとわかんないけど，そんな感じかな．

**追記**  
簡単にいうとコンポーネントを関数として扱うやつだったーー！！多分そこらへんわかる人は４章ぐらいから読んでもいいかも！

## UIのレンダリング

[第2章 ユーザーインターフェース（UI）のレンダリング](https://nextjs.org/learn/react-foundations/rendering-ui)    

![HTML-DOM](.\image1\image.png)

知ってるのキターーーーーー！でもDOMってなんだ？


![aboutDOM](.\image1\image2.png)

神サイトすぎる！！！要するに，  

ユーザーがウェブページにアクセス  
→サーバーがブラウザにHTMLファイルを返す  
→ブラウザがそのHTMLを読み取ってDOM(ドキュメントオブジェクトモデル)を構築する

  ...らしい．
DOMとHTMLの違いは，料理済みか料理前か，とかかな？

## JavascriptでUIを更新する

[第3章 JavascriptでUIを更新する](https://nextjs.org/learn/react-foundations/updating-ui-with-javascript)    


とりあえずvscode上で**Live Preview**を入れて，この通りにやってみるよ．

```html
<html>
  <body>
    <div></div>
  </body>
</html>
```
ひな形がこれ．とりあえず，DOMメソッドを使ってみるみたい．
```html
<html>
  <body>
    <div id="app"></div>
    <script type="text/javascript">
      const app = document.getElementById('app');
    </script>
  </body>
</html>
```
`<div id="app"></div>` とりあえず指定して，  
`<script type="text/javascript"></script>`JavaScriptを書きたいから`script`タグを使う．  
`const app = document.getElementById('app');`　[getElementById(`app`)](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById) ←なんだっけこれ  

復習するよ！！！！下の折り畳みで復習してるけど，いらない人はスキップで！
<details>
  <summary>寄り道(javascriptの復習)</summary>

  [getElementById(`app`)](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)←ここを見るよー
  >An `Element` object describing the DOM element object matching the specified ID, or null if no matching element was found in the document.  
  （指定された ID に一致する DOM 要素オブジェクトを記述する `Element` オブジェクト。ドキュメント内に一致する要素が見つからない場合は null になります。）

  つまり，例えば，idが`greeting`で，中身が`こんにちは！`のidがあるとしたら，下みたいな感じ．
  ```html
  <p id="greeting">こんにちは！</p>
  ```
  んで，javascriptを使って変更するときは下みたいな感じにすればいい．

  ```js
  const greetingElement = document.getElementById('greeting');
  greetingElement.textContent = 'こんばんは！';
  ```

  これを動く感じで書けば．．．
  ```html
  <!DOCTYPE html>
  <html lang="ja">
  <head>
    <meta charset="UTF-8">
    <title>getElementById デモ</title>
  </head>
  <body>
    <p id="message">こんにちは、世界！</p>
    <button onclick="changeText()">テキストを変更</button>

    <script>
      function changeText() {
        const element = document.getElementById("message");
        element.textContent = "こんばんは、JavaScript！";
      }
    </script>
  </body>
  </html>
  ```
  ちょっとめんどくさいけど，ボタンを押したら変わるやつ．  
  ![GetElement_demo1](.\image1\image3.png)
  ![GetElement_demo2](.\image1\image4.png)  
  こんな感じ！  復習終わり！

</details>

...いい感じに復習できた！  
DOMメソッドを使って，`H1`エレメントを作るよ！
```html
<html>
  <body>
    <div id="app"></div>
    <script type="text/javascript">
      // Select the div element with 'app' id
      const app = document.getElementById('app');
 
      // Create a new H1 element
      const header = document.createElement('h1');
 
      // Create a new text node for the H1 element
      const text = 'Develop. Preview. Ship.';
      const headerContent = document.createTextNode(text);
 
      // Append the text to the H1 element
      header.appendChild(headerContent);
 
      // Place the H1 element inside the div
      app.appendChild(header);
    </script>
  </body>
</html>
```

![実行結果](.\image1\image5.png)

文字列(`text`)を`creatTextNode()`で画面に表示できる文字データに変換してる．  
前に定義した`h1`タグに`headercontent`を`append`(くっつける)ことをして，   
`<h1>Develop. Preview. Ship.</h1>`の要素を作った． んで，
```html
const app = document.getElementById('app');
app.appendChild(header);
```
`h1`を`id="app"`の`<div>`に追加することで，表示してる．

1.テキストノードつくる  
2.それを`h1`に入れる  
3.それを`div#app`(画面に出す場所)にくっつける

こんな感じの動作だね．

### HTMLとDOMのちがい

![diffalent dom and html](.\image1\image6.png)

けっこーちがう．DOMに`h1`エレメントが入ってて，作成したHTMLファイルと違う．  
HTMLが初期のページコンテンツを表すのに対し、DOMは記述したJavaScriptコードによって変更された更新されたページコンテンツを表すから．

### 命令型プログラミングと宣言型プログラミング

さっき書いたコードはUIの更新手順を記述してるから，命令型プログラミング．
基本的に，UIの構築は命令型ではなく宣言型の方が好まれるらしい．（開発プロセスをスピードアップできるから）  
DOMメソッドを記述する代わりに、開発者が表示したいもの（この場合はテキストを含むh1タグ）を宣言できれば便利なんだってー．  

>"言い換えれば、命令型プログラミングはシェフにピザの作り方をステップバイステップで指示するようなものです。宣言型プログラミングは、ピザを作る手順を気にせずにピザを注文するようなものです。🍕"

### React: 宣言型UIライブラリ

開発者は、ユーザーインターフェースに何が起きてほしいかを React に伝えると、React が開発者に代わって DOM を更新する手順を判断してくれるらしい．．．  

宣言型でラクなのがReactってことだね

## Reactを始めよう

[第4章 Reactを始めよう](https://nextjs.org/learn/react-foundations/getting-started-with-react)

unpkgから2つのReactスクリプトを読み込むみたい．まあとりあえず**unpkg**ってなに?

> UNPKG is a fast, global content delivery network for everything on npm. Use it to quickly and easily load any file on npm using a URL like:  
>(UNPKGは、npm上のあらゆるコンテンツを扱う高速でグローバルなコンテンツ配信ネットワークです。例えば、次のようなURLを使って、npm上のあらゆるファイルを素早く簡単に読み込むことができます。)

要するに，npm installしなくても使えるから試作の際にはこれでいいらしい．  
unpkg = "UNiversal PacKaGe"なんだって（へ～）  

閑話休題．  

今回読み込むのは２つ．`react`と`react-dom`．`react`はReactのコアライブラリ．`react-dom`はReactをDOMで使えるようにするDOM固有のメソッドを帝京してくれるやつ．さっきのコードに追加してみよー  

```html
<html>
  <body>
    <div id="app"></div>
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script type="text/javascript">
      const app = document.getElementById('app');
      const header = document.createElement('h1');
      const text = 'Develop. Preview. Ship.';
      const headerContent = document.createTextNode(text);
      header.appendChild(headerContent);
      app.appendChild(header);
    </script>
  </body>
</html>
```
これで読み込み完了！んで，ただのjavascriptでDOMを直接操作してるから，[`ReactDOM.createRoot()`](https://react.dev/reference/react-dom/client/createRoot)メソッドを使って特定のDOM要素をターゲットして，Reactコンポーネントを表示するようにしよう．

```html
<html>
  <body>
    <div id="app"></div>
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script>
      const app = document.getElementById('app');
      const root = ReactDOM.createRoot(app);
      root.render(<h1>Develop. Preview. Ship.</h1>);
    </script>
  </body>
</html>
```

```turminal
Uncaught SyntaxError: expected expression, got '<'
```

JSXだから，エラーが出る．BabelみたいなJavascriptコンパイラを使う必要があるから...

```html
  <body>
    <div id="app"></div>
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <!-- Babel Script -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/jsx">
      const domNode = document.getElementById('app');
      const root = ReactDOM.createRoot(domNode);
      root.render(<h1>Develop. Preview. Ship.</h1>);
    </script>
  </body>
</html>
```
こう！  
![動作確認2](.\image1\image7.png)
動作確認ヨシ！  

比較してみよ～  
宣言型Reactコード
```html
<script type="text/jsx">
  const domNode = document.getElementById("app")
  const root = ReactDOM.createRoot(domNode);
  root.render(<h1>Develop. Preview. Ship.</h1>);
</script>
```
命令型JavaScriptコード
```html
<script type="text/javascript">
  const app = document.getElementById('app');
  const header = document.createElement('h1');
  const text = 'Develop. Preview. Ship.';
  const headerContent = document.createTextNode(text);
  header.appendChild(headerContent);
  app.appendChild(header);
</script>
```
**めっちゃコードの量消えてる！！しかもわかりやすい！！**  
Reactサイコー！！！  

## コンポーネントを使ったUIの構築
[第5章 コンポーネントを使ったUIの構築](https://nextjs.org/learn/react-foundations/building-ui-with-components)

だんだん疲れてきました！いったんここでラスト！  

>Reactアプリケーションの構築を始める前に、知っておくべきReactの3つのコアコンセプトがあります。それは以下のとおりです。  
>・ Components  
>・ Props  
>・ State  

### Compornents（構成要素）
要するに，写真，文字，ボタンをモジュール化して，追加，更新，削除できるような形式にするのがコンポーネントっぽい．

Reactだと，コンポーネントは関数として書けるみたい．
```html
<script type="text/jsx">
  const app = document.getElementById("app")
 
  function Header() {     
    return (<h1>Develop. Preview. Ship.</h1>)
   }
 
  const root = ReactDOM.createRoot(app);
  root.render(<Header>);
</script>
```

こんな感じ．UI=関数って考え方．


### Nest compornents 
なんか嫌な予感がします．むずそう．

> アプリケーションには通常、単一のコンポーネントよりも多くのコンテンツが含まれます。Reactコンポーネントは、通常のHTML要素と同様に、互いにネストすることができます。
```js
function Header() {
  return <h1>Develop. Preview. Ship.</h1>;
}
 
function HomePage() {
  return (
    <div>
      {/* Nesting the Header component */}
      <Header />
    </div>
  );
}
 
const root = ReactDOM.createRoot(app);
root.render(<Header />);
```
![compornent tree](.\image1\image9.png)

HomePageの中に，Headerをネストしてる．（ページの中にヘッダーを表示する構造）
意外と難しくないかも．Homepageが最上位コンポーネントになったから，`root.render()`メソッドに渡すように変えて，実際に動く感じにするとー
```js
<!DOCTYPE html>
<html>
  <body>
    <div id="app"></div>

    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

    <script type="text/babel">
      function Header() {
        return <h1>Develop. Preview. Ship.</h1>;
      }

      function HomePage() {
        return (
          <div>
            <Header />
          </div>
        );
      }

      const app = document.getElementById('app');
      const root = ReactDOM.createRoot(app);
      root.render(<HomePage />);
    </script>
  </body>
</html>
```
![6_index.html](.\image1\image10.png)

てことは...？
```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>お試し版</title>
    <!-- ReactとReactDOMの読み込み -->
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <!-- BabelでJSXを読み込めるようにする -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  </head>
  <body>
    <div id="root"></div>

    <script type="text/babel">
      function Header() {
        return <h1>こばのポートフォリオ</h1>;
      }

      function HomePage() {
        return (
          <div>
            <Header />
            <p>こばのポートフォリオサイトにようこそ!</p>
          </div>
        );
      }

      // Reactで描画
      const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(<HomePage />);
    </script>
  </body>
</html>
```

![お試し版](.\image1\image8.png)  
おっおっおっ(^ω^≡^ω^)  

いいねいいね！まだ関数１個しか作ってないけど，いい感じかも！！（はやい）

とりあえず次回はbabel無しでも実行できるようにするために環境構築をします！
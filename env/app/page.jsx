export default function HomePage() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>🏠 My Next.js Playground</h1>
      <p>いろいろ試してみよう！</p>

      <ul style={{ lineHeight: 2 }}>
        <li><a href="/counter">カウントアップボタン</a></li>
        <li><a href="/color">ボタンを押すと色が変わるやつ</a></li>
        <li><a href="/greet">挨拶できると，友達増えるね</a></li>
        <li><a href="/form">名前フォーム</a></li>
        <li><a href="/dog">ランダムわんこ画像</a></li>
      </ul>
    </main>
  );
}
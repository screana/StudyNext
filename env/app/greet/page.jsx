// 'use client' を入れると useState, useEffect などクライアント機能が使える
'use client';

import { useState } from 'react';

export default function CounterPage() {

  const [name, setText] = useState('');

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>好きな色選んでね～</h1>
        <div>
        <input value = {name}
        onChange={(e) => setText(e.target.value)}
        placeholder='名前を入力してね'
        />
        <p> 今入力したのは:{name}</p>
        </div>
    </main>
  );
}
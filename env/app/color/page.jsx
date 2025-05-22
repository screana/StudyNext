// 'use client' を入れると useState, useEffect などクライアント機能が使える
'use client';

import { useState } from 'react';

export default function CounterPage() {

  const [selectedColor, setSelectedColor] = useState('');

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>好きな色選んでね～</h1>
        <div>
          <button onClick={() => setSelectedColor('青')}>青</button>
          <button onClick={() => setSelectedColor('赤')}style ={{ marginLeft: '1rem' }}>赤</button>
      </div>

    {
      selectedColor && (
        <p> あなたの好きな色は，<strong>{selectedColor}</strong>です！</p>
      )
    }
    </main>
  );
}

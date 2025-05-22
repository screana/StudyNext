'use client';

import { useState } from 'react';

export default function CounterPage() {
  const [count, setCount] = useState(0);

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>カウンター</h1>
      <p>現在のカウント{count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: '1rem' }}>-1</button>
      <button onClick={() => setCount(0)} style={{ marginLeft: '1rem' }}>リセット</button>
    </main>
  );
}

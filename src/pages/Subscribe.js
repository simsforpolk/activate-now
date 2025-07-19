import React, { useState } from 'react';

export default function Subscribe() {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    alert(`Thanks for subscribing, ${email}!`);
  };

  return (
    <div>
      <h2>Subscribe for Updates</h2>
      <input
        type='email'
        placeholder='Your email'
        value={email}
        onChange={e => setEmail(e.target.value)}
        style={{ padding: '8px', marginRight: '8px' }}
      />
      <button onClick={handleSubscribe}>Subscribe</button>
    </div>
  );
}
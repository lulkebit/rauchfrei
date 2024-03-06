import { useState } from 'preact/hooks';

export default function Greeting({messages}) {

  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

  return (
    <div>
      <h3>{randomMessage}! Thank you for visiting!</h3>
    </div>
  );
}
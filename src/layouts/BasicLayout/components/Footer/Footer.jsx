import React from 'react';
import Logo from '../Logo';

export default () => {
  return (
    <div
      style={{
        width: '100%',
        padding: '20px 40px',
        textAlign: 'center',
        lineHeight: '36px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <div style={{ filter: 'grayscale(50%)', opacity: 0.3 }}>
        <Logo isDark />
      </div>
      <div
        style={{
          color: '#999',
          lineHeight: 1.5,
          fontSize: 12,
          textAlign: 'right',
        }}
      >
        Justitia
        <br />
        @TrustChain
      </div>
    </div>
  );
};

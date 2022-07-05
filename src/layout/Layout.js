import React from 'react';
import Header from '../components/Header/Header';

export function Layout({ children }) {
  return (
    <>
      <Header />
      <main style={{ overflow: 'hidden' }}>{children}</main>
    </>
  );
}

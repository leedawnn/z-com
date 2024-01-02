import { Inter } from 'next/font/google';
import './globals.css';
import styles from './page.module.css';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children, modal }: { children: React.ReactNode; modal: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className={styles.container}>
          {children}
          {modal}
        </div>
      </body>
    </html>
  );
}

// 주소가 z.com일 때, children => page.tsx, modal => @modal/default.tsx
// 주소가 z.com/i/flow/login일 때, children => i/flow/login/page.tsx, modal => @modal/i/flow/login/page.tsx

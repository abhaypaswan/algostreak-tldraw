'use client'

import { Tldraw } from 'tldraw';
import '../globals.css';

export default function TldrawPage() {
  return (
    <div style={{ position: 'fixed', inset: 0 }}>
      <Tldraw />
    </div>
  );
}

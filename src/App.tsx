import { useEffect, useState, useCallback } from 'react';

// ─── SVG Icons ───────────────────────────────────────────────────────────────
const BookIcon = ({ size = 24, color = 'currentColor', strokeWidth = 2 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"/>
  </svg>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#F5F7FA] p-6 text-[#1a1a2e]">
      <header className="max-w-2xl mx-auto text-center mb-10">
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-white rounded-2xl shadow-sm">
            <BookIcon size={40} color="#00AA5B" />
          </div>
        </div>
        <h1 className="text-3xl font-bold mb-2">Pusaka Pedia</h1>
        <p className="text-gray-600">Selamat datang di perpustakaan digital Anda.</p>
      </header>
      
      <main className="max-w-2xl mx-auto bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center">
        <h2 className="text-xl font-semibold mb-4">Website Sedang Disiapkan</h2>
        <p className="text-gray-500 mb-6">Jika Anda melihat halaman ini, berarti konfigurasi React + Vite Anda sudah berhasil!</p>
        <button className="bg-[#00AA5B] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#008F4C] transition-colors">
          Mulai Jelajah
        </button>
      </main>
    </div>
  );
}

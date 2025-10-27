import './globals.css'
import { ReactNode } from 'react'
import Link from 'next/link'

export const metadata = {
  title: 'BuyMoza',
  description: 'Mercado online de Moçambique',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt">
      <body className="bg-gray-100 text-gray-900">
        <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">BuyMoza</h1>
          <nav>
            <Link href="/" className="px-3 hover:underline">Home</Link>
            <Link href="/login" className="px-3 hover:underline">Login</Link>
            <Link href="/cadastro" className="px-3 hover:underline">Cadastro</Link>
          </nav>
        </header>
        <main className="p-4">{children}</main>
        <footer className="bg-blue-600 text-white p-4 text-center">
          © 2025 BuyMoza - Todos os direitos reservados
        </footer>
      </body>
    </html>
  )
}

import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Bem-vindo ao BuyMoza!</h2>
      <p className="mb-6">Compre e venda qualquer coisa em Moçambique.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-bold">Produto 1</h3>
          <p>Descrição breve do produto.</p>
          <button className="mt-2 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
            Comprar
          </button>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-bold">Produto 2</h3>
          <p>Descrição breve do produto.</p>
          <button className="mt-2 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
            Comprar
          </button>
        </div>
      </div>
    </div>
  )
}

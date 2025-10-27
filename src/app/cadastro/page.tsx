export default function Cadastro() {
  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Cadastro</h2>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Nome completo" className="p-2 border rounded"/>
        <input type="email" placeholder="Email" className="p-2 border rounded"/>
        <input type="password" placeholder="Senha" className="p-2 border rounded"/>
        <button type="submit" className="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700">
          Registrar
        </button>
      </form>
    </div>
  )
}

//componente React
import  './App.css'
import MeuComponente from './componentes/MeuComponente'
function App() {
let nome = "Marcus G.C.T"
let sobrenome = "da Silva"

  return (
    <>
      <h1 className="nome">Nome: {nome}</h1>
      <p className="sobrenome">sobrenome: {sobrenome}</p>
    </>

  )// Retorna JSX - JavaScript XML
}
export default App

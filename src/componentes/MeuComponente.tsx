
import './MeuComponente.css'
//criar nosso primeiro componente.
//esse componente será o componente do nosso HEADER.
//No header temos 300px de altura e é do tamanho da tela
//Ele tem uma borda Amarela de 2px solida.
//Dentro da tag header nos temos uma div com o texto "logo" de 
//        Tamanho 200x200 centralizada na vertical a 30 px da lateral esquerda

function MeuComponente{
    return (
        <>
        <header className='header'>
            <div className='logo'>
                {}</div>
        </header>
        </>
    )
}

export default MeuComponente;

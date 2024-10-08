import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css'

const Formulario = () => {

    const times = [
        'Programação', 
        'Front-End', 
        'Dasa Science', 
        'Develops', 
        'UX e Desing', 
        'Mobile', 
        'Inovação e Gestão'
    ]


    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log()
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencra o formulario para criar o card.</h2>
                <CampoTexto label='Nome' placeholder='Digite seu nome...'/>
                <CampoTexto label='Cargo' placeholder='Digite seu cargo...'/>
                <CampoTexto label='Imagen' placeholder='Digite o endereço da imagem...'/>
                <ListaSuspensa label ='Time' itens={times}/>
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;

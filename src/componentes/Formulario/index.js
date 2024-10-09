import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css'
import { useState } from 'react';

const Formulario = (props) => {

    const times = [
        'Programação', 
        'Front-End', 
        'Dasa Science', 
        'Develops', 
        'UX e Desing', 
        'Mobile', 
        'Inovação e Gestão'
    ]

    const [nome,  setNome] = useState('')
    const [cargo,  setCargo] = useState('')
    const [imagem,  setImagem] = useState('')
    const [time,  setTime] = useState('')


    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo, 
            imagem, 
            time
        })
        //console.log("formulario enviado", nome, cargo, imagem, time);
        
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencra o formulario para criar o card.</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label='Nome' 
                    placeholder='Digite seu nome...'
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label='Cargo' 
                    placeholder='Digite seu cargo...'
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto 
                    label='Imagen' 
                    placeholder='Digite o endereço da imagem...'
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label ='Time' 
                    itens={times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;

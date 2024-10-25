import Colaborador from '../Colaborador';
import './Time.css'

const Time = (props) => {
    const background = {backgroundColor: props.corSecundaria};
    const subline = {borderColor: props.corPrimaria};
    return(
        (props.colaboradores.length > 0) ? <section className='time' style={background}>
            <h3 style={subline}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map( colaborador => <Colaborador 
                                            key={colaborador.nome}
                                            nome={colaborador.nome} 
                                            cargo={colaborador.cargo}
                                            imagem={colaborador.imagem}
                                            corDeFundo={colaborador.corPrimaria}
                                        />)}
            </div>
        </section>
        : ''
    );
}

export default Time;
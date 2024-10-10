import Colaborador from '../Colaborador';
import './Time.css'

const Time = (props) => {
    const background = {backgroundColor: props.corSecundaria};
    const subline = {borderColor: props.corPrimaria};
    return(
        <section className='time' style={background}>
            <h3 style={subline}>{props.nome}</h3>
            <Colaborador/>
        </section>
    );
}

export default Time;
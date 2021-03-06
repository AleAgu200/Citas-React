import EditButton from "./EditButton";
import RemoveButton from "./RemoveButton";

const Paciente = ({paciente,setPaciente,eliminarPaciente}) => {

  const {nombre, propietario, email, fecha, sintomas,id} = paciente;
  return (
    <div className='mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-md' >
        <p className='font-bold mb-3 text-gray-700 uppercase'>
          Nombre: {' '}
          <span className='font-normal normal-case'>
            {nombre}
          </span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>
          Propietario: {' '}
          <span className='font-normal normal-case'>
            {propietario}
          </span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>
          Email: {' '}
          <span className='font-normal normal-case'>
            {email}
          </span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>
          Fecha Alta {' '}
          <span className='font-normal normal-case'>
            {fecha}
          </span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>
          Sintomas: {' '}
          <span className='font-normal normal-case'>
            {sintomas}
          </span>
        </p>

        <div className="flex justify-between">
          <EditButton paciente={paciente} setPaciente={setPaciente} />
          <RemoveButton paciente={paciente} eliminarPaciente= {eliminarPaciente}/>
        </div>
    </div>

  )
}

export default Paciente
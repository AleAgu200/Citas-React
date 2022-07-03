import React from 'react'

const RemoveButton = ({paciente,eliminarPaciente}) => {

  const handleEliminarPaciente = () => {
    const respuesta = window.confirm(`¿Estas seguro de eliminar el paciente ${paciente.nombre}?`);
    if(respuesta){
      eliminarPaciente(paciente.id);
    }

    
  }
  return (
    <div>
        <button 
            type='button'
            className='py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold rounded-md uppercase'
            onClick={() => handleEliminarPaciente(paciente.id)}
            >
            Eliminar
        </button>
    </div>
  )
}

export default RemoveButton
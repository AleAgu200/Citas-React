import React from 'react'

const EditButton = ({paciente,setPaciente}) => {
  return (
    <div>
        <button
            type="button"
            className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-md uppercase'
            onClick={() => setPaciente(paciente)}

        >
            Editar
        </button>

    </div>
  )
}

export default EditButton
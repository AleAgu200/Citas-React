import React from 'react'
import Paciente from './Paciente'

export default function ListadoPacientes({pacientes, setPaciente,eliminarPaciente}) {




  return (
    <div className='md:w-1/2 lg: w-3/5 md:h-screen overflow-y-scroll'>
      {pacientes&&pacientes.length?(
        <>
          <h2 className='font-black text-3xl text-center ' >ListadoPacientes</h2>
          <p className='text-xl my-5 text-center'>
            Administra tus {' '}
            <span className='text-indigo-600 font-bold'>
              Pacientes y Citas
            </span>
          </p>     

          {pacientes.map(paciente => (
            <Paciente 

              key={paciente.id}
              paciente = {paciente}
              setPaciente = {setPaciente}
              eliminarPaciente = {eliminarPaciente}
            />
          ))}
        </>
      ):(
        <>
          <h2 className='font-black text-3xl text-center ' >ListadoPacientes</h2>
          <p className='text-xl my-5 text-center'>
            No hay ningun {' '}
            <span className='text-indigo-600 font-bold'>
              Paciente
            </span>
          </p> 
        </>
      )}
      
    </div>
  )
}

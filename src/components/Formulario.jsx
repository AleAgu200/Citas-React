import { useState, useEffect } from "react";
import AlertaFormulario from "./AlertaFormulario";

export default function Formulario({pacientes,setPacientes,paciente,setPaciente}) {
  

  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [error, setError] = useState(false);

  const generarid = () => {
    const fecha = Date.now().toString(36);
    const random = Math.random().toString(36).substring(2);
    const id = random + fecha;
    return id;
  };

  useEffect(() => {
    if(Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);
  const handleSubmit = (e) => {
    e.preventDefault();
    //validar
    if([nombre, propietario, email, fecha, sintomas].some(v => v === '')){
      setError(true);
    }
    


    if(paciente.id){
      const nuevosPacientes = pacientes.map(p => p.id === paciente.id ? {...p, nombre, propietario, email, fecha, sintomas} : p);
      setPacientes(nuevosPacientes);
      setPaciente({})
    }else{
      setPacientes([...pacientes, {
        nombre,
        propietario,
        email,
        fecha,
        sintomas,
        id : generarid()
      }]);
    }

    setError(false);
    setNombre('');
    setPropietario('');
    setEmail('');
    setFecha('');
    setSintomas('');
    paciente = {};

  }

 



  return (
    <>
      <div className="md:w-1/2 lg:w-2/5">
        <h2 className="font-black text-3xl text-center">
          Seguimiento Pacientes
        </h2>
        <p className='text-lg mt-5 text-center mb-5'>
          Agrega Pacientes y {' '}
          <span className="text-indigo-600 font-bold ">Administralos</span>
        </p>
        <form action="" className="bg-white shadow-md py-10 px-5 rounded-md mx-5"
        onSubmit={handleSubmit}>
          {error&&<AlertaFormulario/>}
          <div className='mb-4'>
            <label className='block text-gray-700 uppercase font-bold' htmlFor="nombre">Nombre Mascota</label>
            <input value={nombre}
             className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' placeholder='nombre de la mascota' type="text" name="nombre" id="nombre" onChange={(e)=>setNombre(e.target.value)}/>
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 uppercase font-bold' htmlFor="propietario">Nombre propietario</label>
            <input className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' placeholder='Nombre del Propietario' type="text" name="propietario" id="propietario" value={propietario} onChange={(e)=>setPropietario(e.target.value)} />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 uppercase font-bold' htmlFor="email">Email contacto propietario</label>
            <input className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' placeholder='aaaa@gmail.com' type="email" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 uppercase font-bold' htmlFor="alta">Alta</label>
            <input className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' placeholder='aaaa@gmail.com' type="date" name="alta" id="alta" value={fecha} onChange={(e)=>setFecha(e.target.value)} />
      
          </div>
          <div className='mb-4 flex flex-col '  >
            <label className='block text-gray-700 uppercase font-bold' htmlFor="sintomas">Sintomas del paciente</label>
           <textarea className='border-2 w-full my-2 placeholder-gray-400 rounded-md' name="Sintomas" id="sintomas" value={sintomas} placeholder='Describe los sintomas del paciente'onChange={(e)=>setSintomas(e.target.value)}  ></textarea>
           <input type="submit" className='self-center bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-indigo-800 cursor-pointer transition-colors' value={paciente.id?'Editar paciente': 'Agregar Paciente'} />
      
          </div>
        </form>
      </div>
    </>
  )
}

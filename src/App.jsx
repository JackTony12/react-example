import './App.css'
import {useState} from "react"
import {AiFillHeart} from "react-icons/ai"
import {Contenido} from "./contenidoLogin"



function App() {
  const [login, setLogin] = useState(true);
   const [aniversario, setAniversario] = useState('');

 function handleSubmit(e){
   e.preventDefault()
   if(aniversario === "22 diciembre"){
    setLogin(false)
   }else{
    alert("Ups inentelo de nuevo mi amor")
   }
   setAniversario('')
 }



  return (
    <>
      <div className={login ? "contenedor-formulario": "undefined"}>
    {login ? (
      <form onSubmit={handleSubmit} className='formulario'>
    <label htmlFor="" >Contraseña <br />nuestro aniversario</label>
    <input onChange={((e)=>{setAniversario(e.target.value)})} value={aniversario} name='aniversario' required type="text" placeholder='Ejemplo: 15 febrero'/>
    <button type='submit'>Verificar <AiFillHeart/></button>
    </form>
    ):(
      <Contenido/>
      )}

</div>
    </>
    )
  }

export default App

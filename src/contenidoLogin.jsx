import React from 'react'
import imagen01 from './imagenes/imagen01.jpeg'
import imagen02 from "./imagenes/imagen02.jpeg"
import video01 from './videos/video01.mp4'
import { AiFillAccountBook, AiFillHeart } from 'react-icons/ai'
import {useState} from 'react'


export function Contenido() {
const [amor,setAmor] = useState(10000)
const [corazon,setCorazon] = useState(false)


function handleClick(){
  setAmor(amor+10000)
  setCorazon(!corazon)
}
  return (
    <div className='contenedor-principal'>
      <section>
        <article >
          <p>A & D</p>
          <h3>LA AMO MUCHO MI AMOR</h3>
          <figure>
            <div className='contenedor-imagenes01'>
            <img src={imagen01} alt="MI amor" />
            <p>
            Me encanta pasar tiempo con ud, ya que las emociones que experimento son tan maravillosas que me transportan a otro mundo. <AiFillHeart/>
            </p>
            </div>
          </figure>
        </article>
        <article>
        
          <figure>
            <div className='contenedor-imagenes01'>
            <img src={imagen02} alt="MI amor" />
            <p>
              Que cada vez que me mira puedo sentir ese gran amor tan puro y sincero en su mirada que me enamora cada dia mas
            </p>
            </div>
          </figure>
        </article>
        <article >
          <figure className='video-contenedor'>
            <video className='video01' autoPlay loop muted src={video01}></video>
          <p className='video-texto'> En cada abrazo siento la calidez de nuestro amor. 
          Eres la razón de mis sueños y la melodía en mis pensamientos. Cada momento a su lado es un regalo precioso que atesoro con mucho valor. No puedo imaginar mi vida sin ud mi amor, porque en ud he encontrado todo lo que siempre he deseado. </p>
        <div className='contador'><br /><br /><br />
              <p>Mi Yohana Deilyn</p>
            <p>Te amo {amor} veces</p>
            <span><AiFillHeart className={corazon ? 'corazoncito' : 'no-corazoncito' }/></span>
            <button onClick={handleClick}><AiFillHeart/></button>
        </div>
          </figure>
        </article>
      </section>


    </div>
  )
}


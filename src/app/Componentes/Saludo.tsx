import React from 'react'
interface Props{
    nombre:string|number,
}

export const Saludo = (props:Props) => {
  return (
    <div>Saludo {props.nombre} </div>
  )
}

import React from "react"
import Item from "./Item"

export const ItemList = ({productos}) => {
  return (
    <section>
      {productos.map((producto)=>{
        return <Item producto={producto}/>
      })}
    </section>
  )
}

export default ItemList
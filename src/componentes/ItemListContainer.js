import { useState, useEffect } from "react"
import ItemCount from "./ItemCount"
import ItemList from "./ItemList"

const onAdd = ()=>{
    console.log("Agregado al carrito")
}


let productos = [
    {
        nombre: "Obsesionario - Tan bionica",
        img: "/imagenes/obsesionario.jpg",
        disco: "Obsesionario",
        artista: "Tan bionica",
        precio: 1200
    }
]





const productosPromise = new Promise((res,rej)=>{

    setTimeout(() => {

        res(productos)
    }, 2000);


})




export const ItemListContainer = ({greeting}) => {
   
    const[productos, setProductos]= useState([])

    useEffect(()=>{
        productosPromise
        .then((data)=>setProductos(data))
        .catch((err)=> console.log(err))
    })

   
   
   
    return (
        <div>
            <section>
                <h2>
                    {greeting}
                </h2>
                <ItemList productos={productos}/>
            </section>
        
            <ItemCount initial={1} stock={5} onAdd={onAdd}/>

        </div>
    )
}





export default ItemListContainer

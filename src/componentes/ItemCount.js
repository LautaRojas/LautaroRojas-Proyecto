import {useState} from "react"



const ItemCount = ({stock, initial, onAdd}) => {
  
    const [contador, setContador] = useState(initial)
    
    

    


    


    let sumar = () => {
        setContador(contador + 1 ) 
        
    }

    

    let restar = () => {
        setContador(contador - 1)
        
    }
    
    const agregar = () => {
        setContador(onAdd)
        
    }
    
    if (contador === 1){restar = null}
    if (contador === stock){sumar = null}
    
  
  
    return (
     
    <div>
        <p>Contador : {contador}</p>
        <button onClick={sumar}>sumar</button>
        <button onClick={restar}>restar</button>
        <button onClick={agregar}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount
import ItemCount from "./ItemCount"

const onAdd = ()=>{
    console.log("Agregado al carrito")
}

const ItemListContainer = (props) => {
    return (
        <div>
            <p>{props.container}</p>
            <ItemCount initial={1} stock={5} onAdd={onAdd}/>

        </div>
    )
}

export default ItemListContainer

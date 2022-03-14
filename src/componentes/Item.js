
const Item = ({producto}) => {
  return (
    <article>
      <h2>{producto.nombre}</h2>
      <div>
        <img src={producto.img}/>
      </div>  
      <div>
        <p>Disco: {producto.disco}</p>
        <p>Artista: {producto.artista}</p>
        <p>{producto.precio}$</p>
      </div>  
    </article>
  )
}

export default Item
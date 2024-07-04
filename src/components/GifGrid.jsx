import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category, index}) => {
  
  const { images, isLoading } = useFetchGifs(category);
  
  const handleToggle = (index) => {
    const h3Clickeado = document.getElementById(index);
    h3Clickeado.classList.toggle('card-hidden');
  
  }
  
  return (
    <div className="card-container">
      <h3 onClick={() => {handleToggle(index)}}>{category}</h3>
      {
        isLoading && (<h2>Cargando...</h2>)
      }
      {
        <div className="card-grid" id={index}>
        {
          images.map(( {id, title, url} ) => (            
            <GifItem 
              key={id}
              title={title}
              url={url}
            />
          ))
        };
      </div>
      }
    </div>
  )
}

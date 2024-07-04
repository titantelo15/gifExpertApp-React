import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  
  const [categories, setCategories] = useState([]);
  
  const onAddCategory = (inputValue) => {
    // Convierto las categorias a minúscula para corroborar si existe la que se quiere ingresar.
    const lowerCategories = categories.map(element => {
      return element.toLowerCase();
    })

    !(lowerCategories.includes(inputValue.toLowerCase())) && setCategories([inputValue, ...categories]);
    }
  
  
  return (
    <>
      {/* Título */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory 
        // setCategories={setCategories}
        onNewCategory={inputValue => onAddCategory(inputValue)}
        />

      {/* Listado de Gifs */}
      
      {
      categories.map((category, index) => (
        < GifGrid 
          index={index}
          key={category} 
          category={category} /> ))
      }
      {/* Gif Item */}
    </>

  )
}

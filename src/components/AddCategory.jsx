import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {
  
  const [inputValue, setInputValue] = useState('');
  
  const onInputChange = (event) => {
    setInputValue(event.target.value);
  }
  
  const onSubmit = (event) => {
    event.preventDefault();
    // ((inputValue.trim().length) >= 1) && setCategories(categories => [inputValue, ...categories]);
    ((inputValue.trim().length) >= 1) && onNewCategory(inputValue.trim());
    // Chequeo que haya más de un caracter ingresado en el formulario
    setInputValue(''); // Limpio el formulario
    
  }

  return (
    <form onSubmit={ (event) => onSubmit(event)}>
      <input 
        className="input"
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={(event) => onInputChange(event)}
      />
      <button>Agregar</button>
    </form>
  )
}

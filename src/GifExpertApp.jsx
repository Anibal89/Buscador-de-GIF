import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "DragonBall"]);

  const onAddCategory = () => {
    setCategories(["valorant", ...categories]);
  };

  console.log(categories);
  return (
    <>
      {/* Titulo */}
      <h2>Buscador de Gifs</h2>

      {/* Input */}
      <AddCategory setCategories={setCategories} />

      {/* Listado de Gif */}
      <button onClick={onAddCategory}>Agregar</button>
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>

      {/* Gif Item */}
    </>
  );
};

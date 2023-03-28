import MyContext from "../components/MyContext";
import { useContext } from "react";

export default function Favoritos() {
  const { data } = useContext(MyContext)

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="galeria grid-columns-5 p-3">
        {data.filter((foto) => foto.liked).map((fotos) => (
          <div
            key={fotos.id}
            className='foto'
            style={{ backgroundImage: `url(${fotos.src.tiny})` }} >
          </div>
        ))}
      </div>
    </div>
  )
}

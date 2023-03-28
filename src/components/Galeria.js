import { useContext } from "react";
import "../assets/css/galeria.css";
import Heart from "./Heart";
import MyContext from "./MyContext";

export default function Home() {

  const { data, setData } = useContext(MyContext)

  const displayFav = (id) => {
    const index = data.findIndex((foto) => foto.id === id);
    if (data[index].liked === true) {
      data[index].liked = false;
    } else {
      data[index].liked = true;
    }
    setData([...data]);
  };

  return (
    <div className="galeria grid-columns-5 p-3">
      {data.map(fotos => (
        <div
          key={fotos.id}
          className='foto'
          style={{ backgroundImage: `url(${fotos.src.tiny})` }}>
          <Heart
            filled={(fotos.liked)}
            onClick={() => displayFav(fotos.id)} />
          <p>{fotos.alt}</p>
        </div>
      ))}
    </div>
  );
}

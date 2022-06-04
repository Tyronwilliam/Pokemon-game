import "./App.css";
import { useEffect, useState } from "react";
import Logo from "./assets/logo.png";
import backCard from "./assets/fond-carte.jpg";
import pokeJson from "./json/pokeApi.json";
import BigCard from "./components/bigCard";
import LittleCard from "./components/littleCard";
function App() {
  const [compteur, setCompteur] = useState(15);
  const [pokemon, setPokemon] = useState([]);
  const [pokePerSec, setPokePerSec] = useState([]);
  const [start, setStart] = useState(false);
  const [stop, setStop] = useState(false);
  const [myDraw, setMyDraw] = useState([]);
  const [disabled, setDisabled] = useState(true);
  let timer;
  // Si on appuie sur le bouton start alors le melange commence et le compteur demarre
  if (start === true) {
    timer =
      compteur > 0 &&
      setTimeout(() => {
        setCompteur(compteur - 1);
      }, 1000);
  }
  const handleDrawCard = () => {
    // 1. Copie du state
    const myDrawCopy = [...myDraw];
    //  2. Manip de la copie du state et vérification des doublons
    let same = myDraw.some((item) => item.id === pokePerSec.id);
    if (same === true) {
      // on relance la roulette
      setPokePerSec(pokemon[Math.floor(Math.random() * pokemon.length)]);
    } else {
      myDrawCopy.push(pokePerSec);
    }
    //  3. Update du state avec le setter
    setMyDraw(myDrawCopy);
  };

  // Afficher un pokemon de base
  useEffect(() => {
    setPokemon(pokeJson.pokemons);
    setPokePerSec(
      pokeJson.pokemons[Math.floor(Math.random() * pokemon.length)]
    );
  }, [pokemon]);
  // On affiche dynamiquement le changement de nombre et de pokemon
  useEffect(() => {
    setPokePerSec(pokemon[Math.floor(Math.random() * pokemon.length)]);

    return () => {
      clearTimeout(timer);
    };
  }, [compteur]);
  // Si le compteur est egale à O tire uen carte
  const autoCard = () => {
    setStart(false);
    setCompteur(15);
    handleDrawCard();
  };
  // Gestion des buttons
  const handleStop = () => {
    handleDrawCard();
    setStop(true);
    setStart(false);
    setDisabled(true);
  };
  const handleStart = () => {
    setStart(true);
    setDisabled(false);

    setCompteur(15);
  };

  return (
    <div className="background">
      {/* Alerte temps écoulé carte tiré au hasard */}
      {compteur === 0 ? autoCard() : null}
      {/* Render the card Draw */}
      <div className="container_too">
        <p className="number">1</p>

        <div className="white-border">
          <div className="container_in_white"></div>

          {myDraw.length > 0 ? (
            <LittleCard
              name={myDraw[0]?.name}
              level={myDraw[0].level}
              bg={myDraw[0].background_color}
              image={myDraw[0]?.image}
              ability={myDraw[0]?.abilities}
            />
          ) : null}
        </div>
        <p className="number">2</p>

        <div className="white-border">
          <div className="container_in_white"></div>

          {myDraw.length > 1 ? (
            <LittleCard
              name={myDraw[1]?.name}
              level={myDraw[1].level}
              bg={myDraw[1].background_color}
              image={myDraw[1]?.image}
              ability={myDraw[1]?.abilities}
            />
          ) : null}
        </div>
        <p className="number">3</p>

        <div className="white-border">
          <div className="container_in_white"></div>

          {myDraw.length > 2 ? (
            <LittleCard
              name={myDraw[2]?.name}
              level={myDraw[2].level}
              bg={myDraw[2].background_color}
              image={myDraw[2]?.image}
              ability={myDraw[2]?.abilities}
            />
          ) : null}
        </div>
      </div>
      {/* Container N°2 */}
      <div className="container_two">
        <img src={Logo} alt="Logo Pokemon" className="logo" />
        {/* Container Carte Pokemon */}
        <BigCard
          name={pokePerSec?.name}
          level={pokePerSec?.level}
          bg={pokePerSec?.background_color}
          image={pokePerSec?.image}
          ability={pokePerSec?.abilities}
        />

        <button className="button" onClick={handleStart}>
          Lancer
        </button>
        {/*  */}
        <button className="button1" disabled={disabled} onClick={handleStop}>
          Stop ({compteur}sec)
        </button>
      </div>
      {/* Container N°3 */}
      <div className="container_too">
        <p className="number">4</p>

        <div className="white-border">
          <div className="container_in_white"></div>

          {myDraw.length > 3 ? (
            <LittleCard
              name={myDraw[3]?.name}
              level={myDraw[3].level}
              bg={myDraw[3].background_color}
              image={myDraw[3]?.image}
              ability={myDraw[3]?.abilities}
            />
          ) : null}
        </div>
        <p className="number">5</p>

        <div className="white-border">
          <div className="container_in_white"></div>

          {myDraw.length > 4 ? (
            <LittleCard
              name={myDraw[4]?.name}
              level={myDraw[4].level}
              bg={myDraw[4].background_color}
              image={myDraw[4]?.image}
              ability={myDraw[4]?.abilities}
            />
          ) : null}
        </div>
        <p className="number">6</p>

        <div className="white-border">
          <div className="container_in_white"></div>

          {myDraw.length > 5 ? (
            <LittleCard
              name={myDraw[5]?.name}
              level={myDraw[5].level}
              bg={myDraw[5].background_color}
              image={myDraw[5]?.image}
              ability={myDraw[5]?.abilities}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;

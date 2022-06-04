import React from "react";
import backCard from "../assets/fond-carte.jpg";

const LittleCard = (props) => {
  return (
    <div
      className="carte-pokemon"
      style={{
        backgroundColor: props.bg,
      }}
    >
      {/* Nom et lvl  */}
      <div className="name_level">
        <p>{props.name}</p>
        <div>
          <p>Niv.</p>
          <p>{props.level}</p>
          <p>{props.ability.icon}</p>
        </div>
      </div>
      {/* image pokemon  */}
      <div className="small_image_pokemon">
        <img src={backCard} alt="Fond carte Pokemon" className="bg-fond" />
        <img src={props.image} alt=" pokemon" className="img-pokemon" />
      </div>
      {/* attack du pokemon x2 */}
      <div className="container_small_ability">
        {props.ability?.map((element) => {
          return (
            <>
              <div className="ability">
                <div>
                  <p>{element.icon}</p>
                  <p>{element.name}</p>
                </div>
                <p>{element.power}</p>
              </div>
              <p className="desc">{element.description}</p>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default LittleCard;

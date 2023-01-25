import React from "react";
import "./AllCharacters.scss";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";

function AllCharacters({ all, numPage, prevPage, nextPage }) {

  
  return (
    <div>
    <div className="header">
    <NavBar  />
    </div>
      <ul>
        {all.map((item, id) => (
          <li className="personaje" key={id}>
            <Link className="links" to={`/card/${item.id}`}>
              <h2>
                {item.id} - {item.name}
              </h2>
            </Link>
          </li>
        ))}
      </ul>
      <div className="divButtons">
      <button className={numPage > 1 ? 'button' : 'none'} onClick={prevPage}>
      PREVIOUS
    </button>
        <button className="button" onClick={nextPage}>
          NEXT
        </button>
      </div>
    </div>
  );
}

export default AllCharacters;

import React, { useState } from "react"
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

// Habiendo obtenido los personajes, debe haber la misma cantidad de cards segun los personajes (iran por id)

export const Cards = ({ id, name, character, type, planet }) => {
    // store variables, dispatch funciones
    const {store, dispatch}= useGlobalReducer()
    //Voy a coger "algo" de favs del store (en este caso)   ve por cada índice y coge lo que coincida
    const isInFavorites = store.favs.some(fav => fav.name === name)

    const handleTogglefav = () => {

        const item = type === "characters" ? character : planet;
        
        if (isInFavorites) {
            //                             estamos usando una clave y le estamos dando un valor
            dispatch({type: "eliminateFav", payload:{name:name}})
        }else {
            dispatch({type: "addFavs", payload:{...item, itemType:type, id:id}})
        }



    }

    return (
        <div className="mx-4" >
            <div className="card" style={{ width: "18rem" }}>
                <img src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/${type}/${id}.jpg`} className="card-img-top" alt="..." />
                <div className="card-body" style={{ padding: "15px" }} >
                    <h5 className="card-title"> {name} </h5>
                    <div className="d-flex justify-content-between"style = {{marginTop: "15px"}}  >
                        <Link to={`/learnmore/${type}/${id}`}>
                            <button className="btn btn-primary">Go somewhere</button>
                        </Link>
                        <button className="btn btn-warning"
                        onClick={handleTogglefav}>
                            <i
                                className={isInFavorites ? "fa-solid fa-heart" : "fa-solid fa-heart-crack"}>
                            </i>
                        </button>

                    </div>

                </div>
            </div>
        </div>
    )
}

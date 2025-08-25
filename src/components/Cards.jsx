import React, { useState } from "react"
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

// Habiendo obtenido los personajes, debe haber la misma cantidad de cards segun los personajes (iran por id)

export const Cards = ({ id, name, url, type }) => {
    const {store, dispatch}= useGlobalReducer()
    
    const [icon, setIcon] = useState(true)

    const handleClick = () => {
        setIcon(!icon)
    }
    const handleFavs = (name) => {
        dispatch ({
            "type": "addFavs", payload: name
        })
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
                        <button className="btn btn-warning">
                            <i
                                id="icon"
                                className={icon ? "fa-solid fa-heart-crack" : "fa-solid fa-heart"}
                                onClick={() => {
                                    handleClick();
                                    handleFavs(name);
                                }}
                            >
                            </i>
                        </button>

                    </div>

                </div>
            </div>
        </div>
    )
}

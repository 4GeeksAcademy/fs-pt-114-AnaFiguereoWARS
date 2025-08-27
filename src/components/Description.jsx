import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const Description = () => {
    const { type, id } = useParams();
    const [description, setDescription] = useState(null);

    useEffect(() => {
        const url = "https://www.swapi.tech/api";
        const details = async () => {
            try {
                const urlfinal = type === "characters" ? "people" : "planets";
                const response = await fetch(`${url}/${urlfinal}/${id}`);
                const data = await response.json();
                console.log(data);
                setDescription(data.result.properties);
            } catch (error) {
                console.log("Error fetching the API", error);
            }
        };
        details();
    }, [type, id]);

    if (!description) {
        return (
            <div>
                <div className="d-flex justify-content-center">
                <img src="https://media.tenor.com/Ei4PL-xdHwQAAAAM/baby-yoda-grogu.gif" />
            </div>
             <p className="d-flex justify-content-center">Loading...</p>
            </div>
        )

    }

    return (
        <div className="card mb-3" style={{ maxwidth: "540px" }}>
            <div className="row g-0">
                <div className="col-md-4" style={{ width: "23rem" }}>
                    <img src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/${type}/${id}.jpg`} className="card-img-top" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{description.name}</h5>
                        <div>
                            {/* Esto no es muy bonito, pero en sí, esta api tampoco, lo siento Javi :( */}
                            <p className="card-text">{description.created}</p>
                            <p className="card-text">{description.edited}</p>
                            <p className="card-text">{description.gender}</p>
                            <p className="card-text">{description.skin_color}</p>
                            <p className="card-text">{description.hair_color}</p>
                            <p className="card-text">{description.height}</p>
                            <p className="card-text">{description.eye_color}</p>
                            <p className="card-text">{description.mass}</p>
                            <p className="card-text">{description.birth_year}</p>
                            <p className="card-text">{description.climate} </p>
                            <p className="card-text">{description.surface_water} </p>
                            <p className="card-text">{description.name} </p>
                            <p className="card-text">{description.diameter} </p>
                            <p className="card-text">{description.rotation_period} </p>
                            <p className="card-text">{description.terrain} </p>
                            <p className="card-text">{description.gravity} </p>
                            <p className="card-text">{description.orbital_period} </p>
                            <p className="card-text">{description.population} </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

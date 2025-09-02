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
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ducimus laudantium doloremque alias ullam molestias, consectetur qui tempore obcaecati libero deserunt quos sunt ipsam itaque perspiciatis minus labore dolorum perferendis.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eum enim minus et minima consequatur nihil repellat praesentium eligendi voluptatibus, fugit rerum ut, quasi possimus nisi, temporibus incidunt. Consectetur, ut.
                                Eveniet cupiditate sapiente laborum, animi vitae ex aspernatur, similique, ducimus fugiat minus minima ut dolor rem. Suscipit rerum illum, ullam delectus exercitationem maxime harum! Unde blanditiis hic suscipit officiis nemo?
                                Unde itaque maxime pariatur odio alias possimus repudiandae, expedita quia suscipit? Quasi quae labore adipisci cupiditate dolorem illum eos molestias nihil eveniet, animi sapiente quidem delectus dolor sequi rerum in.
                                Ducimus hic aliquid aperiam perferendis minima recusandae sapiente ullam numquam, in consectetur quia, quas velit fugiat tempora fuga? Earum nam quam similique optio alias eaque provident aliquam eius amet rem.
                                Iusto nobis dignissimos doloribus quos consequuntur perspiciatis, atque, obcaecati repellendus ex, ea facere maxime officiis incidunt provident! Voluptatibus dolor corrupti, nobis excepturi reprehenderit corporis non maiores illo, praesentium, inventore iusto.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card-footer"  >
                    <small className="text-body-secondary">
                        <div className = "d-flex justify-content-between">
                            {/* Esto no es muy bonito, pero en sí, esta api tampoco, lo siento Javi :( */}
                            <p className="card-text">Created <br></br> {description.created}</p>
                            <p className="card-text">Edited <br></br>{description.edited}</p>
                            <p className="card-text">Gender <br></br>{description.gender}</p>
                            <p className="card-text">Skin color <br></br>{description.skin_color}</p>
                            <p className="card-text">Hair color <br></br>{description.hair_color}</p>
                            <p className="card-text">Height <br></br>{description.height}</p>
                            <p className="card-text">Eye color <br></br>{description.eye_color}</p>
                            <p className="card-text">Mass <br></br>{description.mass}</p>
                            <p className="card-text">Birth year <br></br>{description.birth_year}</p>
                            <p className="card-text">Climate <br></br>{description.climate} </p>
                            <p className="card-text">Surface water <br></br>{description.surface_water} </p>
                            <p className="card-text">Diameter <br></br>{description.diameter} </p>
                            <p className="card-text">Rotation period <br></br>{description.rotation_period} </p>
                            <p className="card-text">Terrain <br></br>{description.terrain} </p>
                            <p className="card-text">Gravity <br></br>{description.gravity} </p>
                            <p className="card-text">Orbital period <br></br>{description.orbital_period} </p>
                            <p className="card-text">Population <br></br>{description.population} </p>
                        </div>
                    </small>
                </div>
            </div>
        </div>
    )
}

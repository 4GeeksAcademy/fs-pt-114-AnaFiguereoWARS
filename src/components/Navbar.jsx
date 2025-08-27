import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

// para obtener información de store, debemos importar su funcion useglobal reducer y el nombre store ahí abajo que se encuentra en hook
export const Navbar = () => {
	const { dispatch, store } = useGlobalReducer()
	const handleeliminatefavs = (favName) => {
		dispatch({
			"type": "eliminateFav", payload: favName
		})
	};
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<img style={{ width: "80px", height: "80px" }} src="https://img.icons8.com/ios7/600/star-wars.png" />
				</Link>
				<div className="ml-auto">
						<div className="btn-group">
							<button
								type="button"
								className="btn btn-primary dropdown-toggle"
								data-bs-toggle="dropdown"
								aria-expanded="false">Favorites
								<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">

									<span className="visually-hidden">favorites</span>
								</span>
							</button>
							<ul className="dropdown-menu">
								{store.favs.map((fav, index) => (
									<li key={index} >
										{fav.name}
										<button onClick={() => handleeliminatefavs(fav)}>
											x
										</button>
									</li>
								))}
							</ul>
						</div>
				</div>
			</div>
		</nav >
	);
};
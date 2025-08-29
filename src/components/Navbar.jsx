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
							aria-expanded="false"
							data-bs-auto-close="false">Favorites
							<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
								<span>{store.favs.length}</span>
							</span>
						</button>
						<ul className="dropdown-menu">
							{store.favs.map((fav, index) => (
								<li key={index} >
									<div className="d-flex justify-content-between" style={{ padding: "5px" }}>
										<Link
											to={`/learnmore/${fav.itemType}/${fav.id}`}
											style={{ textDecoration: "none", color: "black" }}>
											{fav.name}
										</Link>
										<button
										onClick={() => handleeliminatefavs(fav)} >x</button>
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</nav >
	);
};
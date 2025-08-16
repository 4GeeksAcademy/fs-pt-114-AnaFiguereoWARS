import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<img style={{ width: "80px", height: "80px" }} src="https://img.icons8.com/ios7/600/star-wars.png" />
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button type="button" class="btn btn-primary position-relative">
							Favorites
							<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
								99+
								<span class="visually-hidden">unread messages</span>
							</span>
						</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
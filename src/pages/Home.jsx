
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Cards } from "../components/Cards.jsx";
import { useEffect } from "react";

export const Home = () => {
	const url = "https://www.swapi.tech/api"
	const { store, dispatch } = useGlobalReducer()

	const getCharacters = async () => {
		const response = await fetch(url + "/people")
		if (!response.ok) {
			return ("Characters not found")
		}
		const data = await response.json()
		// aqui pasamos la información de store
		dispatch({
			type: "addCharacter", payload: data.results
		})
	}

	const getPlanets = async () => {
		const response = await fetch(url + "/planets")
		if (!response.ok) {
			return ("Planets not found")
		}
		const data = await response.json()
		dispatch({
			type: "addPlanets", payload: data.results
		})

	}

	useEffect(() => {
		getCharacters()
		getPlanets()
	}, [])

	console.log(store.planets)
	return (
		<>
			<div className="d-row  m-auto">
				<h1 style={{ color: "red", margin: "15px", paddingLeft: "15px" }} >Characters</h1>
				<div className="d-flex justify-content-center ">
					<div className="d-flex w-75 overflow-auto">
						{store.characters.map((character) => (
							<Cards name={character.name} id={character.uid} url={character.url} type={"characters"} />
						))}
					</div>
				</div>

				<h1 style={{ color: "red", margin: "15px", paddingLeft: "15px" }} >Planets</h1>
				<div className="d-flex justify-content-center">
					<div className="d-flex w-75 overflow-auto">
						{store.planets.map((planet) => (
							<Cards name={planet.name} id={planet.uid} url={planet.url} type={"planets"} />
						))}
					</div>
				</div>
			</div>
		</>
	);
};




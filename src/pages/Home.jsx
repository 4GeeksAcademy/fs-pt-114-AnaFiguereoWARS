
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Cards } from "../components/Cards.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<Cards />
	);
}; 
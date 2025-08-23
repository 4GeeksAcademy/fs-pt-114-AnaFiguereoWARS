import {Description} from "../components/Description"
import useGlobalReducer from "../hooks/useGlobalReducer"
import { useParams } from "react-router-dom"   

export const Learnmore = () => {
    const {dispatch, store} = useGlobalReducer()
    

    return (
        <>
            <Description />
        </>
    )
}
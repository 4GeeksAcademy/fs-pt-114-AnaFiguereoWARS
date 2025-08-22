import {Description} from "../components/Description"
import useGlobalReducer from "../hooks/useGlobalReducer"


export const Learnmore = () => {
    const {dispatch, store} = useGlobalReducer()
    return (
        <>
            <Description />
        </>
    )
}
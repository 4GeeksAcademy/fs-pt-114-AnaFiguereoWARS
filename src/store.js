//           informacion inicial de los personajes y planetas de la api
export const initialStore=()=>{
  // el session storage es una memoria que guarda informacion
  const savedFavs = sessionStorage.getItem("likes")

  return{
    characters:[],
    planets:[],
    favs: savedFavs ? JSON.parse(savedFavs): []
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case "addCharacter":
      return{
        ...store, characters:action.payload
      }
    case "addPlanets":
      return{
        ...store, planets:action.payload
      }

    case "addFavs":
      if (store.favs.find(item => item.name === action.payload.name)) {
        return store
      }
      const stateAdd = {
        ...store, 
        favs: [...store.favs, action.payload]
      }
      sessionStorage.setItem("likes", JSON.stringify(stateAdd.favs))
      return stateAdd
    case "eliminateFav":
      const stateRemove = {
        ...store,
        favs: store.favs.filter(item => item.name !== action.payload.name)
      }
      sessionStorage.setItem("likes", JSON.stringify(stateRemove.favs))
      return stateRemove
    default:
      throw Error('Unknown action.');
  }    
}




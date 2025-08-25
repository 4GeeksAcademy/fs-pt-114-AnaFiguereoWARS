//           informacion inicial de los personajes y planetas de la api
export const initialStore=()=>{
  return{
    characters:[],
    planets:[],
    favs:[]
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
      return{
        ...store, favs:[...store.favs,action.payload]
      }
    default:
      throw Error('Unknown action.');
  }    
}




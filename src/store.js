//           informacion inicial de los personajes y planetas de la api
export const initialStore=()=>{
  return{
    characters:[],
    planets:[]
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
    default:
      throw Error('Unknown action.');
  }    
}




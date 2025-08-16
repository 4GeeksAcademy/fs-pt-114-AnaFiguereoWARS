// API
const url = "https://www.swapi.tech/api"

const getCharacters = async () =>{
    const response = await fetch (url + "/people")
    if (!response.ok) {
        return ("Something has gone wrong")
    }
    const data = await response.json()
}

export const Cards = () => {
    return (
        <div className="mx-4" >
            <h1 style={{ color: "red", marginTop: "15px", marginBottom:"15px"}} >
                Characters
            </h1>
            <div className="card" style={{width: "18rem"}}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body" style={{padding:"15px"}} >
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}
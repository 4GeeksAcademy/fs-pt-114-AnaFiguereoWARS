export const PlanetsCard = ({id,name,url}) => {
    return (
        <div className="mx-4" >
            <div className="card" style={{width: "18rem"}}>
                <img src={`https://raw.githubusercontent.com/vieraboschkova/swapi-gallery/refs/heads/main/docs/static/assets/img/people/${id}.jpg`} className="card-img-top" alt="..." />
                <div className="card-body" style={{padding:"15px"}} >
                    <h5 className="card-title"> {name} </h5>
                    <a href={url} className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}
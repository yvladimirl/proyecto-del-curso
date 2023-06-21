import "./Cripto.css"
import { Link } from "react-router-dom"

const Cripto = ({ id, rank, symbol, name, supply, maxSupply, priceUsd, changePercent24Hr }) => {
    return (
        <div className="cripto">
            <h2>{name}</h2>
            <div className="info">
                <p>
                    <span className="label">Precio: </span>
                    {parseFloat(priceUsd).toFixed(3)}
                </p>
                <p>
                    <span className="label">Simbolo: </span>
                    {symbol}
                </p>
                <p>
                    <span className="label">Ranking: </span>
                    {rank}
                </p>
                <p>
                    <span className="label">Suministro: </span>
                    {parseInt(supply)}
                </p>
                <p>
                    <span className="label">Cambio Porcentual 24 Hrs: </span>
                    <span className={ parseFloat(changePercent24Hr) > 0 ? "positivo" : "negativo"}>
                        {parseFloat(changePercent24Hr).toFixed(2)} %
                    </span>
                </p>
                <p>
                    <span className="label">Max. Suministro: </span>
                    {parseInt(maxSupply)}
                </p>
                <Link to={`/criptomonedas/${id}`}>Ver detalles de la cripto ...</Link>
            </div>            
        </div>
    )
}

export default Cripto

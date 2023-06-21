const CriptoInfo = ({cripto}) => {
    return (
        <div className="info">
            <div className="main-info">
                <span> Ranking: {cripto.rank}</span>
                <h1>{cripto.name}</h1>
                <span className="symbol">{cripto.symbol}</span>
            </div>
            <div className="details">
                <ul>
                    <li className="detail">
                        <span className="label">Precio $us: </span>
                        <span>{parseFloat(cripto.priceUsd).toFixed(3)}</span>
                    </li>
                    <li className="detail">
                        <span className="label">Suministradas: </span>
                        <span>{cripto.supply ? parseInt(cripto.supply) : 0}</span>
                    </li>
                    <li className="detail">
                        <span className="label">Suministro Max.: </span>
                        <span>{cripto.maxSupply ? parseInt(cripto.maxSupply) : 0}</span>
                    </li>
                    <li className="detail">
                        <span className="label">Cambio % cada 24Hrs: </span>
                        <span>{cripto.changePercent24Hr ? parseFloat(cripto.changePercent24Hr).toFixed(2) : 0.00}</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default CriptoInfo
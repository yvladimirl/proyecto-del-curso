import "./Cuadricula.css"
import Cripto from "./cripto/Cripto"
import usePetition from "../hooks/usePetition"

function Cuadricula() {
    const [criptos, cargando] = usePetition("assets")

    if (!criptos) return <span>Cargando ...</span>

    return (
        <div className="app-container">
            <h1>Lista de criptomonedas</h1>
            <div className="cripto-container">
                {criptos.map(({ id, rank, symbol, name, supply, maxSupply, priceUsd, changePercent24Hr }) => (
                    <Cripto
                        key={id}
                        id={id}
                        rank={rank}
                        symbol={symbol}
                        name={name}
                        supply={supply}
                        maxSupply={maxSupply}
                        priceUsd={priceUsd}
                        changePercent24Hr={changePercent24Hr}
                    />
                ))}
            </div>
        </div>
    )
}

export default Cuadricula

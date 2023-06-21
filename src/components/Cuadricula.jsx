import { useEffect, useState } from "react"
import axios from "axios"
import "./Cuadricula.css"
import Cripto from "./cripto/Cripto"

function Cuadricula() {
    const API_URL = import.meta.env.VITE_API_URL

    const [criptos, setCriptos] = useState()

    useEffect(() => {
        axios.get(`${API_URL}assets`)
            .then((data) => {
                setCriptos(data.data.data)
            })
            .catch(() => {
                console.error("La petición falló.")
            })
    }, [])

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

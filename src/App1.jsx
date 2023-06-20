import { useEffect, useState } from "react"
import axios from "axios"
import "./App.css"

function App1() {
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
        <>
            <h1>Lista de criptomonedas</h1>
            <ol>
                {criptos.map(({ id, rank, symbol, name, supply, maxsupply, priceUsd }) => (
                    <li key={id}>
                        <div>Id: {id}</div>
                        <div>Ranking: {rank}</div>
                        <div>Simbolo: {symbol}</div>
                        <div>Nombre: {name}</div>
                        <div>Suministro: {supply}</div>
                        <div>Max. Suministro: {maxsupply}</div>
                        <div>Precio: {priceUsd}</div>
                    </li>
                ))}
            </ol>
        </>
    )
}

export default App1

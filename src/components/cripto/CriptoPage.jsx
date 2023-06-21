import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "./CriptoPage.css"

const CriptoPage = () => {
    const API_URL = import.meta.env.VITE_API_URL
    
    const params = useParams()
    const [cripto, setCripto] = useState({})
    const [history, setHistory] = useState([])

    useEffect(() => {
        axios.get(`${API_URL}assets/${params.id}`)
            .then(data => {
                setCripto(data.data.data)
            })
            .catch(e => console.error(e))

        axios.get(`${API_URL}assets/${params.id}/history?interval=d1`)
            .then(data => {
                setHistory(data.data.data)
            })
            .catch(e => console.error(e))
    }, [])

    return (
        <div className="cripto-page-container">
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
            {/* <span>{JSON.stringify(history)}</span> */}
            <div className="history">
                <table>
                    <thead>
                        <tr>
                            <th>Fecha</th>
                            <th>Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                        {history.map(({ date, priceUsd, time }) => (
                            <tr key={time}>
                                <td className="label">{new Date(date).toDateString()}</td>
                                <td className="price">{parseFloat(priceUsd).toFixed(3)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CriptoPage
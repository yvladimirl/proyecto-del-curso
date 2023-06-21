import { useParams } from "react-router-dom"
import "./CriptoPage.css"
import usePetition from "../../hooks/usePetition"
import CriptoInfo from "./info/CriptoInfo"
import CriptoHistorial from "./info/CriptoHistorial"

const CriptoPage = () => {
    const API_URL = import.meta.env.VITE_API_URL

    const params = useParams()

    const [cripto, cargandoCripto] = usePetition(`assets/${params.id}`)
    const [history, cargandoHistory] = usePetition(`assets/${params.id}/history?interval=d1`)

    if (cargandoCripto || cargandoHistory) return <span>Cargando ...</span>

    return (
        <div className="cripto-page-container">
            {cripto && (<CriptoInfo cripto={cripto} />)}
            {/* <span>{JSON.stringify(history)}</span> */}
            {history && (<CriptoHistorial history={history} />)}
        </div>
    )
}

export default CriptoPage
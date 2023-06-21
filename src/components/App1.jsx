import { Outlet } from "react-router-dom"
import Menu from "./menu/Menu"

const App1 = () => {
    return(
        <>
            <Menu />
            <Outlet />
        </>
    )
}

export default App1
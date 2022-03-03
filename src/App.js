import NavBar from "./componentes/NavBar"
import ItemListContainer from "./componentes/ItemListContainer"
import Footer from "./componentes/Footer"
import Main from "./componentes/Main"

function App() {
    return (
        <>
            <NavBar />
            <ItemListContainer
                container="greeting"
            />
            <Main />
            <Footer />

        </>
    )
}

export default App
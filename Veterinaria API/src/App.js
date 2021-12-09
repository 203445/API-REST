import 'bootstrap/dist/css/bootstrap.min.css';
import Dueños from "./components/Dueño/Dueños";
    import {
        BrowserRouter as Router,
        Route,
        Link, Routes
    } from "react-router-dom";
import Tipo from "./components/Tipo/Tipo";
import Mascota from "./components/Mascotas/Mascota";
import Citas from "./components/Citas/Citas";
import Home from "./Home";


    function App() {

        return (

<>
    <Router>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

            <div className="container">
                <Link class="navbar-brand" to="/">Veterinaria</Link>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link  className="nav-link"  to="/duenos">Dueños</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/mascotas">Mascotas</Link>
                        </li>
                        <li className="nav-item">
                            <Link  className="nav-link" to="/tipo">Tipo</Link>
                        </li>
                        <li className="nav-item">
                            <Link  className="nav-link" to="/cita">Cita</Link>
                        </li>
                    </ul>
                </div>
            </div>

        </nav>

        <Routes>
            <Route  exact path="/" element={<Home/>} ></Route>
            <Route  exact path="/duenos" element={<Dueños/>} ></Route>
            <Route  exact path="/mascotas" element={<Mascota/>} ></Route>
            <Route  exact path="/tipo" element={<Tipo/>} ></Route>
            <Route  exact path="/cita" element={<Citas/>} ></Route>
        </Routes>

    </Router>

</>

        );
}

export default App;

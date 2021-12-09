import '../../index.css';


const Tabla = (props) => {

    return (
        <div>
            <table class="table table-hover" id={"tab"}>
                <thead>
                <tr>
                    <th>Hora</th>
                    <th>Servicio</th>
                    <th>Fecha</th>
                    <th>MascotaId</th>
                    <th>Mascota</th>
                </tr>
                </thead>

                <tbody>

                {props.datos.length === 0 ? <tr><td colSpan="3">Sin datos</td> </tr>: props.datos.map(item =>
                        <tr key={item.citaid}>

                            <td>{item.hora}</td>
                            <td>{item.servicio}</td>
                            <td>{item.fecha}</td>
                            <td>{item.mascotaid}</td>
                            <td>{item.mascota != null ? item.mascota.nombre : "no hay mascota"} </td>


                            <td>
                                <div className={"d-grid gap-2 d-md-flex justify-content-md-end"}>
                                    <button  className={"btn btn-secondary"} onClick={()=> props.setd(item)} >Editar</button>
                                    <button  className={"btn btn-danger"}  onClick={() => props.del(item, item.citaid)}> Eliminar</button>
                                </div>
                            </td>
                        </tr>
                    )
                }
                </tbody>

            </table>
        </div>

    )
}

export default Tabla;

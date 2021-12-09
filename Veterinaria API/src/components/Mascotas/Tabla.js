const Tabla = (props) => {

    return(

        <table class="table table-hover" id={"tab"}>
            <thead>
            <tr>
                <th>MascotaId</th>
                <th>Nombre</th>
                <th>Razón</th>
                <th>Tipo</th>
                <th>Fecha</th>
                <th>DueñoId</th>
                <th>Dueño</th>
                <th></th>

            </tr>
            </thead>
            <tbody>
            {props.masc === [] ? <tr><td colSpan="3">Sin datos</td> </tr>: props.masc.map(item =>

                <tr key={item.mascotaId}>

                    <td>{item.mascotaId}</td>
                    <td>{item.nombre}</td>
                    <td>{item.razon}</td>
                    <td>{item.tipo}</td>
                    <td>{item.fecha}</td>
                    <td>{item.duenoId}</td>
                    <td>{item.dueno != null ? item.dueno.nombre : "Sin dueño"} </td>

                    <td>
                        <div className={"d-grid gap-2 d-md-flex justify-content-md-end"}>
                            <button  className={"btn btn-secondary"} onClick={() => props.setd(item)} >Modificar</button>
                            <button className={"btn btn-danger"} onClick={() => props.del(item , item.mascotaId)} >Eliminar</button>
                        </div>
                    </td>

                </tr>

            )}


            </tbody>
        </table>
    )

}
export default Tabla;
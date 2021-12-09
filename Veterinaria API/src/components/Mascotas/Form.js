import React, {useState,useEffect} from "react";

const valin = {
    nombre: "",
    razon:"",
    tipo:"",
    fecha:"",
    duenoId:null,
    mascotaId:null

}


const urlGet = 'http://localhost:18080/listDuenos'



const Form = (props) => {
    const [formulario,setFormulario]= useState(valin);
    const [duenos,setDuenos] = useState([])


    const get = async ()  => {
        const dato = await fetch(urlGet)
        const mascota =   await dato.json()
        setDuenos(mascota)
    }


    useEffect(() => {

        if (props.edit){
            setFormulario(props.edit)
        }else {
            setFormulario(valin)
        }

    }, [props.edit]);

    const handleChange = (e) => {
        setFormulario({
            ...formulario,[e.target.name]:e.target.value,
        });
        console.log(e.target.value + "   " +  e.target.name)

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formulario.nombre || !formulario.razon ){
            alert("Datos incompletos");
            return;
        }

        if(formulario.mascotaId === null){
            props.addMascota(formulario)
        }
        else{
            console.log(formulario)
            props.updateMascota(formulario)
        }
        handleReset()
    }

    const handleReset = (e) => {
        setFormulario(valin)
        props.setEdit(null)
    }


    return(
        <div>
            <form onSubmit={handleSubmit} className="fr">
                <div className={"d-grid gap-2 d-md-flex justify-content-md-end"}>
                <input  type= "text"  name="nombre" placeholder="Nombre" onChange={handleChange} value={formulario.nombre} />
                <input type= "text"  name="razon" placeholder="Razón" onChange={handleChange} value={formulario.razon}/>
                <input  type= "text"  name="tipo" placeholder="Tipo" onChange={handleChange} value={formulario.tipo}/>
                <input  type= "text"  name="fecha" placeholder="Fecha" onChange={handleChange} value={formulario.fecha}/>
               {/* <input  type= "text"  name="duenoId" placeholder="DueñoID" onChange={handleChange} value={formulario.duenoId}/>*/}


                <select  name="duenoId"  onChange={handleChange} >
                    <option value={0} >Ninguno</option>
                    {duenos.map(item =>
                    <option value={item.duenoId}>{item.nombre}</option>
                    )}
                    <option selected >Dueños</option>
                </select>



                <input className={"btn btn-outline-dark"} type="submit" value="Enviar"/>
                <input className={"btn btn-outline-secondary"}  type="reset" value="Limpiar" onClick={handleReset}/>
                </div>
            </form>





        </div>

    )

}
export default Form;
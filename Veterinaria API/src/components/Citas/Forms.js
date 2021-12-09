import {useEffect, useState} from "react";

const aux = {
    citaid: null,
    hora:"",
    servicio:"",
    fecha:"",
    mascotaid:""
}


const Forms = (props) =>{
    const [formu,setFormu] = useState(aux)

    useEffect(() => {

        if(props.edit){
            setFormu(props.edit)
        }else{
            setFormu(aux)
        }

    },[props.edit])


    const handleChange = (e) =>{
        setFormu({
            ...formu,[e.target.name] : e.target.value,
        });
    }


    const handleSubmit = (e) =>{
        e.preventDefault()

        if(!formu.hora || !formu.servicio){
            alert("Campos vacios")
            return;
        }

        if(formu.citaid === null){
            props.addCita(formu)
        }
        else{
            props.updateCita(formu)
        }
        handleReset()
    }


    const handleReset =  (e) =>{
        setFormu(aux);
        props.setEdit(null)
    }


    return(
        <div>
            <form onSubmit={handleSubmit} className="fr" >
                <div className={"d-grid gap-2 d-md-flex justify-content-md-end"}>
                <input  type= "text"  name="hora" placeholder="Hora" onChange={handleChange} value={formu.hora} />
                <input type= "text"  name="servicio" placeholder="Servicio" onChange={handleChange} value={formu.servicio}/>
                <input  type= "text"  name="fecha" placeholder="Fecha" onChange={handleChange} value={formu.fecha}/>
                <input  type= "text"  name="mascotaid" placeholder="MascotaID" onChange={handleChange} value={formu.mascotaid}/>

                <input className={"btn btn-outline-dark"}  type="submit" value="Enviar" />
                <input className={"btn btn-outline-secondary"} type="reset" value="Limpiar" onClick={handleReset}/>
                </div>
            </form>


        </div>
    )
}

export default Forms;
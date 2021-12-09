import {useEffect, useState} from "react";
import Forms from "./Forms";
import Tabla from "./Tabla";


//const urlGet = 'http://localhost:18080/listDuenos'
const urlGet = 'http://localhost:48080/listCitas'
const urlPostAdd = 'http://localhost:48080/cita/add'
const urlPut = 'http://localhost:48080/cita/update'
const urlDel = 'http://localhost:48080/cita/delete'


const Citas = () => {
    const [datos, setData] = useState([])
    const [edit,setEdit] = useState(null)


    const addCita = (dat) => {
        const peticion = {
            method: 'POST',
            body: JSON.stringify(dat),
            headers: {
                "Content-type": "application/json"
            }
        }
        post(peticion)
    }

    const updateCita = (dat) => {
        const peticion = {
            method: 'PUT',
            body: JSON.stringify(dat),
            headers: {
                "Content-type": "application/json"
            }
        }
        put(peticion)
    }

    const deleteCita = (dat,citaid) => {
        let isDelete = window.confirm(`¿Estás seguro de eliminar la mascota con ID ${citaid} ?`);
        if (isDelete){
        const peticion = {
            method: 'DELETE',
            body: JSON.stringify(dat),
            headers: {
                "Content-type": "application/json"
            }
        }
        del(peticion)
        }
    }


    useEffect(() => {
        get()
    }, []);

    const post = async (peticion)  => {
        const dato = await fetch(urlPostAdd,peticion)
        get()
    }

    const get = async ()  => {
        const dato = await fetch(urlGet)
        const duenos =   await dato.json()
        setData(duenos)
    }

    const put = async (peticion)  => {
        const dato = await fetch(urlPut,peticion)
        get()
    }

    const del = async (peticion)  => {
        const dato = await fetch(urlDel,peticion)
        get()
    }

    return(
        <div>
            <Forms addCita={addCita} updateCita={updateCita}   edit={edit}   setEdit={setEdit} setData={setData} ></Forms>

            <Tabla datos={datos}   setd={setEdit} del={deleteCita}  ></Tabla>

        </div>
    )
}

export default Citas;
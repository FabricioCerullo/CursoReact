import React, {useState}from "react";
import listaProd from "./json/listaProd.json";
import { useEffect } from "react";
import {useParams} from "react-router-dom";


const Producto = () => {
    const [item, setItem] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        const promesa  = new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(listaProd.find(item => item.id === id));
            });
        })
        promesa.then(data => {
            setItem(data);
        })
    }, [id])

    return (
        <div className="container">
            <div className = "row">
                <div className="col-md-6 offset-md-3 text-center">
                        <img src={item.imagen} className={"img-fluid"} alt={item.nombre} />
                        <h1>{item.nombre}</h1>
                        <p>{item.descripcion}</p>
                        <p><b>${item.precio}</b></p>
                        <p className="alert alert-success">{item.stock}</p>
                </div>
            </div>
        </div>
    )

}


export default Producto;
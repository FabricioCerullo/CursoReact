import React, {useState, useEffect} from "react";
import {Link, useParams } from "react-router-dom";
import listaProd from "./json/listaProd.json";

const ProductosGeneral = ()=>{
    const [items, setItems] = useState([]);
    const {idCategoria} = useParams();

     useEffect(()=>{
        const promesa  = new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(idCategoria ? listaProd.filter(item=>item.categoria === idCategoria) : listaProd);
            }, 1000)
        });

        promesa.then((datos)=>{
            setItems(datos);
        })

     }, [idCategoria]);

    return (
        <div className="row">
            {
                items.map(item=>
                    <div className="col-md-3 mb-3" key={item.id}>
                        <div className="card text-center"> 
                            <Link to={/item/ + item.id} className="text decoration-none text-dark">
                                <img src={item.imagen} className="card-img-top" alt={item.nombre} />
                                <div className ="card-body"> 
                                    <p className="card-text">{item.nombre}</p>
                                    <p className="card-text"><b>${item.precio}</b></p>
                                </div>
                            </Link>
                        </div>
                    </div>
                )
            }
        </div>
       
    )
}


export default ProductosGeneral;
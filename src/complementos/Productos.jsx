import React from "react";

const Productos = () => {
    return (
        <div className="m-0 row justify-content-center">
            <div className="col-md-12 d-flex aling-items-center justify-content-center">
                <img src={"images/pizza_pepperoni.jpg"} alt={"pizza pepperoni"} width={"500"}/>
            </div>

            <div className="col-auto justify-content-center">
                <br />
                <h1 className="text-center">Pizza Pepperoni</h1>
                <p className="text-center">La frescura de la salsa y el crocante perfecto de la masa hecha con harina pureza, conforman la combinación ideal de una pizza rica y rendidora.</p>
                <h2 className="text-center">Ingredientes</h2>
                <p className="text-center">Salsa de tomate, muzzarella, chorizo español, aceitunas.</p>
                <h2 className="text-center">Precio</h2>
                <p className="text-center">$1700</p>
            </div>
            
        </div>
       
    )
}

export default Productos;
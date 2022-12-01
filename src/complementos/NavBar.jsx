import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
       <div className="row">
            <div className="col-md-12">
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><a className="navbar-brand" href="#"><img src={"images/logopizza.png"} alt={"logo de pizza"} width={120}></img></a></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Tiendas</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Pizzas</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link disabled">Contacto</a>
                        </li>
                    </ul>
                    </div>
                    <div className="col-md-6 d-flex justify-content-end align-items-center">
                        <CartWidget/>
                    </div>
                </div>
            </nav>
        </div>

    </div>
       
    )
}
   
export default NavBar;
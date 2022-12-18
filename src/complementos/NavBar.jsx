import React from "react";
import CartWidget from "./CartWidget";
import {Link, NavLink} from "react-router-dom";

const NavBar = () => {
    return (
       <div className="row">
            <div className="col-md-12">
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <Link class="navbar-brand" href="#"><img src={"images/logopizza.png"} alt={"logo de pizza"} width={120}></img></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <NavLink className="nav-link" activeclassNamename="page" to={"/"}>Inicio</NavLink>
                        </li>
                        <li class="nav-item">
                        <NavLink className="nav-link" activeclassname="page" to={"/categoria/Pizzas"}>Pizzas</NavLink>
                        </li>
                        <li class="nav-item">
                        <NavLink className="nav-link" activeclassname="page" to={"/categoria/Hamburguesas"}>Hamburguesas</NavLink>
                        </li>
                        <li class="nav-item">
                        <NavLink className="nav-link"activeclassname="page" to={""}>Locales</NavLink>
                        </li>
                        <li class="nav-item">
                        <NavLink className="nav-link" activeclassname="page" to={""}>Contacto</NavLink>
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
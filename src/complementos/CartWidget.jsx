import React from "react";

const CartWidget = () => {
    return(
        <button type="button" class="btn bg-light position-relative">
            <img src={"images/bag.svg"} alt={"Bolsa"} width={32} />
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">5</span>
        </button>
    )
}

export default CartWidget;
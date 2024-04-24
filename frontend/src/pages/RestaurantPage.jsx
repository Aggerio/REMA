import React from "react";
import { useParams } from "react-router-dom";

export default function RestaurantPage(){
    let {id} = useParams();

    return(
        <div>
            <h2>Restauratant ID: {id}</h2>
        </div>
    );
}
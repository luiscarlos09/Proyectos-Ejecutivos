import { Contacto } from "./Contacto";
import { Nosotros } from "./Nosotros";
import { Proyectos } from "./Proyectos";
import { Servicios } from "./Servicios";
import { useState } from "react";

export function Contenido(props){
    
    function mostrar(){
        props.estado(false);
    }
    return (
        <>
            <button onClick={mostrar}>Click</button>
        </>
    )
}
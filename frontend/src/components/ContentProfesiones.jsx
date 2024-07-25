import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ContentProfesiones = ()=>{
    const [profesiones, setprofesiones] = useState([])
    useEffect(()=>{
        const fetchprofesiones = async ()=> {
            try {
                const response = await axios.get('http://localhost:3000/api/getAspirantes')// Api para profesiones
                setprofesiones(response.data)
            } catch (e) {
                console.error('Error fetching profesiones', e)
            }
        }
        fetchprofesiones()
    }, [])
    return (
    <section className="content profesiones">
        <h2 className="mt-3">Profesiones</h2>
        <div className="list-group shadow-sm p-3 mb-5 rounded">
            <h4 className="list-group-item list-group-item-action active text-center"
                aria-current="true">
                Listado de Profesiones
            </h4>
            {profesiones.map(profesion => (
                <button type="button" className="list-group-item list-group-item-action text-center">{profesion.name_profession}</button>
            ))}
        </div>
    </section>
    )
}

export default ContentProfesiones
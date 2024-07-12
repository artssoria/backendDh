import React, { useState, useEffect } from 'react';
import axios from 'axios';
const ContentAspirantes = () => {
    const [aspirantes, setAspirantes] = useState([])
    useEffect(()=>{
        const fetchAspirantes = async ()=> {
            try {
                const response = await axios.get('http://localhost:3000/api/getAspirantes')
                setAspirantes(response.data)
            } catch (e) {
                console.error('Error fetching aspirantes', e)
            }
        }
        fetchAspirantes()
    }, [])

    return (
        <article className="person-boxes">
            {aspirantes.map(aspirante =>(
                <div key={aspirante.dni} className="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
                    <div className="box-avatar">
                        <img src={aspirante.image || "./src/assets/img/foto1.jpg"} alt="aspirante"/>
                    </div>
                    <div className="box-bio">
                        <h2 className="bio-name">{aspirante.first_name} {aspirante.last_name}</h2>
                        <p className="bio-position">{aspirante.name_profession}</p>
                    </div>
                    <div className="box-actions">
                        <button>
                            <i className="bi bi-star"></i>
                        </button>
                        <button>
                            <i className="bi bi-chat"></i>
                        </button>
                        <button>
                            <i className="bi bi-envelope"></i>
                        </button>
                    </div>
                </div>
            ))}
        </article>
    );
}

export default ContentAspirantes
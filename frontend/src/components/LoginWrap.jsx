import React, { useState } from 'react';
import axios from 'axios';

const LoginWrap = ()=>{
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
    const [formData, setFormData]= useState({
        first_name:'',
        last_name:'',
        email:'',
    })
    // Validar los datos del formulario
    const validateForm = () =>{
        const newErrors = {}
        const requiredFields = [
            'first_name', 'last_name', 'email'
        ]
        requiredFields.forEach(field => !formData[field] && (newErrors[field] = `${field.replace('_',' ')} es incorrecto`))

        return newErrors
    }
    // Maneja el envío del formulario
    const handleSubmit = async (e) => {
            e.preventDefault();
    
            const newErrors = validateForm();
            if (Object.keys(newErrors).length > 0) {
                setErrors(newErrors);
                return;
            }
    
            const formDataToSend = new FormData();
            Object.keys(formData).forEach(key => {
                formDataToSend.append(key, formData[key]);
            });
    
            try { /*Cambiar api por la que estamos usando*/
                const response = await axios.post('http://localhost:3000/api/register', formDataToSend, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                setSuccessMessage('¡Registro exitoso!');
                setErrors({});
                setFormData({
                    first_name:'',
                    last_name:'',
                    email:''
                });
            } catch (error) {
                setErrors({ submit: 'Error al logear. Inténtalo de nuevo.' });
            }
    };
    return(
        <section>
            <header className="preventa">
                <h2 className="text-2xl">Logearse</h2>
                <p className="text-center text-lg">Para administrativos, profesionales y técnicos. Gracias por su colaboración</p>
            </header>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" name="nombre" id="nombre" value={formData.first_name} required>{errors.first_name && <p className='text-danger'>{errors.first_name}</p>}</input>
                </div>
                <div>
                    <label htmlFor="apellido">Apellido</label>
                    <input type="text" name="apellido" id="apellido" value={formData.last_name} required>{errors.last_name && <p className='text-danger'>{errors.last_name}</p>}</input>
                </div>
                <div>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" name="email" id="email" value={formData.email} required>{errors.email && <p className='text-danger'>{errors.email}</p>}</input>
                </div>
                
                {errors.submit && <p className="text-danger">{errors.submit}</p>}
                {successMessage && <p className="text-success">{successMessage}</p>}

				<button type="submit" class="btn btn-primary">Iniciar Sesión</button>
            </form>
        </section>
    )
}

export default LoginWrap
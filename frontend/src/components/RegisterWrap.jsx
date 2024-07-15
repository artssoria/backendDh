import React, { useState } from 'react';
import axios from 'axios';

const RegisterWrap = ()=>{
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
    const [formData, setFormData]= useState({
        dni:'',
        first_name:'',
        last_name:'',
        email:'',
        phone_number:'',
        url_linkedin:'',
        birthdate:'',
        sex:'',
        name_profession:'',
        city:'',
        department:'',
        province:'',
        image: null
    })

    // Validar los datos del formulario
    const validateForm = () =>{
        const newErrors = {}
        const requiredFields = [
            'dni', 'first_name', 'last_name', 'email', 'phone_number', 
            'url_linkedin', 'birthdate', 'sex', 'name_profession', 
            'city', 'department', 'province', 'image'
        ]
        requiredFields.forEach(field => !formData[field] && (newErrors[field] = `${field.replace('_',' ')} es requerido`))

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
                dni:'',
                first_name:'',
                last_name:'',
                email:'',
                phone_number:'',
                url_linkedin:'',
                birthdate:'',
                sex:'',
                name_profession:'',
                city:'',
                department:'',
                province:'',
                image: null
            });
        } catch (error) {
            setErrors({ submit: 'Error al registrar. Inténtalo de nuevo.' });
        }
    };

    return(
        <section className="content-wrap col-span-9 row-span-11 px-12 overflow-auto">
            <header className="preventa">
                <h2 className="text-2xl">Registrarse</h2>
                <p className="text-center text-lg">Para administrativos, profesionales y técnicos. Gracias por su colaboración</p>
            </header>
            <form action="" method="POST" class="form-register" enctype="multipart/form-data" onSubmit={handleSubmit}>
            <div>
						<label htmlFor="dni">Dni</label>
                		<input type="text" name="dni" id="dni" value={formData.dni} required>{errors.dni && <p className='text-danger'>{errors.dni}</p>}</input>
					</div>
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
					<div>
						<label htmlFor="telefono">Teléfono</label>
						<input type="text" name="telefono" id="telefono" value={formData.phone_number} required>{errors.phone_number && <p className='text-danger'>{errors.phone_number}</p>}</input>
					</div>
					<div>
						<label htmlFor="perfil">Perfil URL de Linkedin</label>
						<input type="url" name="perfil" id="perfil" value={formData.url_linkedin} required>{errors.url_linkedin && <p className='text-danger'>{errors.url_linkedin}</p>}</input>
					</div>
					<div>
						<label htmlFor="fecha_nac">Fecha de Nacimiento</label>
						<input type="date" name="fecha_nac" id="fecha_nac" value={formData.birthdate} required>{errors.birthdate && <p className='text-danger'>{errors.birthdate}</p>}</input>
					</div>
					<div>
						<label htmlFor="sexo">Sexo</label>
						<select name="sexo" id="sexo" value={formData.birthdate} required>
							<option value="male">Masculino</option>
							<option value="female">Femenino</option>
							<option value="nobi">No Binario</option>
                            {errors.sex && <p className='text-danger'>{errors.sex}</p>}
						</select>

					</div>
					<div>
						<label htmlFor="imagen">Imagen de perfil</label>
						<input class="imagen" type="file" name="imagen" id="image" value={formData.image} required>{errors.image && <p className='text-danger'>{errors.image}</p>}</input>
					</div>
					<div>
						<label htmlFor="profesion">Profesión</label>
						<select name="profesion" id="image" value={formData.name_profession} required>
							<option value="Profesor">Profesor</option>
							<option value="Abogado">Abogado</option>
							<option value="Arquitecto">Arquitecto</option>
							<option value="Botanico">Botánico</option>
							<option value="Computista">Computista</option>
							<option value="Economista">Economista</option>
							<option value="Administrador">Administrador</option>
							<option value="Linguista">Linguista</option>
							<option value="Técnico de sonido">Técnico de sonido</option>
                            {errors.name_profession && <p className='text-danger'>{errors.name_profession}</p>}
						</select>
					</div>
                    <div>
						<label htmlFor="City">City</label>
						<select name="City" id="city" value={formData.city} required>
                            <option value="">Seleccione</option>
                            {cities.map(locations =>(
                                <option key={locations.cca3} value={locations.city}> 
                                    {locations.city}
                                </option>
                            ))}
                        </select>
					</div>
                    <div>
						<label htmlFor="department">Department</label>
                        <select name="department" id="department" value={formData.department} required>
                            <option value="">Seleccione</option>
                        </select>
					</div>
                    <div>
						<label htmlFor="province">Province</label>
                        <select name="province" id="province" value={formData.province} required>
                            <option value="">Seleccione</option>
                        </select>
					</div>

                    {errors.submit && <p className="text-danger">{errors.submit}</p>}
                    {successMessage && <p className="text-success">{successMessage}</p>}

					<button type="submit" class="btn-register">Registrarse</button>
            </form>
        </section>
    )
}
export default RegisterWrap;
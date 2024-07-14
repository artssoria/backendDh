import { useState, useEffect } from "react";
//import applicantsFetching from "../../datafetch/applicantsFetch";

const RegisterForm = () => {

  const [dni, setdni] = useState('');
  const [first_name, setfirst_name] = useState('');
  const [last_name, setlast_name] = useState('');
  const [email, setemail] = useState('');
  const [phone_number, setphone_number] = useState('');
  const [url_linkedin, seturl_linkedin] = useState('');
  const [birthdate, setbirthdate] = useState('');
  const [image, setimage] = useState('');
  const [id_location, setid_location] = useState('');
  const [id_profession, seid_profession] = useState('');



  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:3000/api/aspirantes", { //esta parte es la que envia esctrictamente la información al servidor
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        dni,
        first_name,
        last_name,
        email,
        phone_number,
        url_linkedin,
        birthdate,
        image,
        id_location,
        id_profession
      })

    })

    const data = await res.json(); // Esto sirve para que el servidor me devuelva una respuesta respecto al post que mande
    console.log(data);
  }

  return (

    <form className="mt-5" onSubmit={handleSubmit}>
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-4 mb-3">
            <label>DNI</label>
            <input
              className="w-100 form-control"
              type="number"
              value={dni}
              onChange={(e) => setdni(e.target.value)}
            />
          </div>
          <div className="col-4 mb-3">
            <label>Nombre</label>
            <input
              className="w-100 form-control"
              type="text"
              value={first_name}
              onChange={(e) => setfirst_name(e.target.value)}
            />
          </div>
          <div className="col-4 mb-3">
            <label>Apellido</label>
            <input
              className="w-100 form-control"
              type="text"
              value={last_name}
              onChange={(e) => setlast_name(e.target.value)}
            />
          </div>
          <div className="col-4 mb-3">
            <label>Email</label>
            <input
              className="w-100 form-control"
              type="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <div className="col-4 mb-3">
            <label>N° de telefono</label>
            <input
              className="w-100 form-control"
              type="number"
              value={phone_number}
              onChange={(e) => setphone_number(e.target.value)}
            />
          </div>
          <div className="col-4 mb-3">
            <label>URL de LinkedIn</label>
            <input
              className="w-100 form-control"
              type="url"
              value={url_linkedin}
              onChange={(e) => seturl_linkedin(e.target.value)}
            />
          </div>
          <div className="col-4 mb-3">
            <label>Fecha de Nacimiento</label>
            <input
              className="w-100 form-control"
              type="date"
              value={birthdate}
              onChange={(e) => setbirthdate(e.target.value)}
            />
          </div>
          <div className="col-4 mb-3">
            <label>Sexo</label>
            <select className="w-100 form-control" name="sex" value={birthdate}>
              <option value="Masculino">Masculino</option>
              <option value="Femenino">Femenino</option>
              <option value="No Binario">No Binario</option>
            </select>
          </div>
          <div className="col-4 mb-3">
            <label>Imagen de Perfil</label>
            <input
              className="w-100 form-control form-control"
              type="file"
              value={image}
              onChange={(e) => setimage(e.target.value)}
            />
          </div>
          <div className="col-4 mb-3">
            <label>Profesiones</label>
            <select className="w-100 form-control" name="profesion" id="image" value={id_profession}>
              <option value="Profesor">Profesor</option>
              <option value="Abogado">Abogado</option>
              <option value="Arquitecto">Arquitecto</option>
              <option value="Botanico">Botánico</option>
              <option value="Computista">Computista</option>
              <option value="Economista">Economista</option>
              <option value="Administrador">Administrador</option>
              <option value="Linguista">Linguista</option>
              <option value="Técnico de sonido">Técnico de sonido</option>
            </select>
          </div>
          <div className="col-4 mb-3">
            <label>Provincia</label>
            <select className="w-100 form-control" name="province" id="province">
              <option value="Seleccione">Seleccione</option>
            </select>
          </div>
          <div className="col-4 mb-3">
            <label>Departamento</label>
            <select className="w-100 form-control"name="department" id="department">
              <option value="Seleccione">Seleccione</option>
            </select>
          </div>
          <div className="col-4 mb-3">
            <label>Localidad</label>
            <select className="w-100 form-control" name="city" id="city">
              <option  value={id_location}>Seleccione</option>
            </select>
          </div>
          <p/>
          <div className="col-5 mb-3">
            <button className="btn btn-outline-primary w-100 form-control" type="submit">Registrar</button>
          </div>
        </div>
      </div>
    </form>

  );
};

export default RegisterForm;

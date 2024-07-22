import { useState, useEffect } from "react";
//import applicantsFetching from "../../datafetch/applicantsFetch";
import locationFetching from "../../../datafetch/locationsFetch"
import departmentsFetching from "../../../datafetch/departmentsFetch"
import citiesFetching from "../../../datafetch/citiesFetch"
import professionsFetching from "../../../datafetch/professionsFetch";

const RegisterForm = () => {

  const [dni, setdni] = useState('');
  const [first_name, setfirst_name] = useState('');
  const [last_name, setlast_name] = useState('');
  const [email, setemail] = useState('');
  const [phone_number, setphone_number] = useState('');
  const [url_linkedin, seturl_linkedin] = useState('');
  const [birthdate, setbirthdate] = useState('');
  const [image, setimage] = useState(null);
  const [sex, setsex] = useState('');
  const [professions, setprofessions] = useState('');
  const [id_profession, setidprofession] = useState('');


  const [provinces, setProvinces] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [cities, setCities] = useState([]);
  const [id_location, setSelectedCity] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await locationFetching.getAllProvinces();
        setProvinces(data)
        console.log(data)
        console.log(provinces)

        const datap = await professionsFetching.getAllProfessions();
        setprofessions(datap)
        console.log(professions)
      }
      catch {

      }

    };
    fetchData()
  }, []);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        if (selectedProvince) {
          const data = await departmentsFetching.getAllDepartments(selectedProvince);
          setDepartments(data);
        } else {
          setDepartments([]);
        }
      } catch (error) {
        console.error("Error fetching departments:", error);
      }
    };
    fetchDepartments();
  }, [selectedProvince]);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        if (selectedDepartment) {
          const data = await citiesFetching.getAllCities(selectedDepartment);
          setCities(data);
        } else {
          setCities([]);
        }
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };
    fetchCities();
  }, [selectedDepartment]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('dni', dni);
    formData.append('first_name', first_name);
    formData.append('last_name', last_name);
    formData.append('email', email);
    formData.append('phone_number', phone_number);
    formData.append('url_linkedin', url_linkedin);
    formData.append('birthdate', birthdate);
    formData.append('sex', sex);
    formData.append('image', image); // Adjuntar el archivo de la imagen
    formData.append('id_location', id_location);
    formData.append('id_profession', id_profession);

    const res = await fetch("http://localhost:3000/api/register", { // remplazar URL
      method: 'POST',
      body: formData
    });

    const data = await res.json(); // Esto sirve para que el servidor me devuelva una respuesta respecto al post que mande
    // console.log(data);
  }

  return (

    <form className="mt-5" onSubmit={handleSubmit}>
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-6 mb-3">
            <label>Nombre</label>
            <input
              className="w-100 form-control"
              type="text"
              value={first_name}
              onChange={(e) => setfirst_name(e.target.value)}
            />
          </div>
          <div className="col-6 mb-3">
            <label>Apellido</label>
            <input
              className="w-100 form-control"
              type="text"
              value={last_name}
              onChange={(e) => setlast_name(e.target.value)}
            />
          </div>
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
            <select
              className="w-100 form-control"
              name="sex"
              value={sex}
              onChange={(e) => setsex(e.target.value)}
            >
              <option value="">Seleccione</option>
              <option value="M">Masculino</option>
              <option value="F">Femenino</option>
              <option value="X">No Binario</option>
            </select>
          </div>
          <div className="col-4 mb-3">
            <label>Profesiones</label>
            <select
              className="w-100 form-control"
              name="professions"
              id="professions"
              value={id_profession}
              onChange={(e) => {
                setidprofession(e.target.value);
              }}
            >
              <option value="">Seleccione</option>
              {professions.length > 0 ? (
                professions.map((profession, index) => (
                  <option key={index} value={profession.id_profession}>
                    {profession.name_profession}
                  </option>
                ))
              ) : (
                <option value="">Cargando...</option>
              )}
            </select>
          </div>
          <div className="col-4 mb-3">
            <label>Provincia</label>
            <select
              className="w-100 form-control"
              name="province"
              id="province"
              value={selectedProvince}
              onChange={(e) => {
                setSelectedProvince(e.target.value);
                setSelectedDepartment("");
              }}
            >
              <option value="">Seleccione</option>
              {provinces.length > 0 ? (
                provinces.map((province, index) => (
                  <option key={index} value={province.province}>
                    {province.province}
                  </option>
                ))
              ) : (
                <option value="">Cargando...</option>
              )}
            </select>
          </div>
          <div className="col-4 mb-3">
            <label>Departamento</label>
            <select
              className="w-100 form-control"
              name="department"
              id="department"
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
            >
              <option value="">Seleccione</option>
              {departments.length > 0 ? (
                departments.map((department, index) => (
                  <option key={index} value={department.department}>
                    {department.department}
                  </option>
                ))
              ) : (
                <option value="">Cargando...</option>
              )}
            </select>
          </div>
          <div className="col-4 mb-3">
            <label>Localidad</label>
            <select
              className="w-100 form-control"
              name="city"
              id="city"
              value={id_location}
              onChange={(e) => setSelectedCity(e.target.value)}
            >
              <option value="">Seleccione</option>
              {cities.length > 0 ? (
                cities.map((city, index) => (
                  <option key={index} value={city.id_location}>
                    {city.city}
                  </option>
                ))
              ) : (
                <option value="">Cargando...</option>
              )}
            </select>
          </div>
          <div className="col-6 mb-3">
            <label>Imagen de Perfil</label>
            <input
              className="w-100 form-control form-control"
              type="file"
              onChange={(e) => setimage(e.target.files[0])}
            />
          </div>
          <div className="col-6 mb-3">
            <label>URL de LinkedIn</label>
            <input
              className="w-100 form-control"
              type="url"
              value={url_linkedin}
              onChange={(e) => seturl_linkedin(e.target.value)}
              placeholder="https://www.linkedin.com/"
            />
          </div>
          <div className="col-5 mb-3">
            <button className="btn btn-outline-primary w-100 form-control" type="submit">Registrar</button>
          </div>
        </div>
      </div>
    </form>

  );
};

export default RegisterForm;

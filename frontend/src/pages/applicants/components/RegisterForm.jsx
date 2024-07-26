import { useState, useEffect } from "react";
import locationFetching from "../../../datafetch/locationsFetch";
import departmentsFetching from "../../../datafetch/departmentsFetch";
import citiesFetching from "../../../datafetch/citiesFetch";
import professionsFetching from "../../../datafetch/professionsFetch";

const RegisterForm = () => {
  const [dni, setDni] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone_number, setPhoneNumber] = useState('');
  const [url_linkedin, setUrlLinkedin] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [image, setImage] = useState(null);
  const [sex, setSex] = useState('');
  const [professions, setProfessions] = useState([]);
  const [id_profession, setIdProfession] = useState('');
  const [provinces, setProvinces] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [cities, setCities] = useState([]);
  const [id_location, setSelectedCity] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [validationErrors, setValidationErrors] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await locationFetching.getAllProvinces();
        setProvinces(data);

        const datap = await professionsFetching.getAllProfessions();
        setProfessions(datap);
      } catch (error) {
        console.error("Error fetching data:", error);
        setErrorMessage("Error al cargar los datos iniciales. Inténtalo de nuevo más tarde.");
      }
    };
    fetchData();
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
        setErrorMessage("Error al cargar los departamentos. Inténtalo de nuevo más tarde.");
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
        setErrorMessage("Error al cargar las ciudades. Inténtalo de nuevo más tarde.");
      }
    };
    fetchCities();
  }, [selectedDepartment]);

  const validateForm = () => {
    let errors = {};
    if (!dni) errors.dni = "DNI es requerido";
    if (!first_name) errors.first_name = "Nombre es requerido";
    if (!last_name) errors.last_name = "Apellido es requerido";
    if (!email) errors.email = "Email es requerido";
    if (!phone_number) errors.phone_number = "Número de teléfono es requerido";
    if (!birthdate) errors.birthdate = "Fecha de nacimiento es requerida";
    if (!sex) errors.sex = "Sexo es requerido";
    if (!id_profession) errors.id_profession = "Profesión es requerida";
    if (!id_location) errors.id_location = "Localidad es requerida";
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
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

      try {
        const res = await fetch("http://localhost:3000/api/aspirantes", {
          method: 'POST',
          body: formData
        });

        const data = await res.json();
        if (res.ok) {
          setSuccessMessage("Aspirante registrado con éxito");
          setErrorMessage('');
        } else {
          setErrorMessage(data.error || "Error al registrar aspirante. Inténtalo de nuevo.");
          setSuccessMessage('');
        }
      } catch (error) {
        console.error('Error al enviar el formulario:', error);
        setErrorMessage("Error al enviar el formulario. Inténtalo de nuevo más tarde.");
        setSuccessMessage('');
      }
    }
  };

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
              onChange={(e) => setFirstName(e.target.value)}
            />
            {validationErrors.first_name && <p className="text-danger">{validationErrors.first_name}</p>}
          </div>
          <div className="col-6 mb-3">
            <label>Apellido</label>
            <input
              className="w-100 form-control"
              type="text"
              value={last_name}
              onChange={(e) => setLastName(e.target.value)}
            />
            {validationErrors.last_name && <p className="text-danger">{validationErrors.last_name}</p>}
          </div>
          <div className="col-4 mb-3">
            <label>DNI</label>
            <input
              className="w-100 form-control"
              type="number"
              value={dni}
              onChange={(e) => setDni(e.target.value)}
            />
            {validationErrors.dni && <p className="text-danger">{validationErrors.dni}</p>}
          </div>
          <div className="col-4 mb-3">
            <label>Email</label>
            <input
              className="w-100 form-control"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {validationErrors.email && <p className="text-danger">{validationErrors.email}</p>}
          </div>
          <div className="col-4 mb-3">
            <label>N° de telefono</label>
            <input
              className="w-100 form-control"
              type="number"
              value={phone_number}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            {validationErrors.phone_number && <p className="text-danger">{validationErrors.phone_number}</p>}
          </div>
          <div className="col-4 mb-3">
            <label>Fecha de Nacimiento</label>
            <input
              className="w-100 form-control"
              type="date"
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
            />
            {validationErrors.birthdate && <p className="text-danger">{validationErrors.birthdate}</p>}
          </div>
          <div className="col-4 mb-3">
            <label>Sexo</label>
            <select
              className="w-100 form-control"
              name="sex"
              value={sex}
              onChange={(e) => setSex(e.target.value)}
            >
              <option value="">Seleccione</option>
              <option value="M">Masculino</option>
              <option value="F">Femenino</option>
              <option value="X">No Binario</option>
            </select>
            {validationErrors.sex && <p className="text-danger">{validationErrors.sex}</p>}
          </div>
          <div className="col-4 mb-3">
            <label>Profesiones</label>
            <select
              className="w-100 form-control"
              name="professions"
              id="professions"
              value={id_profession}
              onChange={(e) => setIdProfession(e.target.value)}
            >
              <option value="">Seleccione</option>
              {professions.length > 0 ? (
                professions.map((profession) => (
                  <option key={profession.id_profession} value={profession.id_profession}>
                    {profession.name_profession}
                  </option>
                ))
              ) : (
                <option value="">Cargando...</option>
              )}
            </select>
            {validationErrors.id_profession && <p className="text-danger">{validationErrors.id_profession}</p>}
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
                provinces.map((province) => (
                  <option key={province.province} value={province.province}>
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
                departments.map((department) => (
                  <option key={department.department} value={department.department}>
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
                cities.map((city) => (
                  <option key={city.id_location} value={city.id_location}>
                    {city.city}
                  </option>
                ))
              ) : (
                <option value="">Cargando...</option>
              )}
            </select>
            {validationErrors.id_location && <p className="text-danger">{validationErrors.id_location}</p>}
          </div>
          <div className="col-6 mb-3">
            <label>Imagen de Perfil</label>
            <input
              className="w-100 form-control form-control"
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
          <div className="col-6 mb-3">
            <label>URL de LinkedIn</label>
            <input
              className="w-100 form-control"
              type="url"
              value={url_linkedin}
              onChange={(e) => setUrlLinkedin(e.target.value)}
              placeholder="https://www.linkedin.com/"
            />
          </div>
          <div className="col-5 mb-3">
            <button className="btn btn-outline-primary w-100 form-control" type="submit">Registrar</button>
          </div>
          {errorMessage && <p className="text-danger">{errorMessage}</p>}
          {successMessage && <p className="text-success">{successMessage}</p>}
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
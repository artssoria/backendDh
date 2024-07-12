const Registro = () => {
  return (
    <section className="content registro">
      <header className="preventa">
        <h2 className="text-2xl">Registrarse</h2>
        <p className="text-center text-lg">
          Para administrativos, profesionales y técnicos. Gracias por su
          colaboración
        </p>
      </header>
      <form action="" className="p-3 mb-5 text-center">
        {[
          { label: "Dni", type: "text", id: "dni" },
          { label: "Nombre", type: "text", id: "nombre" },
          { label: "Apellido", type: "text", id: "apellido" },
          { label: "E-mail", type: "email", id: "email" },
          { label: "Teléfono", type: "text", id: "telefono" },
          { label: "Perfil URL de Linkedin", type: "url", id: "perfil" },
          { label: "Fecha de Nacimiento", type: "date", id: "fecha_nac" },
          {
            label: "Imagen de perfil",
            type: "file",
            id: "imagen",
            className: "imagen",
          },
        ].map((field, index) => (
          <div key={index}>
            <label htmlFor={field.id}>{field.label}</label>
            <input
              type={field.type}
              name={field.id}
              id={field.id}
              placeholder={field.label}
              required
            />
          </div>
        ))}
        <div>
          <label htmlFor="sexo">Sexo</label>
          <select name="sexo" id="sexo" required>
            <option value="M">Masculino</option>
            <option value="F">Femenino</option>
            <option value="X">No Binario</option>
          </select>
        </div>
        <div>
          <label htmlFor="profesion">Profesión</label>
          <select name="profesion" id="profesion" required>
            {[
              "Profesor",
              "Abogado",
              "Arquitecto",
              "Botánico",
              "Computista",
              "Economista",
              "Administrador",
              "Linguista",
              "Técnico de sonido",
            ].map((profession, index) => (
              <option key={index} value={profession}>
                {profession}
              </option>
            ))}
          </select>
        </div>
        {[
          { label: "Ciudad", id: "city" },
          { label: "Departamento", id: "department" },
          { label: "Provincia", id: "province" },
        ].map((field, index) => (
          <div key={index}>
            <label htmlFor={field.id}>{field.label}</label>
            <select name={field.id} id={field.id} required>
              <option value="">seleccionar</option>
            </select>
          </div>
        ))}
        <button type="submit" className="btn-register">
          Registrarse
        </button>
      </form>
    </section>
  );
};

export default Registro;

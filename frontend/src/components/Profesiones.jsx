const Profesiones = () => {
  return (
    <section className="content profesiones">
      <h2 className="mt-3">Profesiones</h2>
      <div className="list-group shadow-sm p-3 mb-5 rounded">
        <h4
          className="list-group-item list-group-item-action active text-center"
          aria-current="true">
          Listado de Profesiones
        </h4>
        {[
          "Abogado",
          "Arquitecto",
          "Botánico",
          "Computista",
          "Economista",
          "Técnico de sonido",
          "Profesor",
          "Linguista",
        ].map((profession, index) => (
          <button
            key={index}
            type="button"
            className="list-group-item list-group-item-action text-center">
            {profession}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Profesiones;

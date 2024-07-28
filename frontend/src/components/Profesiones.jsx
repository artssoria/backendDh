import useProfesiones from '../hooks/useProfesiones';

const Profesiones = () => {
  const { profesiones, loading, error } = useProfesiones();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  return (
    <section className="content profesiones">
      <h2 className="mt-3 text-center">Profesiones</h2>
      <div className="list-group shadow-sm p-3 rounded">
        <h4
          className="list-group-item list-group-item-action active text-center"
          aria-current="true">
          Listado de Profesiones
        </h4>
        {profesiones?.map((profession) => (
          <button
            key={profession.id_profession}
            type="button"
            className="list-group-item list-group-item-action text-center">
            {profession.name_profession}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Profesiones;

import useAspirantes from '../hooks/useAspirantes';

const Aspirantes = () => {
  const { aspirantes, loading, error } = useAspirantes();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <section className="content aspirantes">
      <h2 className="text-center p-4">Aspirantes</h2>
      <article className="person-boxes">
        {aspirantes.map((person) => (
          <div
            key={person.id_applicants}
            className="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
            <div className="box-avatar">
              <img src={`src/assets/img/${person.image}`} alt={person.name} />
            </div>
            <div className="box-bio">
              <h2 className="bio-name">{`${person.first_name} ${person.last_name}`}</h2>
              <p className="bio-position">{person.professions}</p>
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
    </section>
  );
};

export default Aspirantes;

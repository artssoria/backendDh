
const Applicants = () => {
  return (
    <section className="content aspirantes">
      <h2>Aspirantes</h2>
      <article className="person-boxes">
        {[
          {
            name: "Gloria Medina",
            position: "Administrador",
            img: "foto1.jpg",
          },
          {
            name: "Daniel Fuentes",
            position: "Técnico de sonido",
            img: "foto2.jpg",
          },
          { name: "Tim Tim", position: "Linguista", img: "foto3.jpg" },
          { name: "Rocio Carle", position: "Profesor", img: "foto4.jpg" },
          { name: "Victor Fuentes", position: "Computista", img: "foto5.jpg" },
          { name: "Luis Fuentes", position: "Economista", img: "foto6.jpg" },
        ].map((person, index) => (
          <div
            key={index}
            className="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
            <div className="box-avatar">
              <img src={`src/assets/img/${person.img}`} alt={person.name} />
            </div>
            <div className="box-bio">
              <h2 className="bio-name">{person.name}</h2>
              <p className="bio-position">{person.position}</p>
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

export default Applicants;
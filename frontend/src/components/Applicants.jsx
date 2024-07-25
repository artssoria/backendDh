import { useEffect, useState } from 'react';
import applicantsFetching from '../datafetch/applicantsFetch';

const Applicants = () => {
  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await applicantsFetching.getAllApplicants();
        setApplicants(data.data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="content aspirantes">
      <h2>Aspirantes</h2>
      <article className="person-boxes">
        {applicants.map((person, index) => (
          <div
            key={index}
            className="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
            <div className="box-avatar">
              <img
                src={`/src/assets/img/${person.image}`}
                alt={person.first_name}
              />
            </div>
            <div className="box-bio">
              <h2 className="bio-name">{person.first_name}</h2>
              <p className="bio-position">
                {person.Professions.name_profession}
              </p>
            </div>
            <div className="box-actions">
              <button>
                <i className="bi bi-star"></i>
              </button>
              <button>
                <i className="bi bi-chat"></i>
              </button>
              <button>
                <a href={`mailto:${person.email}`}>
                  <i className="bi bi-envelope"></i>
                </a>
              </button>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
};

export default Applicants;

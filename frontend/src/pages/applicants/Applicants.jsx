import { useState, useEffect } from "react";
import applicantsFetching from "../../datafetch/applicantsFetch";
import professionsFetching from "../../datafetch/professionsFetch";
import ApplicantCard from "./components/ApplicantCard";
import { Link } from "react-router-dom";

const Applicants = () => {

    const [applicants, setApplicants] = useState([]);
    const [professions, setProfessions] = useState(null);
    const [selectedProfession, setSelectedProfession] = useState(null);
    const [filteredApplicants, setFilteredApplicants] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await applicantsFetching.getAllApplicants();
                const professionsData = await professionsFetching.getAllProfessions();
                setProfessions(professionsData)
                setApplicants(data.data)
                setFilteredApplicants(data.data)
            }
            catch {
                console.log('se rompio')
            }

        };
        fetchData()

    }, []);

    useEffect(() => {
        let filter = applicants.filter((applicant) => {
            if (applicant.professions == selectedProfession) {
                return applicant
            }
            else {
                if (selectedProfession == '') {
                    return applicant
                }
            }
        })
        setFilteredApplicants(filter)
    }, [selectedProfession]);


    return (
        <section className="content aspirantes">
            <h2>Aspirantes</h2>
            <div className="row">
                <div className="col-3 mb-3">
                    <label>Seleccione una profesión</label>
                    <select
                        className="w-100 form-control"
                        name="professions"
                        id="professions"
                        value={selectedProfession}
                        onChange={(e) => {
                            setSelectedProfession(e.target.value);
                        }}
                    >  
                        <option value="">Todas las profesiones</option>
                        {professions?.length > 0 ? (
                            professions?.map((profession, index) => (
                                <option key={index} value={profession.name_profession}>
                                    {profession.name_profession}
                                </option>
                            ))
                        ) : (
                            <option value="">Cargando...</option>
                        )}
                    </select>
                </div>
            </div>
            <article className="person-boxes">



                {filteredApplicants?.map((applicant, index) => (
                    <Link to={`/applicants/${applicant.id_applicants}`} key={index}>
                    
                        <ApplicantCard  name={applicant.first_name} image={applicant.image} professions={applicant.professions} last_name={applicant.last_name} />
                    </Link>
                ))}

            </article>
        </section>
    );
};

export default Applicants;
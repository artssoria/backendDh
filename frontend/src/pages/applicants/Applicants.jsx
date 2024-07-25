import { useState, useEffect } from "react";
import applicantsFetching from "../../datafetch/applicantsFetch";
import professionsFetching from "../../datafetch/professionsFetch";
import ApplicantCard from "./components/ApplicantCard";
import ApplicantModal from "./components/ApplicantModal";


const Applicants = () => {
    const [applicants, setApplicants] = useState([]);
    const [professions, setProfessions] = useState([]);
    const [selectedProfession, setSelectedProfession] = useState('');
    const [filteredApplicants, setFilteredApplicants] = useState([]);
    const [selectedApplicant, setSelectedApplicant] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await applicantsFetching.getAllApplicants();
                const professionsData = await professionsFetching.getAllProfessions();
                setProfessions(professionsData);
                setApplicants(data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        let filter = applicants.filter((applicant) => {
            if (selectedProfession === '') {
                return true;
            }
            return applicant.professions === selectedProfession;
        });
        setFilteredApplicants(filter);
    }, [selectedProfession, applicants]);

    const openModal = (applicant) => {
        setSelectedApplicant(applicant);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setSelectedApplicant(null);
        setModalIsOpen(false);
    };

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
                        onChange={(e) => setSelectedProfession(e.target.value)}
                    >
                        <option value="">Todas las profesiones</option>
                        {professions.length > 0 ? (
                            professions.map((profession) => (
                                <option key={profession.id_profession} value={profession.name_profession}>
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
                {filteredApplicants.map((applicant) => (
                    <div key={applicant.id_applicants} onClick={() => openModal(applicant)}>
                        <ApplicantCard
                            name={applicant.first_name}
                            image={applicant.image}
                            professions={applicant.professions}
                            last_name={applicant.last_name}
                        />
                    </div>
                ))}
            </article>
            {selectedApplicant && (
                <ApplicantModal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    applicant={selectedApplicant}
                />
            )}
        </section>
    );
};

export default Applicants;
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import applicantsFetching from "../../datafetch/applicantsFetch";

import moment from 'moment';

const ApplicantDetail = () => {
    const { id } = useParams(); // Obtiene el id de la URL
    const [applicant, setApplicant] = useState(null);

    function formattedBirthdate(date) {
        return moment(date).format('DD/MM/YYYY');
    }

    useEffect(() => {
        const fetchApplicant = async () => {
            try {
                const data = await applicantsFetching.getApplicantById(id);
                setApplicant(data.data);
            } catch {
                console.log('Error fetching applicant data');
            }
        };
        fetchApplicant();
    }, [id]);
    useEffect(() => {
        console.log(applicant)
    }, [])

    if (!applicant) {
        return <div>Cargando...</div>;
    }

    return (
        <div className="row">
            <div className="col-4">
                <img src={applicant.image} alt={`${applicant.first_name} ${applicant.last_name}`} />
            </div>
            <div className="col-8">
                <h1>{applicant.first_name.toUpperCase()} {applicant.last_name.toUpperCase()}</h1>
                <p>Profesión: {applicant.professions.toUpperCase()}</p>
                <p>Fecha de nacimiento: {formattedBirthdate(applicant.birthdate)}</p>
                <p>Lugar de residencia: {applicant.city}, {applicant.department}, {applicant.province}</p>
                <hr />
                <h2>DATOS DE CONTACTO</h2>
                <hr className="active"/>
                <p className="bi bi-envelope-fill"> E-mail: <a href={`mailto:${applicant.email}`} className="text-blue-500 hover:underline"> {applicant.email}</a></p>
                <p className="bi bi-phone-fill"> N° de teléfono: <a href={`https://wa.me/+549${applicant.phone_number}`} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">{applicant.phone_number}</a></p>
                <p className="bi bi-linkedin"> Url Linkedin: <a href={applicant.url_linkedin} target="_blank">{applicant.url_linkedin}</a></p>
            </div>
        </div>
    );
};

export default ApplicantDetail;
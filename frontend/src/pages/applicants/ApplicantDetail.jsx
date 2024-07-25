import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import applicantsFetching from "../../datafetch/applicantsFetch";

const ApplicantDetail = () => {
    const { id } = useParams(); // Obtiene el id de la URL
    const [applicant, setApplicant] = useState(null);

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
    useEffect(()=>{
        console.log(applicant)
    },[])

    if (!applicant) {
        return <div>Cargando...</div>;
    }

    return (
        <div>
            <h1>{applicant.first_name} {applicant.last_name}</h1>
            <img src={applicant.image} alt={`${applicant.first_name} ${applicant.last_name}`} />
            <p>{applicant.professions}</p>
            {/* Otros detalles del aspirante */}
        </div>
    );
};

export default ApplicantDetail;
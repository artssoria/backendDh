import { useEffect, useState } from 'react';
import professionsFetching from '../datafetch/professionsFetch';

const useProfesiones = () => {
  const [profesiones, setProfesiones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApplicants = async () => {
      try {
        const data = await professionsFetching.getAllProfessions();
        setProfesiones(data);
      } catch (error) {
        setError('Error fetching applicants');
      } finally {
        setLoading(false);
      }
    };
    fetchApplicants();
  }, []);

  return { profesiones, loading, error };
};

export default useProfesiones;

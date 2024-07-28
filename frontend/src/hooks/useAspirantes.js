import { useEffect, useState } from 'react';
import applicantsFetching from '../datafetch/applicantsFetch';

const useAspirantes = () => {
  const [aspirantes, setAspirantes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApplicants = async () => {
      try {
        const { data } = await applicantsFetching.getAllApplicants();
        setAspirantes(data);
      } catch (error) {
        setError('Error fetching applicants');
      } finally {
        setLoading(false);
      }
    };
    fetchApplicants();
  }, []);

  return { aspirantes, loading, error };
};

export default useAspirantes;

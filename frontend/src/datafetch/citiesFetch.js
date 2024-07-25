const citiesFetching = {
    getAllCities: async (department) => {
      try {
        const res = await fetch(`http://localhost:3000/api/locations/cities/${department}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = await res.json();
        return data;
      } catch (error) {
        console.error('Error fetching cities:', error);
        throw error; // Propaga el error para manejarlo en el componente React
      }
    }
  };
  
  export default citiesFetching;
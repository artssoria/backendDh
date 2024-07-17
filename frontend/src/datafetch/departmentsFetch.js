const departmentsFetching = {
    getAllDepartments: async (province) => {
      try {
        const res = await fetch(`http://localhost:3000/api/locations/departments/${province}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = await res.json();
        return data;
      } catch (error) {
        console.error('Error fetching departments:', error);
        throw error; // Propaga el error para manejarlo en el componente React
      }
    }
  };
  
  export default departmentsFetching;
  
const applicantsFetching = {
    getAllApplicants : async () => {
        try{
            const res = await fetch("http://localhost:3000/api/aspirantes", {
                //credentials: 'include', // Incluye cookies en la solicitud
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }

            })
            const data = await res.json()
            return data;
        }
        catch (error) {
            console.error('Error fetching aspirantes:', error);
        }
    }
}

export default applicantsFetching;
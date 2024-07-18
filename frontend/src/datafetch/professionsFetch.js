const professionsFetching = {
    getAllProfessions : async () => {
        try{
            const res = await fetch("http://localhost:3000/api/professions", {
                //credentials: 'include', // Incluye cookies en la solicitud
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }

            })
            const data = await res.json()
            return data.data;
        }
        catch (error) {
            console.error('Error fetching profesion:', error);
        }
    }
}

export default professionsFetching;
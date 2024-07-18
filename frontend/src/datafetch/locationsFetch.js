const locationsFetching = {
    getAllProvinces : async () => {
        try{
            const res = await fetch("http://localhost:3000/api/locations/provinces", {
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
            console.error('Error fetching provinces:', error);
        }
    }
}

export default locationsFetching;
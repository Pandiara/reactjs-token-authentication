const URL = 'http://localhost:57174/api';

const handleResponse =(response)=> {
    if (!response.ok) { 
        return Promise.reject(response.statusText);
    }
    return response.json();
};

export const registerService = async(user) => {
        debugger;
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        };
        const response = await fetch(URL+'/Account/Register', requestOptions)    
        return await handleResponse(response);
    
};



export const userService={
    register
};

const handleResponse =(response)=> {
    if (!response.ok) { 
        return Promise.reject(response.statusText);
    }

    return response.json();
}

const register = (user) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch('/users/register', requestOptions).then(handleResponse);
}

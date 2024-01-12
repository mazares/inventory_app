const API_URL = "http://localhost:3001/";

const getData = async() => {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
};

const postData = async(data) => {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    return response.json();
};

const deleteData = async(id) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
    });
    return response.json();
};

const updateData = async(id, data) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    return response.json();
};

export { getData, postData, deleteData, updateData };
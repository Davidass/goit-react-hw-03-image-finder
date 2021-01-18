function fetchPixabay(name, page) {
  return fetch(
    `https://pixabay.com/api/?q=${name}&page=${page}&key=19223838-0e771d4957721b26290d866a0&image_type=photo&orientation=horizontal&per_page=12`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error(`No response from server`));
  });
}

const api = { fetchPixabay };

export default api;

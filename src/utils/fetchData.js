const fetchData = async (url, options = {}) => {
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error('Error fetching data');
  }

  return response.json();
};

export default fetchData;

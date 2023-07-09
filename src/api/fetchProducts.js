const fetchProducts = async (querry) => {
    const response = await fetch(`https://infracode-api.onrender.com/produtos`);
    const data = await response.json();

    return data.results;
}

export default fetchProducts;
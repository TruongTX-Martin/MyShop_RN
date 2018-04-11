import Config from '../components/Config';

const searchProduct = (search) => (
  fetch(`${Config.url}${'api/search.php?key='}${search}`)//eslint-disable-line
    .then(res => res.json())
);

export default searchProduct;


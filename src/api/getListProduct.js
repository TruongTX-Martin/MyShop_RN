import Config from '../components/Config';

const getListProduct = (idType, page) => (
  fetch(`${Config.url}${'api/product_by_type.php?id_type='}${idType}${'&page='}${page}`)//eslint-disable-line
    .then(res => res.json())
);

export default getListProduct;


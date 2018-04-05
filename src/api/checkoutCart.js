import Config from '../components/Config';

const checkoutCart = (token, arrayDetail) => (
  fetch(`${Config.url}${'api/cart.php'}`,//eslint-disable-line
    {
      method: 'POST',
      headers: {
        'Content-Type': 'applicaton/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({ token, arrayDetail })
    })
    .then(res => res.text())
);

module.exports = checkoutCart;


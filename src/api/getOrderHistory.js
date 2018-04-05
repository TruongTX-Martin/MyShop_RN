import Config from '../components/Config';

const getOrderHistory = (token) => (
  fetch(`${Config.url}${'api/order_history.php'}`,//eslint-disable-line
    {
      method: 'POST',
      headers: {
        'Content-Type': 'applicaton/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({ token })
    })
    .then(res => res.json())
);

module.exports = getOrderHistory;


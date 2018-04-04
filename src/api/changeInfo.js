import Config from '../components/Config';

const changeInfo = (token, name, phone, address) => (
  fetch(`${Config.url}${'api/change_info.php'}`,//eslint-disable-line
    {
      method: 'POST',
      headers: {
        'Content-Type': 'applicaton/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({ token, name, phone, address })
    })
    .then(res => res.json())
);

module.exports = changeInfo;

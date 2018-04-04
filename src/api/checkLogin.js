import Config from '../components/Config';

const checkLogin = (token) => (
  fetch(`${Config.url}${'api/check_login.php'}`,//eslint-disable-line
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

module.exports = checkLogin;

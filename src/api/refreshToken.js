import Config from '../components/Config';

const refreshToken = (token) => (
  fetch(`${Config.url}${'api/refresh_token.php'}`,//eslint-disable-line
    {
      method: 'POST',
      headers: {
        'Content-Type': 'applicaton/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({ token })
    })
    .then(res => res.text())
);

module.exports = refreshToken;

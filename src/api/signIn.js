import Config from '../components/Config';

const signIn = (email, password) => (
  fetch(`${Config.url}${'api/login.php'}`,//eslint-disable-line
    {
      method: 'POST',
      headers: {
        'Content-Type': 'applicaton/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
    .then(res => res.json())
);

module.exports = signIn;

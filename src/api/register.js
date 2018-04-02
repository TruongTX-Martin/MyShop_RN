import Config from '../components/Config';

const register = (email, name, password) => (
  fetch(`${Config.url}${'api/register.php'}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'applicaton/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({ email, name, password })
    })
    .then(res => res.text()) 
);

module.exports = register;

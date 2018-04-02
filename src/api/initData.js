import Config from '../components/Config';

const initData = () => (
  fetch(`${Config.url}${'api/'}`)//eslint-disable-line
    .then(res => res.json())
);

export default initData;

import Toast from 'react-native-root-toast';

function toTitleCase(str) {
  return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

function showToast(content) {
  Toast.show(content, {
    duration: Toast.durations.SHORT,
    position: Toast.positions.CENTER,
    shadow: true,
    animation: true,
    hideOnPress: true,
    delay: 100,
    onShow: () => {
      // calls on toast\`s appear animation start
    },
    onShown: () => {
      // calls on toast\`s appear animation end.
    },
    onHide: () => {
      // calls on toast\`s hide animation start.
    },
    onHidden: () => {
      // calls on toast\`s hide animation end.
    }
  });
}

module.exports = {
  toTitleCase,
  showToast
};

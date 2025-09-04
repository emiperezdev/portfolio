document.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem('chakra-ui-color-mode')) {
      localStorage.removeItem('chakra-ui-color-mode');
  }
});

window.addEventListener('beforeunload', function() {
  localStorage.removeItem('chakra-ui-color-mode');
});
const handleBulb = () => {
  const bulbElm = document.querySelector('.bulb');
  bulbElm.classList.toggle('bulb--on');
};

document.addEventListener('keydown', handleBulb);
  
const counterValue = document.querySelector('#value');
counterValue.textContent = Number(0);
const decrementRef = document.querySelector('button[data-action="decrement"]');
const incrementRef = document.querySelector('button[data-action="increment"]');

const handleClickDecrem = () => {
  counterValue.textContent = parseInt(counterValue.textContent) - 1;
};
const handleClickIncrem = () => {
  counterValue.textContent = parseInt(counterValue.textContent) + 1;
};

decrementRef.addEventListener('click', handleClickDecrem);
incrementRef.addEventListener('click', handleClickIncrem);

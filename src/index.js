import { getWeather } from './api.js';
import './styles.css';

function main() {
  const locationform = document.querySelector('form');
  const locationinput = document.querySelector('input');
  const submitButton = document.querySelector('button');

  submitButton.addEventListener('click', async (e) => {
    e.preventDefault();
    if (!locationinput.value) {
      return;
    }
    let value = locationinput.value;
    locationinput.value = '';
    console.log(value);
    let data;
    try {
      data = await getWeather(value);
      if (!data) {
        throw new Error('Location not found');
      }
    } catch (e) {
      console.log(e);
      return;
    }
    console.log(data);
    console.log('==================================');
    console.log(data.address);
    console.log('condition: ' + data.currentConditions.conditions);
    console.log('icon: ' + data.currentConditions.icon);
    console.log(data.currentConditions.temp);
    console.log(data.description);
  });
}

main();

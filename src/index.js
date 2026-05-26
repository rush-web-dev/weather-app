import { getWeather } from './api.js';
import { loadIcon } from './loadIcon.js';
import './styles.css';

function main() {
  const locationform = document.querySelector('form');
  const locationinput = document.querySelector('input');
  const submitButton = document.querySelector('button');

  const displayContainer = document.querySelector('.container');
  const displayDiv = document.querySelector('.display');
  const addressDiv = document.querySelector('.address');
  const tempDiv = document.querySelector('.temp');
  const iconDiv = document.querySelector('.icon');
  const conditionDiv = document.querySelector('.condition');
  const descriptionDiv = document.querySelector('.description');

  const loading = document.querySelector('.loading-container');

  submitButton.addEventListener('click', async (e) => {
    e.preventDefault();
    if (!locationinput.value) {
      return;
    }
    loading.classList.remove('hidden');
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
    addressDiv.textContent = data.address;
    console.log('condition: ' + data.currentConditions.conditions);
    conditionDiv.textContent = data.currentConditions.conditions;
    console.log('icon: ' + data.currentConditions.icon);
    loadIcon(data.currentConditions.icon).then((icon) => {
      iconDiv.innerHTML = icon;
    });
    console.log(data.currentConditions.temp);
    tempDiv.textContent = data.currentConditions.temp;
    console.log(data.description);
    descriptionDiv.textContent = data.description;
    loading.classList.add('hidden');
  });
}

main();

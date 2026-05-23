import { getWeather } from './api.js';
import './styles.css';

async function main() {
  let data = await getWeather('boston');
  console.log(data);
  console.log('==================================');
  console.log(data.address);
  console.log('condition: ' + data.currentConditions.conditions);
  console.log('icon: ' + data.currentConditions.icon);
  console.log(data.currentConditions.temp);
  console.log(data.description);
}

main();

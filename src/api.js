export const getWeather = async (location) => {
  const key = 'S5BNQY9XAE5LJ9XUQNCDPRQKD';
  try {
    let response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&key=${key}&contentType=json`
    );
    let json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};

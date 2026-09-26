import { getWeatherCondition } from '../utils/WeatherCondition';

export const searchWeather = async (cityName) => {
  const locationResponse = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
      cityName
    )}&count=1&language=en&format=json`
  );

  const locationData = await locationResponse.json();

  if (
    !locationData.results ||
    locationData.results.length === 0
  ) {
    return null;
  }

  const location = locationData.results[0];

  const weatherResponse = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code`
  );

  const weatherData = await weatherResponse.json();

  const weatherCode = weatherData.current.weather_code;

  return {
    city: location.name,
    country: location.country,
    temperature: weatherData.current.temperature_2m,
    humidity: weatherData.current.relative_humidity_2m,
    wind: weatherData.current.wind_speed_10m,
    weatherCode: weatherCode,
    condition: getWeatherCondition(weatherCode),
  };
};
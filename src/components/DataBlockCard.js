const DataBlockCard = ({ dataBlockUnit, icon, summary, temperature, sunriseTime, sunsetTime, cloudCover, humidity, dewPoint}) => {
  return (
    <img src={getIcon(icon)} />
    <p>{summary}</p>
    Stats:
    <ul>
      dataBlockUnit === "minutely" ? null : <li> Temperature: {temperature}</li>
      <li> Sunrise: { unixTimeToSum(sunriseTime) }</li>
      <li> Sunset: { unixTimeToSum(sunsetTime) }</li>
      <li> Cloud Cover: { cloudCover * 100 }%</li> /* TODO: do we need to html escape */
      <li> Humidity: { humidity * 100 }%</li> /* TODO: do we need to html escape */
      <li> Dew Point: { dewPoint }°F</li>
    </ul>
  )
}

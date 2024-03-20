import { useEffect, useState } from "react";
import "./App.css";
import List from "./components/List";
import AutoCompleteInput from "./components/AutoCompleteInput";

function App() {
  const [message, setMessage] = useState("");
  const [city, setCity] = useState("");
  const [forecastType, setForecastType] = useState("daily");

  const handleChange = (event) => {
    setMessage(event.target.value);
  };
  const handleDailyClick = () => {
    setForecastType("daily");
  };

  const handleWeeklyClick = () => {
    setForecastType("weekly");
  };

  useEffect(() => {
    const getData = () => {
      fetch(
        `https://api.collectapi.com/weather/getWeather?data.lang=tr&data.city=${message}`,
        {
          method: "GET",
          headers: {
            authorization:
              "apikey 2k8UR5Nfb1yWWnkItmDAQ9:5qfroyQKIFK0udT9JGsh05",
            "content-type": "application/json",
          },
        }
      )
        .then((response) => response.json())
        .then((response) => setCity(response.result))
        .catch((error) => console.log(error));
    };
    getData();
  }, [message]);

  return (
    <div>
      <div className="app-container">
        <h1>HAVA DURUMU</h1>
        <AutoCompleteInput setMessage={setMessage} setCity={setCity} />
        {/* <input
          placeholder="Şehir seçin"
          type="text"
          id="message"
          name="message"
          onChange={handleChange}
          value={message}
        /> */}
        <div className="buttons">
          <button onClick={handleDailyClick}>GÜNLÜK</button>
          <button onClick={handleWeeklyClick}>HAFTALIK</button>
        </div>

        <div>
          <List city={city} forecastType={forecastType} />
        </div>
      </div>
    </div>
  );
}

export default App;

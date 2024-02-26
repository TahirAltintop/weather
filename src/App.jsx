import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [datas, setDatas] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  useEffect(() => {
    const getData = () => {
      fetch(
        "https://api.collectapi.com/weather/getWeather?data.lang=tr&data.city=" +
          { message },
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
        .then((response) => setDatas(response))
        .catch((error) => console.log(error));
    };
    getData();
  }, []);

  return (
    <>
      <h1>HAVA DURUMU</h1>
      <input
        type="text"
        id="message"
        name="message"
        onChange={handleChange}
        value={message}
      />
    </>
  );
}

export default App;

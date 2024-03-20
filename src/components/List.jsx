import React from "react";

const List = ({ city, forecastType }) => {
  const renderWeather = () => {
    if (!city) return null;
    if (forecastType === "daily") {
      return (
        <div>
          <h2>Günlük Hava Durumu</h2>
          <div>
            <div className="container">
              <div>
                <img src={city[0].icon} width="100px" />
              </div>

              <div>
                <h4>{JSON.stringify(city[0].date)}</h4>
                <h4>{JSON.stringify(city[0].day)}</h4>
                <h4>{JSON.stringify(city[0].description)}</h4>
                <h4>{JSON.stringify(city[0].degree)}derece</h4>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (forecastType === "weekly") {
      return (
        <div>
          <h2>Haftalık Hava Durumu</h2>
          <div>
            {city &&
              city.map((item, index) => (
                <div key={index} className="container">
                  <div>
                    <img src={item.icon} width="100px" />
                  </div>

                  <div>
                    <h4>{JSON.stringify(item.date)}</h4>
                    <h4>{JSON.stringify(item.day)}</h4>
                    <h4>{JSON.stringify(item.description)}</h4>
                    <h4>{JSON.stringify(item.degree)}derece</h4>
                  </div>
                </div>
              ))}
          </div>
        </div>
      );
    }
  };

  return <div>{renderWeather()}</div>;
};

export default List;

//   return (
//     <div>
//       {city &&
//         city.map((item, index) => (
//           <div key={index} className="container">
//             <div>
//               <img src={item.icon} width="100px" />
//             </div>

//             <div>
//               <h4>{JSON.stringify(item.date)}</h4>
//               <h4>{JSON.stringify(item.day)}</h4>
//               <h4>{JSON.stringify(item.description)}</h4>
//               <h4>{JSON.stringify(item.degree)}derece</h4>
//             </div>
//           </div>
//         ))}
//     </div>
//   );
// };

// export default List;

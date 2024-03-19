import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <div className="container">
      {countries.map((country) => (
        <div className="cardstyle" key={country.cca3}>
          <img
            className="imagestyle"
            src={country.flags.png}
            alt={`Flag of ${country.name.common}`}
          />
          <h2>{country.name.common}</h2>
        </div>
      ))}
    </div>
  );
}

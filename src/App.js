import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="search">
        <input
          type="text"
          placeholder="Search for countries"
          style={{ width: "70%" }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="container">
        {filteredCountries.map((country) => (
          <div className="countryCard" key={country.cca3}>
            <img
              className="imagestyle"
              src={country.flags.png}
              alt={`Flag of ${country.name.common}`}
            />
            <h2>{country.name.common}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

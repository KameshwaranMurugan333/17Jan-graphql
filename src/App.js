import { useQuery } from "@apollo/client";
import { LIST_COUNTRIES } from "./gql/queries";


function App() {

  const { data, loading, error } = useQuery(LIST_COUNTRIES);

  return (
    <div>
      <table>
        <thead>
          <th>Sl.No</th>
          <th>Country Code</th>
          <th>Name</th>
          <th>Capital</th>
          <th>Currency</th>
        </thead>

        <tbody>
          {loading && <p>Fetching...</p>}
          {error && <p>Something went wrong</p>}
          {data && data?.countries?.map((country, index) => {
            return <tr key={country.code}>
              <td>{index + 1}</td>
              <td>{country.code}</td>
              <td>{country.name}</td>
              <td>{country.capital}</td>
              <td>{country.currency}</td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;

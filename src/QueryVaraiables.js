import { useLazyQuery } from "@apollo/client";
import { LIST_COUNTRIES_BY_CODE } from "./gql/queries";
import React from "react";


function QueryVariables() {

    const [getCountry, { data, loading, error }] = useLazyQuery(LIST_COUNTRIES_BY_CODE);

    const [code, setCode] = React.useState("");

    const searchCountry = () => {
        getCountry({
            variables: { code }
        })
    }

    return (
        <div>

            <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Country Code"
            />

            <button onClick={searchCountry}>Search</button>

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

export default QueryVariables;

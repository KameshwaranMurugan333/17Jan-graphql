import { gql } from "@apollo/client";

export const LIST_COUNTRIES = gql`query listCountries{
    countries{
      code
      name
      capital
      currency
    }
  }`

export const LIST_COUNTRIES_BY_CODE = gql`
query listCountries($code: String){
  countries(filter:{
    code:{eq:$code}
  }){
    code
    name
    capital
    currency
  }
}
`
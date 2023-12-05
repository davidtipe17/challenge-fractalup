import { gql } from '@apollo/client'
export const ALL_COUNTRIES = gql`
  query  {
    countries {
      name
      code
      emojiU
      states {
        name
      }
      continent {
        code
        name
      }
      capital
      currency
    }
  }
`

export const FIND_COUNTRY = gql`
query findCountry($codeSearch: ID!) {
  country(code : $codeSearch) {
    continent {
      name
    }
    capital
    currency
    emoji
    emojiU
    native
    name
    subdivisions {
      name
    }
    languages {
      native
    }
    states {
      name
    }
  }
}
`
export const ALL_CONTINENTS = gql`
query {
  continents {
    name
    code
    countries {
      name
    }
  }
}
`


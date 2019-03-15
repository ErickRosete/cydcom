import gql from "graphql-tag";

export const GET_PRODUCTS = gql`
  {
    products {
        _id
        name
        price
        imageLinks
        shortDescription
        description
        subcategories {
            _id
        }
    }
  }
`;

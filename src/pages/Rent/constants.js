import gql from "graphql-tag";

export const GET_PRODUCTS = gql`
  {
    products {
        _id
        name
        imageLinks
        shortDescription
        description
        subcategories {
            _id
            name
        }
    }
  }
`;

export const GET_SUBCATEGORY_PRODUCTS = gql`
  query SubcategoryProducts($id: ID!) {
    subcategoryProducts(id: $id) {
        _id
        name
        imageLinks
        shortDescription
        description
        subcategories {
            _id
            name
        }
    }
  }
`;

export const GET_SUBCATEGORIES = gql`
  {
    subcategories {
      _id
      name
      description
      imageLink
    }
  }
`;

export const GET_PROMOTIONS = gql`
{
  activePromotions {
    _id
    name
    imageLink
  }
}
`;
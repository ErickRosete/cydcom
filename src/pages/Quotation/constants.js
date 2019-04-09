import gql from "graphql-tag";

export const GET_CLIENT_BY_EMAIL = gql`
    query ClientByEmail($email: String) {
        clientByEmail(email: $email) {
            _id
            email
            name
            company
            phone
            address
        }
    }
`;

export const EDIT_CLIENT = gql`
mutation UpdateClient($id: ID!, $company: String, $name: String, $phone: String, $email: String, $address: String) {
    updateClient(id: $id, clientInput: { company: $company, name: $name, phone: $phone, email: $email, address: $address }) {
        _id
        email
        name
        company
        phone
        address
    }
}
`;

export const ADD_CLIENT = gql`
mutation CreateClient($company: String, $name: String, $phone: String, $email: String, $address: String) {
    createClient(clientInput: { company: $company, name: $name, phone: $phone, email: $email, address: $address }) {
        _id
        email
        name
        company
        phone
        address
    }
}
`;

export const ADD_PRODUCT_QUOTATION = gql`
mutation CreateProductQuotation($quantity: Int, $comment: String, $product: ID) {
    createProductQuotation(productQuotationInput: { quantity: $quantity, comment: $comment, product: $product }) {
        _id
        quantity
        comment
        product {
            _id
        }
    }
}
`;

export const ADD_QUOTATION = gql`
mutation CreateQuotation($productQuotations: [ID], $client: ID) {
    createQuotation(quotationInput: { productQuotations: $productQuotations, client: $client }) {
        _id
        productQuotations {
            _id
        }
        client {
            _id
        }
    }
}
`;



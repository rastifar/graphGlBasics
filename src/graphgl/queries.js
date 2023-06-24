import { gql } from "@apollo/client";
const GET_USER = gql`
  query getUser($id: ID!) {
    user(id: $id) {
      id
      name
      phone
      email
    }
  }
`;

const GET_USERS = gql`
  query {
    users {
      data {
        id
        name
        phone
        email
        todos {
          data {
            title
            completed
          }
        }
      }
    }
  }
`;

export {GET_USER,GET_USERS}
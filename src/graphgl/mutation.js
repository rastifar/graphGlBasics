import { gql } from "@apollo/client";

const UPDATE_USER = gql`
  mutation updateUser($id: ID!, $name: String!) {
    updateUser(id: $id, input: { name: $name }) {
      id
      name
      email
      todos {
        data {
          title
        }
      }
    }
  }
`;
const DELETE_USER = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(id: $id)
  }
`;
export { UPDATE_USER, DELETE_USER };

import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";

// const CREATE_USER = gql`
//   mutation {
//     createUser(
//       input: {
//         name: "sara"
//         username: "lk"
//         email: "s@yahoo.com"
//         phone: "01254"
//       }
//     ) {
//       id
//       name
//       email
//       albums {
//         data {
//           title
//         }
//       }
//     }
//   }
// `;

const CREATE_USER = gql`
  mutation createUser(
    $name: String!
    $username: String!
    $email: String!
    $phone: String!
  ) {
    createUser(
      input: { name: $name, username: $username, email: $email, phone: $phone }
    ) {
      id
      name
      email
      albums {
        data {
          title
        }
      }
    }
  }
`;
function CreateUser() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [createUser, { loading, data, error }] = useMutation(CREATE_USER, {
    variables: {
      name: name,
      username: username,
      email: email,
      phone: phone,
    },
  });
  //   const [createUser, { loading, data, error }] = useMutation(CREATE_USER, {
  //     variables: {
  //       name: "sara",
  //       username: "lk",
  //       email: "s@yahoo.com",
  //       phone: "01254",
  //     },
  //   });
  console.log({ loading, data, error });
  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input value={username} onChange={(e) => setUsername(e.target.value)} />
      <input value={phone} onChange={(e) => setPhone(e.target.value)} />
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={() => createUser()}>click</button>
    </div>
  );
}

export default CreateUser;

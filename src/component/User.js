import React, { useState } from "react";

import { useQuery } from "@apollo/client";
import { GET_USER } from "../graphgl/queries";
// const GET_USER = gql`
//   query {
//     user(id:1) {
//       data {
//         id
//         name
//         phone
//         email
//         todos {
//           data {
//             title
//             completed
//           }
//         }
//       }
//     }
//   }
// `;



function User() {
  const [id, setId] = useState(5);
  // const {  loading, error, data } = useQuery(GET_USER, {
  //   variables: { id: id },
  // });
  const { loading, error, data } = useQuery(GET_USER, {
    variables: { id: id },
  });
  console.log({ data, loading, error });
  return (
    <div>
      <input
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="ID"
      />
      <div>
        {data && (
          <>
            <h3>{data.user.name}</h3>
            <p>{data.user.email}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default User;

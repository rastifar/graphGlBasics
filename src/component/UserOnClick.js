import React, { useState } from "react";

import { useLazyQuery } from "@apollo/client";
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

function UserOnClick() {
  const [id, setId] = useState(5);
  // const {  loading, error, data } = useQuery(GET_USER, {
  //   variables: { id: id },
  // });
  const [getUser, { loading, data, error, called }] = useLazyQuery(GET_USER, {
    variables: { id: id },
  });
  console.log({ loading, data, error, called });
  const handleClick = () => {
    getUser();
  };

  return (
    <>
      <div>
        <input
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="ID"
        />
        <button onClick={handleClick}>Get user</button>
      </div>
      <div>
        {loading && <h3>loading ....</h3>}
        {error && <h3>error</h3>}
        {data && (
          <>
            <h3>{data.user.name}</h3>
            <p>{data.user.email}</p>
          </>
        )}
      </div>
    </>
  );
}

export default UserOnClick;

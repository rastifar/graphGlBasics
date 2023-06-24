import React from "react";
import { useQuery } from "@apollo/client";
import { GET_USERS } from "../graphgl/queries";

function Users() {
  // const response = useQuery(GET_USERS);
  const { data, loading, error } = useQuery(GET_USERS);

  if (loading) return <h3>loading ....</h3>;
  if (error) return <h3>error</h3>;

  return (
    <div>
      {data.users.data.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default Users;

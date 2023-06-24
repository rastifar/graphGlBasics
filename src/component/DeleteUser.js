import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { DELETE_USER } from "../graphgl/mutation";

function DeleteUser() {
  const [id, setID] = useState("");

  const [createUser, { loading, data, error }] = useMutation(DELETE_USER, {
    variables: {
      id: id,
    },
  });
  
  console.log({ loading, data, error });
  return (
    <div>
      <input value={id} onChange={(e) => setID(e.target.value)} />
      <button onClick={() => createUser()}>click</button>
    </div>
  );
}

export default DeleteUser;

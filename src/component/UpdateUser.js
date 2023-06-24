import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_USER } from "../graphgl/mutation";

function UpdateUser() {
  const [name, setName] = useState("");
  const [id, setID] = useState("");

  const [updateUser, { loading, data, error }] = useMutation(UPDATE_USER, {
    variables: {
      id: id,
      name: name,
    },
  });

  console.log({ loading, data, error });
  return (
    <div>
      <input value={id} onChange={(e) => setID(e.target.value)} />
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => updateUser()}>click</button>
    </div>
  );
}

export default UpdateUser;

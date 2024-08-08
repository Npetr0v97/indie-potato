"use client";

import axios from "axios";

function HelloWorld() {
  const controller = new AbortController();
  const signal = controller.signal;
  async function onClickHandler() {
    const options = {
      method: "GET",
      url: "/api/chores",
      signal,
    };

    try {
      const response = await axios.request(options);

      if (response.status !== 200) {
        throw new Error("Failed to fetch Chores");
      }
      const chores = response.data.chores;

      console.log(chores);
    } catch (error) {
      console.log(error);
    }
  }

  async function onClickHandlerCreate() {
    const options = {
      method: "POST",
      url: "/api/chores",
      data: { name: "Create via API" },
      signal,
    };

    try {
      const response = await axios.request(options);

      if (response.status !== 200) {
        throw new Error("Failed to fetch create a Chore");
      }
      const chore = response.data.createdChore;

      console.log(chore);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <button onClick={onClickHandler}>Get chores</button>
      <button onClick={onClickHandlerCreate}>Create a chore</button>
    </div>
  );
}

export default HelloWorld;

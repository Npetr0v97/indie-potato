"use server";

import PostModel from "@/models/postModel";
import connectDB from "@/config/database";

function HelloWorld() {
  async function onClickHandler() {
    try {
      await connectDB();
      const data = JSON.parse(JSON.stringify(await PostModel.find()));

      // throw new Error('Error!')

      return { data };
    } catch (error) {
      return { errMsg: error.message };
    }
  }
  return <button onClick={onClickHandler}>Press me</button>;
}

export default HelloWorld;

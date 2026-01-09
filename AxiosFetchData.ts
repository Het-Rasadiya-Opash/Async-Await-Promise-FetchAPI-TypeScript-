import axios from "axios";

type User = {
  id: number;
  name: string;
  email: string;
};

async function getUserById(id: number): Promise<User> {
  console.log("Loading...");

  try {
    const response = await axios.get<User>(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    return response.data;
  } catch {
    throw new Error("User not found");
  } finally {
    console.log("Done");
  }
}

getUserById(1)
  .then((user) => console.log(user))
  .catch((err) => console.error(err.message));

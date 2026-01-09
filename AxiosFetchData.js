import axios from "axios";
async function getUserById(id) {
    console.log("Loading...");
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        return response.data;
    }
    catch {
        throw new Error("User not found");
    }
    finally {
        console.log("Done");
    }
}
getUserById(1)
    .then((user) => console.log(user))
    .catch((err) => console.error(err.message));
//# sourceMappingURL=AxiosFetchData.js.map
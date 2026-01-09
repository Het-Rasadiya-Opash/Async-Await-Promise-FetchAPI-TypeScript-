async function getUserById(id) {
    console.log("Loading...");
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        if (!response.ok) {
            throw new Error("User not found");
        }
        const user = await response.json();
        return user;
    }
    finally {
        console.log("Done");
    }
}
getUserById(1)
    .then((user) => {
    console.log("User Info:");
    console.log("Name:", user.name);
    console.log("Username:", user.username);
    console.log("Email:", user.email);
})
    .catch((error) => {
    console.error("Error:", error.message);
});
export {};
//# sourceMappingURL=FetchUserById.js.map
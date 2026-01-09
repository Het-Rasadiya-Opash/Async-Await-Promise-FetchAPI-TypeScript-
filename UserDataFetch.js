async function fetchUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
        throw new Error("Failed to fetch User");
    }
    const users = await response.json();
    return users;
}
async function displayUser() {
    try {
        const users = await fetchUsers();
        users.forEach((user) => {
            console.log(`${user.id} - ${user.name} - ${user.email}`);
        });
    }
    catch (error) {
        if (error instanceof Error) {
            console.log("Error", error.message);
        }
    }
}
displayUser();
export {};
//# sourceMappingURL=UserDataFetch.js.map
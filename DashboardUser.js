const input = document.querySelector("#userId");
const button = document.querySelector("#search");
const result = document.querySelector("#result");
button.addEventListener("click", async () => {
    const id = Number(input.value);
    result.textContent = "Loading...";
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        if (!res.ok)
            throw new Error("User not found");
        const user = await res.json();
        result.innerHTML = `
      <h3>${user.name}</h3>
      <p>${user.email}</p>
    `;
    }
    catch (err) {
        result.textContent = "Error: Invalid User ID";
    }
});
export {};
//# sourceMappingURL=DashboardUser.js.map
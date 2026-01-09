type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

const input = document.querySelector("#userId") as HTMLInputElement;
const button = document.querySelector("#search") as HTMLButtonElement;
const result = document.querySelector("#result") as HTMLDivElement;

button.addEventListener("click", async () => {
  const id = Number(input.value);
  result.textContent = "Loading...";

  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    if (!res.ok) throw new Error("User not found");

    const user: User = await res.json();
    result.innerHTML = `
      <h3>${user.name}</h3>
      <p>${user.email}</p>
    `;
  } catch (err) {
    result.textContent = "Error: Invalid User ID";
  }
});
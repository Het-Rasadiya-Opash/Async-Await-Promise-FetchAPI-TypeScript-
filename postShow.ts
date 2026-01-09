type Post = {
  id: number;
  title: string;
  body: string;
};

const button = document.getElementById("loadPosts") as HTMLButtonElement;
const postsList = document.getElementById("posts") as HTMLUListElement;
const status = document.getElementById("status") as HTMLDivElement;

button.addEventListener("click", async () => {
  status.textContent = "Loading...";
  postsList.innerHTML = "";

  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts: Post[] = await res.json();

    posts.slice(0, 10).forEach(post => {
      const li = document.createElement("li");
      li.textContent = post.title;
      postsList.appendChild(li);
    });
  } catch (error) {
    status.textContent = "Error loading posts";
  } finally {
    status.textContent = "Done";
  }
});
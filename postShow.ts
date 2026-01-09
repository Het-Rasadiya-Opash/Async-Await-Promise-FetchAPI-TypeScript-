type Post = {
  id: number;
  title: string;
  body: string;
};

const button = document.getElementById("loadPosts") as HTMLButtonElement;
const postsList = document.getElementById("posts") as HTMLUListElement;

button.addEventListener("click", async () => {
  postsList.innerHTML = "";

  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts: Post[] = await res.json();

    posts.slice(0, 5).forEach((post) => {
      const li = document.createElement("li");
      li.textContent = post.title;
      postsList.appendChild(li);
    });
  } catch (error) {
    console.log(error);
  }
});

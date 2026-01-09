const button = document.getElementById("loadPosts");
const postsList = document.getElementById("posts");
const status = document.getElementById("status");
button.addEventListener("click", async () => {
    status.textContent = "Loading...";
    postsList.innerHTML = "";
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const posts = await res.json();
        posts.slice(0, 10).forEach(post => {
            const li = document.createElement("li");
            li.textContent = post.title;
            postsList.appendChild(li);
        });
    }
    catch (error) {
        status.textContent = "Error loading posts";
    }
    finally {
        status.textContent = "Done";
    }
});
export {};
//# sourceMappingURL=postShow.js.map
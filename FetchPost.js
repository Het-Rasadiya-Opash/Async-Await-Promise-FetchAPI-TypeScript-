async function fetchPosts() {
    console.log("Loading...");
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) {
            throw new Error("Failed to fetch posts");
        }
        const posts = await response.json();
        posts.forEach((post) => {
            console.log("Title:", post.title);
            console.log("Body:", post.body);
            console.log("--------------------");
        });
    }
    catch (error) {
        console.error("Error:", error);
    }
    finally {
        console.log("Done");
    }
}
fetchPosts();
export {};
//# sourceMappingURL=FetchPost.js.map
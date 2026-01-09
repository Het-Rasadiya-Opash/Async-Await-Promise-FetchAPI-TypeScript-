type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

async function fetchPosts(): Promise<void> {
  console.log("Loading...");

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }

    const posts: Post[] = await response.json();

    posts.forEach((post) => {
      console.log("Title:", post.title);
      console.log("Body:", post.body);
      console.log("--------------------");
    });
  } catch (error) {
    console.error("Error:", error);
  } finally {
    console.log("Done");
  }
}

fetchPosts();

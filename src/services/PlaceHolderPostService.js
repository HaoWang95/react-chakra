export const getPlaceholderPosts = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_page=0&&_limit=10"
  );
  return response.json();
};

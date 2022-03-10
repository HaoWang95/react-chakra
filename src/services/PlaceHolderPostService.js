export const getPlaceholderPosts = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_page=0&&_limit=10"
  );
  return response.json();
};

export const getPlaceHolderPostsLimits = async (page, limit = 2) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&&_limit=${limit}`
  );

  return response.json();
};

export const getPlaceholderPostComments = async (postId) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
  );
  return response.json();
};

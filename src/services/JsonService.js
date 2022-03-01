
const getPosts = async () => {
    const response = await fetch('https://api.github.com/repos/tannerlinsley/react-query');
    return response.json();
}

export {
    getPosts,
};
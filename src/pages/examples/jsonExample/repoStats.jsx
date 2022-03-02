import { Center, Heading, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import { useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const getRepoData = async () => {
  const response = await fetch(
    "https://api.github.com/repos/tannerlinsley/react-query"
  );
  return response.json();
};

// It seems the queryClient and the useQuery should be used in different components
//const queryClient = new QueryClient();

let RepoData = () => {
  const { isLoading, error, data } = useQuery("repoData", getRepoData);
  if (isLoading) return <Spinner />;

  if (error) return "An error has occurred: " + error.message;

  return (
    <Center>
      <div>
        <Heading as={"h2"}>{data.name}</Heading>
        <Text fontWeight={"bold"}>{data.description}</Text>
        <strong>👀 {data.subscribers_count}</strong>{" "}
        <strong>✨ {data.stargazers_count}</strong>{" "}
        <strong>🍴 {data.forks_count}</strong>
        <ReactQueryDevtools />
      </div>
    </Center>
  );
};

let RepoStats = () => {
  return (
      <RepoData />
  );
};

export default RepoStats;

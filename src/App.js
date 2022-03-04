import React, { Suspense } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";
import { Route, Routes } from "react-router-dom";
import LoadingPage from "./pages/loading.page";
import PostList from "./pages/examples/post/postlist.page";
import RegisterForm from "./pages/examples/FormikExample/RegisterForm.page";
import PostItemPage from "./pages/examples/jsonExample/postItemWithComments";

const HomePage = React.lazy(() => import("./pages/home.page"));
const AboutPage = React.lazy(() => import("./pages/about.page"));
const ExamplePage = React.lazy(() => import("./pages/examples/example.page"));
const NotFoundPage = React.lazy(() => import("./pages/notfound.page"));
const CounterRedux = React.lazy(() =>
  import("./pages/examples/counterReduxExample/globalCounter")
);
const AddPostForm = React.lazy(() =>
  import("./pages/examples/post/addPostForm")
);
const RepoStats = React.lazy(() =>
  import("./pages/examples/jsonExample/repoStats")
);
const PostListWrapper = React.lazy(() => import("./pages/examples/jsonExample/jsonPosts"))

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<LoadingPage />}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path="about"
          element={
            <Suspense fallback={<LoadingPage />}>
              <AboutPage />
            </Suspense>
          }
        />
        <Route
          path="examples"
          element={
            <Suspense fallback={<LoadingPage />}>
              <ExamplePage />
            </Suspense>
          }
        >
          <Route
            path="counter"
            element={
              <Suspense fallback={<LoadingPage />}>
                <CounterRedux />
              </Suspense>
            }
          />
          <Route
            path="posts"
            element={
              <Suspense fallback={<LoadingPage />}>
                <PostList />
              </Suspense>
            }
          />
          <Route
            path="addPost"
            element={
              <Suspense fallback={<LoadingPage />}>
                <AddPostForm />
              </Suspense>
            }
          />
          <Route
            path="registerFormik"
            element={
              <Suspense fallback={<LoadingPage />}>
                <RegisterForm />
              </Suspense>
            }
          />
          <Route
            path="reactQueryRepo"
            element={
              <Suspense fallback={<LoadingPage />}>
                <RepoStats />
              </Suspense>
            }
          />
          <Route
            path="jsonPosts"
            element={
              <Suspense fallback={<LoadingPage />}>
                <PostListWrapper />
              </Suspense>
            }
          />
          <Route 
            path="jsonPosts/:postId"
            element={
              <Suspense fallback={<LoadingPage />}>
                <PostItemPage />
              </Suspense>
            }
          />
        </Route>
        <Route
          path="*"
          element={
            <Suspense fallback={<LoadingPage />}>
              <NotFoundPage />
            </Suspense>
          }
        />
      </Routes>
    </ChakraProvider>
  );
}

export default App;

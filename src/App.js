import React from "react";
import {
  ChakraProvider
} from '@chakra-ui/react';
import theme from "./theme/theme";
import { Route, Routes } from "react-router-dom";
import ExamplePage from "./pages/examples/example.page";
import NotFoundPage from "./pages/notfound.page";
import LoadingPage from "./pages/loading.page";
import CounterRedux from "./pages/examples/counterReduxExample/globalCounter";
const HomePage = React.lazy(() => import("./pages/home.page"));
const AboutPage = React.lazy(() => import("./pages/about.page"));


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path="/" element={
          <React.Suspense fallback={<LoadingPage />}>
            <HomePage />
          </React.Suspense>
        } />
        <Route path="about" element={
          <React.Suspense fallback={<LoadingPage />}>
            <AboutPage />
          </React.Suspense>
        }/>
        <Route path="examples" element={<ExamplePage />}>
          <Route path="counter" element={<CounterRedux />}/>
        </Route>
        <Route path="*" element={
          <React.Suspense fallback={<LoadingPage />}>
            <NotFoundPage />
          </React.Suspense>
        } />
      </Routes>
    </ChakraProvider>
  );
}

export default App;

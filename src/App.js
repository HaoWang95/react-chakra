import React from "react";
import {
  ChakraProvider,theme
} from '@chakra-ui/react';
import HomePage from "./pages/home.page";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./pages/about.page";
import ExamplePage from "./pages/example.page";
import NotFoundPage from "./pages/notfound.page";
import LoadingPage from "./pages/loading.page";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={
          <React.Suspense fallback={<LoadingPage />}>
            <AboutPage />
          </React.Suspense>
        }/>
        <Route path="examples" element={
          <React.Suspense fallback={<LoadingPage />}>
            <ExamplePage />
          </React.Suspense>
        } />
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

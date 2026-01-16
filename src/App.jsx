import React, { lazy, Suspense, useState, useEffect } from "react";
import './App.css';
import { AnimatePresence, motion } from "framer-motion";
import { createBrowserRouter, RouterProvider, Outlet, useLocation } from "react-router-dom";

// Import your preloader here
import { Header, Footer, NotFound, Loading } from "./components";

// Lazy load pages
const Home = lazy(() => import("./pages/index"));

const Layout = () => {
  // 1. Get the current location object
  const location = useLocation();

  return (
    <div className="app 2xl:max-w-[2500px] mx-auto min-h-screen flex flex-col justify-between">
      <Header />
      <AnimatePresence mode="wait">
  <motion.div
    key={location.pathname}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    className="w-full h-full"
  >
    <Outlet />
  </motion.div>
</AnimatePresence>

      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<Loading />}>
        <NotFound />
      </Suspense>
    ),
  },
]);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000); 
    };

    fakeDataFetch();
  }, []);

  return (
    <>
      
      <AnimatePresence>
        {isLoading && (
           <Loading key="preloader" />
        )}
      </AnimatePresence>
      {!isLoading && (
         <motion.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.0, ease: "easeInOut" }} 
            className="w-full min-h-screen"
         >
           <RouterProvider router={router} />
         </motion.div>
      )}
    </>
  );
}

export default App;
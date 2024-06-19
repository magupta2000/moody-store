import { useLocation } from "react-router";
import React, { Suspense, useEffect } from "react";
import Loader from "./components/Loader/Loader";

function App() {
  const RootRouting = React.lazy(() => import('./Routing/RootRouting'))
  const pathname = useLocation();

  useEffect(() => {
    window.scroll(0,0);
  }, [pathname])
  return (
    <Suspense fallback={<Loader />}>
      <RootRouting />
    </Suspense>
  );
}

export default App;

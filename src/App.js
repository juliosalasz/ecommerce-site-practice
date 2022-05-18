import { Routes, Route } from "react-router-dom";
import SignInAndSignUpPage from "./routes/signInAndSignUpPage/signInAndSignUpPage";
import Spinner from "./components/spinner/spinner";
import { useEffect, lazy, Suspense } from "react";
import { useDispatch } from "react-redux";
import GlobalStyles from "./globalStyles";
import { Fragment } from "react";

import { checkUserSession } from "./store/user/user.action";

const Shop = lazy(() => import("./routes/shop/Shop"));
const CheckOut = lazy(() => import("./routes/checkOut/checkOut"));
const Navigation = lazy(() => import("./routes/navigation/Navigation"));
const HomePage = lazy(() => import("./routes/homePage/HomePage"));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <Fragment>
      <GlobalStyles />
      <Suspense fallback={<Spinner />}>
        <div className="App">
          <Routes>
            <Route path="/" element={<Navigation />}>
              <Route index element={<HomePage />} />
              <Route path="shop/*" element={<Shop />} />
              <Route path="sign-in" element={<SignInAndSignUpPage />} />
              <Route path="checkout" element={<CheckOut />} />
            </Route>
          </Routes>
        </div>
      </Suspense>
    </Fragment>
  );
};

export default App;

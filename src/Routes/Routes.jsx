import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Error from "../pages/Error/Error";
import MyProfile from "../pages/MyProfile/MyProfile";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";
import AddArticles from "../pages/AddArticles/AddArticles";
import AllArticles from "../pages/AllArticles/AllArticles";
import Subscription from "../pages/Subscription/Subscription";
import MyArticles from "../pages/MyArticles/MyArticles";
import PremiumArticles from "../pages/PremiumArticles/PremiumArticles";
import Dashboard from "../layout/Dashboard";
import AllUser from "../pages/Dashboard/AllUser/AllUser";
import AllArticle from "../pages/Dashboard/AllArticles/AllArticle";
import AddPublisher from "../pages/Dashboard/AddPublisher/AddPublisher";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/profile",
        element: <MyProfile />,
      },
      {
        path: "/update-profile",
        element: <UpdateProfile />,
      },
      {
        path: "/Add Articles",
        element: <AddArticles />,
      },
      {
        path: "/All Articles",
        element: <AllArticles />,
      },
      {
        path: "/Subscription",
        element: <Subscription />,
      },
      {
        path: "/My Articles",
        element: <MyArticles />,
      },
      {
        path: "/Premium Articles",
        element: <PremiumArticles />,
      },
      {
        path: "/Dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "/Dashboard/allUser",
            element: <AllUser />,
          },
          {
            path: "/Dashboard/allArticle",
            element: <AllArticle />,
          },
          {
            path: "/Dashboard/addPublisher",
            element: <AddPublisher />,
          },
        ],
      },
    ],
  },
]);

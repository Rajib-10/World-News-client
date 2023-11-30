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
import ArticleDetails from "../pages/ArticleDetails/ArticleDetails";
import UpdateArticle from "../pages/UpdateArticle/UpdateArticle";
import PrivateRouter from "./PrivateRouter/PrivateRouter";
import Payment from "../pages/Payment/Payment";
import AdminRoute from "./PrivateRouter/AdminRoute";
import DashboardHome from "../pages/Dashboard/DashboardHome/DashboardHome";

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
        element: (
          <PrivateRouter>
            <MyProfile />
          </PrivateRouter>
        ),
      },
      {
        path: "/update-profile",
        element: <UpdateProfile />,
      },
      {
        path: "/Add Articles",
        element: (
          <PrivateRouter>
            <AddArticles />
          </PrivateRouter>
        ),
      },
      {
        path: "/All Articles",
        element: <AllArticles />,
      },
      {
        path: "/Subscription",
        element: (
          <PrivateRouter>
            <Subscription />
          </PrivateRouter>
        ),
      },
      {
        path: "/My Articles",
        element: (
          <PrivateRouter>
            <MyArticles />
          </PrivateRouter>
        ),
      },
      {
        path: "/articleDetails/:id",
        element: (
          <PrivateRouter>
            <ArticleDetails />
          </PrivateRouter>
        ),
      },
      {
        path: "/Premium Articles",
        element: (
          <PrivateRouter>
            <PremiumArticles />
          </PrivateRouter>
        ),
      },
      {
        path: "/updateArticle/:id",
        element: <UpdateArticle />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
      {
        path: "/Dashboard",
        element: (
          <PrivateRouter>
            <Dashboard />
          </PrivateRouter>
        ),
        children: [
          {
            path: "/Dashboard",
            element:<DashboardHome />
          },

          {
            path: "/Dashboard/allUsers",
            element: <AdminRoute><AllUser /></AdminRoute>,
          },
          {
            path: "/Dashboard/allArticle",
            element: <AdminRoute><AllArticle /></AdminRoute>,
          },
          {
            path: "/Dashboard/addPublisher",
            element: <AdminRoute><AddPublisher /></AdminRoute>,
          },
        ],
      },
    ],
  },
]);

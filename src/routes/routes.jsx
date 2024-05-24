import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import DashbaordLayout from "../layouts/DashbaordLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import DashboardHome from "../pages/dashboard/DashboardHome";
import ManageAllRecipe from "../pages/dashboard/ManageAllRecipe";
import AddRecipe from "../pages/dashboard/AddRecipe";
import EditRecipe from "../pages/dashboard/EditRecipe";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
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
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashbaordLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
      {
        path: "manage-recipes",
        element: <ManageAllRecipe />,
      },
      {
        path: "add-recipe",
        element: <AddRecipe />,
      },
      {
        path: "edit-recipe/:id",
        element: <EditRecipe />,
      },
    ],
  },
]);

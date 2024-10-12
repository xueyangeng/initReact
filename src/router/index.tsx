import React, { FC, useCallback, useEffect, useState } from "react";
import Login from "@/pages/login";
import { useRoutes, RouteObject } from "react-router-dom";
import AuthEelement from "./auth";
import Creation from "@/pages/creation";
import List from "@/pages/list";

export type TRouteConfig = {
  path: string;
  element: React.ReactNode;
  needAuth?: boolean | undefined;
  children?: TRouteConfig[];
};
const routesConf: RouteObject[] = [
  {
    path: "/",
    element: <AuthEelement element={<List />} />
  },
  { path: "/creation/:creation_id/:chapter_id", element: <Creation /> },
  { path: "/creation/:creation_id", element: <Creation /> },
  { path: "/login", element: <Login /> },
  {
    path: "*",
    element: <AuthEelement element={<List />} />
  }
];

const RenderRouter: FC = () => {
  const routes = useRoutes(routesConf);
  return routes;
};
export default RenderRouter;

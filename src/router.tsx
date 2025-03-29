import { Route, Routes } from "react-router-dom";
import { AboutScreen, HomeScreen } from "./screens";
import { RoutingEnum } from "./utils";

export const Router = () => {
  return (
    <Routes>
      <Route index element={<HomeScreen />} />
      <Route path={RoutingEnum.aboutRoute} element={<AboutScreen />} />
    </Routes>
  );
};

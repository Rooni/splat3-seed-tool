import {HashRouter, Route, Routes} from "react-router-dom";
import {Layout} from "./components/layout/Layout.tsx";
import App from "./App.tsx";
import {GearDirectory} from "./pages/GearDirectory.tsx";
import {GearRefine} from "./pages/GearRefine.tsx";
import {GearPlanner} from "./pages/GearPlanner.tsx";
import {SeedRecovery} from "./pages/SeedRecovery.tsx";

export const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route index element={<App/>}></Route>
          <Route path={"gear/"} element={<GearDirectory/>}></Route>
          <Route path={"gear/:gearId"} element={<GearRefine/>}></Route>
          <Route path={"planner/"} element={<GearPlanner/>}></Route>
          <Route path={"planner/:gearId"} element={<GearPlanner/>}></Route>
          <Route path={"recover/"} element={<SeedRecovery/>}></Route>
          <Route path={"*"} element={"Soon"}></Route>
        </Route>
      </Routes>
    </HashRouter>
  )
}
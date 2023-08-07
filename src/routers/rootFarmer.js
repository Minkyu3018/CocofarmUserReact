import { createBrowserRouter } from "react-router-dom";
import BasicLayout from "../layouts/farmers/BasicLayout";

import FarmerHomePage from "../pages/farmers/FarmerHomePage";
import FarmerDiaryPage from "../pages/farmers/FarmerDiaryPage";
import FarmerQAPage from "../pages/farmers/FarmerQAPage";
import FarmerQAReadPage from "../pages/farmers/FarmerQAReadPage";
import FarmerSubListPage from "../pages/farmers/FarmerSubListPage";
import FarmerSubReadPage from "../pages/farmers/FarmerSubReadPage";
import FarmerDiaryReadPage from "../pages/farmers/FarmerDiaryReadPage";


const router2 = createBrowserRouter([
  {
      path:"",
      element: <BasicLayout></BasicLayout>
  },
  {
      path:"/farmer/home",
      element: <FarmerHomePage></FarmerHomePage>
  },
  {
    path:"/farmer/diary",
    element: <FarmerDiaryPage></FarmerDiaryPage>
  },
  {
    path:"/farmer/diary/read/:bno",
    element: <FarmerDiaryReadPage></FarmerDiaryReadPage>
  },
  {
    path:"/farmer/qa",
    element: <FarmerQAPage></FarmerQAPage>
  },
  {
    path:"/farmer/qa/read/:bno",
    element: <FarmerQAReadPage></FarmerQAReadPage>
  },  
  {
    path:"/farmer/subscriberlist",
    element: <FarmerSubListPage></FarmerSubListPage>
  },
  {
    path:"/farmer/subscriberlist/read/:mno",
    element: <FarmerSubReadPage></FarmerSubReadPage>
  },
])

export default router2;
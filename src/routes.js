// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import Notifications from "@material-ui/icons/Notifications";
import TableChartIcon from '@material-ui/icons/TableChart';
// core components/views for Admin layout
import DashboardPage from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import TableList from "views/TableList/TableList.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "User Profile",
    icon: Person,
    component: UserProfile,
    layout: "/admin",
  },
   {
    path: "/table",
    name: "Watchlist",
    icon: TableChartIcon,
    component: TableList,
    layout: "/admin",
  },
];

export default dashboardRoutes;

// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
// core components/views for Admin layout
import Maps from "views/Maps/Maps.js";
import Blog from "views/blog/Blog.js";
import Scan from "views/scan/scan.js";

const dashboardRoutes = [
  {
    path: "/maps",
    name: "Maps",
    icon: LocationOn,
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/blog",
    name: "Details",
    icon: LibraryBooksIcon,
    component: Blog,
    layout: "/admin"
  },
  {
    path: "/scan",
    name: "Scan",
    icon: AspectRatioIcon,
    component: Scan,
    layout: "/admin"
  },
];

export default dashboardRoutes;

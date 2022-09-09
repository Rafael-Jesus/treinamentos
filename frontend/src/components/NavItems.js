import * as Icons from "react-icons/fa";

import * as IconsMD from "react-icons/md";

export const navItems = [
  {
    id: 1,
    title: "Dashboard",
    path: "./",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <IconsMD.MdDashboard />,
  },
  {
    id: 2,
    title: "Treinamentos",
    path: "./treinamentos",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <Icons.FaBriefcase />,
  },
  {
    id: 3,
    title: "Usuários",
    path: "./usuarios",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <Icons.FaUsers/>,
  },
  // {
  //   id: 4,
  //   title: "Contact Us",
  //   path: "./contactus",
  //   nName: "nav-item",
  //   sName: "sidebar-item",
  //   icon: <Icons.FaPhone />,
  // },
];

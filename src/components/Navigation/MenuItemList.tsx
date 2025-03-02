import { CiSettings } from "react-icons/ci";
import { FaProductHunt } from "react-icons/fa";
import { IoHomeOutline, IoLogoBuffer } from "react-icons/io5";
import { MdOutlineDashboard } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";

 export const menuItems = [
  {
    icons: <IoHomeOutline size={30} />,
    label: 'Home',
    path: '/'
  },
  {
    icons: <FaProductHunt size={30} />,
    label: 'Products',
    path: '/products'
  },
  {
    icons: <MdOutlineDashboard size={30} />,
    label: 'Dashboard',
    path: '/dashboard'
  },
  {
    icons: <CiSettings size={30} />,
    label: 'Settings',
    path: '/settings'
  },
  {
    icons: <IoLogoBuffer size={30} />,
    label: 'Log',
    path: '/log'
  },
  {
    icons: <TbReportSearch size={30} />,
    label: 'Report',
    path: '/report'
  }
 ]
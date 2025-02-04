import icons from "./icons";
const { MdOutlineVideoLibrary, MdOutlineFeed, TbChartArcs, FaChartColumn } = icons;
export const SidebarMenu = [
  {
    path: "personal",
    text: "Mymusic",
    icons: <MdOutlineVideoLibrary size={24} />,
  },
  {
    path: "",
    text: "Discover",
    icons: <TbChartArcs size={24} />,
    end: true,
  },
  {
    path: "zingchart",
    text: "Zingchart",
    icons: <FaChartColumn size={24} />,
  },
  {
    path: "follow",
    text: "Follow",
    icons: <MdOutlineFeed size={24} />,
  },
];
export default SidebarMenu;

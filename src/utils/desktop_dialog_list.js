import { BiSort } from "react-icons/bi";
import { BsDisplay } from "react-icons/bs";
import { FiEdit2 } from "react-icons/fi";
import { HiOutlineTerminal, HiOutlineViewGrid } from "react-icons/hi";
import {
  MdAddCircleOutline,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { RiShareBoxLine } from "react-icons/ri";

export const desktop_dialog_list = [
  {
    name: "View",
    suffixIcon: <MdOutlineKeyboardArrowRight />,
    prefixIcon: <HiOutlineViewGrid />,
  },
  {
    name: "Sort by",
    suffixIcon: <MdOutlineKeyboardArrowRight />,
    prefixIcon: <BiSort />,
  },
  {
    name: "Paste shortcut",
    suffixIcon: null,
    prefixIcon: null,
  },
  {
    name: "New item",
    suffixIcon: <MdOutlineKeyboardArrowRight />,
    prefixIcon: <MdAddCircleOutline />,
  },
  {
    name: "Display setting",
    suffixIcon: null,
    prefixIcon: <BsDisplay />,
  },
  {
    name: "Personalize",
    suffixIcon: <MdOutlineKeyboardArrowRight />,
    prefixIcon: <FiEdit2 />,
  },

  {
    name: "Open Windows in terminal",
    suffixIcon: null,
    prefixIcon: <HiOutlineTerminal />,
  },
  {
    name: "Show more option",
    suffixIcon: null,
    prefixIcon: <RiShareBoxLine />,
  },
];

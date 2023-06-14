import { BsBell, BsBookmark, BsGrid } from "react-icons/bs";

export const navLinks = [
  {
    id: "1",
    name: "Задачи",
    path: "/",
    icon: BsGrid,
  },
  {
    id: "2",
    name: "Уведомления",
    path: "/notifications",
    icon: BsBell,
  },
  {
    id: "3",
    name: "Избранное",
    path: "/favorites",
    icon: BsBookmark,
  },
];

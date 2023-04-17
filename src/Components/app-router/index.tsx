import { Routes, Route } from "react-router-dom";
import Main from "../../Pages/main";
import Notifications from "../../Pages/notifications";
import Favorites from "../../Pages/favorites";
import Login from "../../Pages/login";
import Board from "../../Pages/board";

type Props = {};

const AppRoter = (props: Props) => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/login" element={<Login />} />
      <Route path="/board/:id" element={<Board />} />
    </Routes>
  );
};

export default AppRoter;

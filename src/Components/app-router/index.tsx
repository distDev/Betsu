import { Routes, Route } from "react-router-dom";
import Main from "../../Pages/main";
import Notifications from "../../Pages/notifications";
import Favorites from "../../Pages/favorites";
import Login from "../../Pages/login";


type Props = {};

const AppRoter = (props: Props) => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRoter;

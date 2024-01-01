import { MdOutlineLogout } from "react-icons/md";

import ButtonIcon from "../../ui/ButtonIcon";
import { useLogout } from "./useLogout";

function Logout() {
  const { isLoading, logout } = useLogout();

  return (
    <ButtonIcon onClick={logout} disabled={isLoading}>
      <MdOutlineLogout />
    </ButtonIcon>
  );
}

export default Logout;

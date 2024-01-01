import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

import ButtonIcon from "./ButtonIcon";
import { useDarkMode } from "../features/contexts/DarkModeContext";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <ButtonIcon onClick={toggleDarkMode}>
      {isDarkMode ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
    </ButtonIcon>
  );
}

export default DarkModeToggle;

import { useEffect, useState } from "react";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { UserSettingsType } from "../types/userSetting";
import { changeColorMode, updateMode } from "./utils/header";

const Header = () => {
  const [isLightMode, setIsLightMode] = useState(true);
  // 나중에 state로 변경될 듯
  let userSettings: UserSettingsType = { mode: "light" };

  // 처음 로드될 때 로컬 스토리지를 확인해서 모드에 맞게 html class 변경
  useEffect(() => {
    // localStorage에서 userSettings를 가져옴
    const settings = localStorage.getItem("userSettings");
    // userSettings가 있다면 그중에서 mode만 추출 없으면 빈 문자열
    const mode = settings ? JSON.parse(settings).mode : "";

    // mode가 light와 같지 않아야 true임
    const isMode = mode !== "light";

    //localStorage에 저장된 값이 있는 경우
    if (mode) {
      updateMode(isMode, setIsLightMode, userSettings);
    }

    // localStorage에 저장된 값이 없는 경우 기본 값이 적용됨
  }, []);

  return (
    <header className="header">
      <div className="header-container">
        <button
          className="header-container-item"
          onClick={() =>
            changeColorMode(isLightMode, setIsLightMode, userSettings)
          }
        >
          <i className="icon">
            {isLightMode ? <MdDarkMode /> : <MdOutlineLightMode />}
          </i>
        </button>
      </div>
    </header>
  );
};

export default Header;

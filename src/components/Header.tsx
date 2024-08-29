import { useState } from "react";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

const Header = () => {
  const [isLightMode, setIsLightMode] = useState(true);

  // 버튼을 클릭하면 상태를 업데이트하고 html class를 변경함
  const changeColorMode = () => {
    setIsLightMode(!isLightMode);
    updateMode(isLightMode);
  };

  // html class 변경
  const updateMode = (isLightMode: boolean) => {
    // 현재 상태가 라이트 모드인 경우 : 다크 모드로 변경 (html에 class: dark 추가)
    if (isLightMode) {
      document.documentElement.classList.add("dark");
    } else {
      // 현재 상태가 다크 모드인 경우 : 라이트 모드로 변경 (html에 class: dark 삭제)
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <button className="header-container-item" onClick={changeColorMode}>
          <i className="icon">
            {isLightMode ? <MdDarkMode /> : <MdOutlineLightMode />}
          </i>
        </button>
      </div>
    </header>
  );
};

export default Header;

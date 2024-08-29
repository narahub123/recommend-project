import { useEffect, useState } from "react";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

const Header = () => {
  const [isLightMode, setIsLightMode] = useState(true);

  // 처음 로드될 때 로컬 스토리지를 확인해서 모드에 맞게 html class 변경
  useEffect(() => {
    const mode = localStorage.getItem("mode");
    const isMode = mode !== "light"; // true인 경우 dark모드로 변경됨

    //localStorage에 저장된 값이 있는 경우 
    if (mode) {
      updateMode(isMode);
      setIsLightMode(!isMode);
    }

    // localStorage에 저장된 값이 없는 경우 기본 값이 적용됨 
  }, []);

  // 버튼을 클릭하면 상태를 업데이트하고 html class를 변경함
  const changeColorMode = () => {
    setIsLightMode(!isLightMode);
    updateMode(isLightMode);
  };

  // html class 변경
  const updateMode = (isLightMode: boolean) => {
    // 현재 상태가 라이트 모드인 경우 : 다크 모드로 변경 (html에 class: dark 추가)
    if (isLightMode) {
      // true인 경우 다크 모드로 변경
      document.documentElement.classList.add("dark");
      localStorage.setItem("mode", "dark");
    } else {
      // 현재 상태가 다크 모드인 경우 : 라이트 모드로 변경 (html에 class: dark 삭제)
      document.documentElement.classList.remove("dark");
      localStorage.setItem("mode", "light");
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

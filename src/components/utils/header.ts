import { UserSettingsType } from "../../types/userSetting";

// html class 변경
export const updateMode = (
  isLightMode: boolean,
  setIsLightMode: (value: boolean) => void,
  userSettings: UserSettingsType
) => {
  // 현재 상태가 라이트 모드인 경우 : 다크 모드로 변경 (html에 class: dark 추가)
  if (isLightMode) {
    // true인 경우 다크 모드로 변경
    document.documentElement.classList.add("dark");
    userSettings.mode = "dark";
    localStorage.setItem("userSettings", JSON.stringify(userSettings));
  } else {
    // 현재 상태가 다크 모드인 경우 : 라이트 모드로 변경 (html에 class: dark 삭제)
    document.documentElement.classList.remove("dark");
    userSettings.mode = "light";
    localStorage.setItem("userSettings", JSON.stringify(userSettings));
  }

  setIsLightMode(!isLightMode);
};

// 버튼을 클릭하면 상태를 업데이트하고 html class를 변경함
export const changeColorMode = (
  isLightMode: boolean,
  setIsLightMode: (value: boolean) => void,
  userSettings: UserSettingsType
) => {
  updateMode(isLightMode, setIsLightMode, userSettings);
};

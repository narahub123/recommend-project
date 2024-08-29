import { debounce } from "./debounce";
import { UserInfoType } from "../types/user";

// 아이디 유효성 검사
const checkUserId = (value: string) => {
  const messages = [];

  // 조건 확인
  if (value.length < 8) {
    messages.push(`아이디는 최소 8자 이상이어야 합니다.`);
  }
  if (!/[A-Za-z]/.test(value)) {
    messages.push(`영문자가 적어도 하나 포함되어야 합니다.`);
  }
  if (!/\d/.test(value)) {
    messages.push(`숫자가 적어도 하나 포함되어야 합니다.`);
  }
  if (!/[@$!%*#?&]/.test(value)) {
    messages.push(`특수문자 중 적어도 하나가 포함되어야 합니다.`);
  }

  // 모든 조건을 만족하는지 확인
  if (messages.length === 0) {
    return messages.join("");
  } else if (value.length === 0) {
    return "영문, 숫자, 특수문자를 적어도 1개 이상 필요합니다.";
  } else {
    return messages.join(" ");
  }
};

// 이메일 유효성 검사
const checkEmail = (value: string) => {
  const messages = [];

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    messages.push(`이메일 형식이 맞지 않습니다.`);
  }

  if (value.length === 0) {
    messages.push("");
  }
  // 모든 조건을 만족하는지 확인
  if (messages.length === 0) {
    return messages.join("");
  } else if (value.length === 0) {
    return "이메일 형식에 맞게 작성해주세요";
  } else {
    return messages.join(" ");
  }
};

// 유효성 검사
const checkPassword = (value: string) => {
  console.log("비밀번호", value);

  const messages = [];

  // 조건 확인
  if (value.length < 8) {
    messages.push(`비밀번호는 최소 8자 이상이어야 합니다.`);
  }
  if (!/[A-Za-z]/.test(value)) {
    messages.push(`영문자가 적어도 하나 포함되어야 합니다.`);
  }
  if (!/\d/.test(value)) {
    messages.push(`숫자가 적어도 하나 포함되어야 합니다.`);
  }
  if (!/[@$!%*#?&]/.test(value)) {
    messages.push(`특수문자 중 적어도 하나가 포함되어야 합니다.`);
  }

  // 모든 조건을 만족하는지 확인
  if (messages.length === 0) {
    return messages.join("");
  } else if (value.length === 0) {
    return "영문, 숫자, 특수문자를 적어도 1개 이상 필요합니다.";
  } else {
    return messages.join(" ");
  }
};

// 회원 가입 input 박스 입력 함수
const onChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  setValidationMessage: React.Dispatch<React.SetStateAction<UserInfoType>>,
  setIsValid: React.Dispatch<React.SetStateAction<boolean>>,
  userInfo: UserInfoType,
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfoType>>
) => {
  const { id, value } = e.target;

  console.log(id, value);

  let validation: string;

  if (id === "userId") {
    validation = checkUserId(value);
  } else if (id === "email") {
    validation = checkEmail(value);
  } else if (id === "password") {
    validation = checkPassword(value);
  }

  const newValidationMessage = (prev: any) => ({
    ...prev,
    [id]: validation,
  });

  // 유효성 검사 메시지 추가
  setValidationMessage(newValidationMessage);

  // 모든 유효성 메시지가 비어있는지 확인하여 isFormValid 상태 업데이트
  const allValid = Object.values(newValidationMessage).every(
    (msg) => msg.length === 0
  );

  setIsValid(allValid);

  setUserInfo({
    ...userInfo,
    [id as keyof typeof userInfo]: value,
  });
};

// debounce onChange
export const debouncedOnChange = debounce<typeof onChange>(
  (e, setValidationMessage, setIsValid, userInfo, setUserInfo) =>
    onChange(e, setValidationMessage, setIsValid, userInfo, setUserInfo),
  500
);

// 회원 가입 여부 확인
export const askSignIn = () => {
  if (!window.confirm(`해당 정보로 회원 가입하시겠습니까?`)) {
    return;
  }
};

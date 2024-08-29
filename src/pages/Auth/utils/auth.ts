// 아이디 유효성 검사
export const checkUserId = (value: string) => {
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
export const checkEmail = (value: string) => {
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
export const checkPassword = (value: string) => {
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

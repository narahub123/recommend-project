import "./signin.css";
import { useState } from "react";
import { askSignIn, debouncedOnChange } from "../../utils/auth";
import { UserInfoType } from "../../types/user";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { IoCheckmarkSharp } from "react-icons/io5";
import { useRenderCount } from "@uidotdev/usehooks";

const Signin = () => {
  const count = useRenderCount();

  console.log("렌더링", count);

  // 유저 정보
  const [userInfo, setUserInfo] = useState<UserInfoType>({
    userId: "",
    email: "",
    password: "",
  });

  // 유효성 검사 메시지
  const [validationMessage, setValidationMessage] = useState<{
    userId: string;
    email: string;
    password: string;
  }>({
    userId: "영문, 숫자, 특수문자를 적어도 1개 이상 넣어주세요.",
    email: "이메일 형식에 맞게 작성해주세요",
    password: "영문, 숫자, 특수문자를 적어도 1개 이상 넣어주세요.",
  });

  // 유효성 검사 확인 결과
  const [isValid, setIsValid] = useState(false);

  // 비밀번호 보기
  const [canSee, setCanSee] = useState(false);

  const userIdValidation =
    validationMessage.userId.length !== 0
      ? validationMessage.userId.split(". ")
      : [];
  const emailValidation =
    validationMessage.email.length !== 0
      ? validationMessage.email.split(". ")
      : [];
  const passwordValidation =
    validationMessage.password.length !== 0
      ? validationMessage.password.split(". ")
      : [];

  return (
    <div className="signin">
      <div className="signin-container">
        <h3 className="signin-title">회원 가입</h3>
        <div className="signin-item">
          <div className="signin-item-title">아이디</div>
          <div className="signin-item-input-container">
            <input
              type="text"
              className="signin-item-input"
              id="userId"
              onChange={(e) =>
                debouncedOnChange(
                  e,
                  setValidationMessage,
                  setIsValid,
                  userInfo,
                  setUserInfo
                )
              }
            />
            {userIdValidation.length === 0 && (
              <IoCheckmarkSharp className="signin-item-input-icon icon valid" />
            )}
          </div>
          <ul className="signin-item-validation">
            {userInfo.userId.length === 0 && (
              <p className="signin-item-validation-default">
                {validationMessage.userId}
              </p>
            )}
            {userInfo.userId.length > 0 &&
              userIdValidation.map((valid, idx) => (
                <li key={idx} className="signin-item-validation-wrong">
                  {valid}
                </li>
              ))}
          </ul>
        </div>
        <div className="signin-item">
          <div className="signin-item-title">이메일</div>
          <div className="signin-item-input-container">
            <input
              type="email"
              className="signin-item-input"
              id="email"
              onChange={(e) =>
                debouncedOnChange(
                  e,
                  setValidationMessage,
                  setIsValid,
                  userInfo,
                  setUserInfo
                )
              }
            />
            {emailValidation.length === 0 && (
              <IoCheckmarkSharp className="signin-item-input-icon icon valid" />
            )}
          </div>

          <ul className="signin-item-validation">
            {userInfo.email.length === 0 && (
              <p className="signin-item-validation-default">
                {validationMessage.email}
              </p>
            )}
            {userInfo.email.length > 0 &&
              emailValidation.map((valid, idx) => (
                <li key={idx} className="signin-item-validation-wrong">
                  {valid}
                </li>
              ))}
          </ul>
        </div>
        <div className="signin-item">
          <div className="signin-item-title">비밀번호</div>
          <div className="signin-item-input-container">
            <input
              type={canSee ? "text" : "password"}
              className="signin-item-input"
              id="password"
              onChange={(e) =>
                debouncedOnChange(
                  e,
                  setValidationMessage,
                  setIsValid,
                  userInfo,
                  setUserInfo
                )
              }
            />
            <div className="signin-item-input-icon">
              {passwordValidation.length === 0 && (
                <IoCheckmarkSharp className="valid icon" />
              )}
              {canSee ? (
                <IoMdEye
                  className="icon eye"
                  onClick={() => setCanSee(!canSee)}
                />
              ) : (
                <IoMdEyeOff
                  className="icon eye"
                  onClick={() => setCanSee(!canSee)}
                />
              )}
            </div>
          </div>

          <ul className="signin-item-validation">
            {userInfo.password.length === 0 && (
              <p className="signin-item-validation-default">
                {validationMessage.password}
              </p>
            )}
            {userInfo.password.length > 0 &&
              passwordValidation.map((valid, idx) => (
                <li key={idx} className="signin-item-validation-wrong">
                  {valid}
                </li>
              ))}
          </ul>
        </div>

        <div className="signin-checks">
          <div className="signin-checks-store">
            <input type="checkbox" id="rememberId" />
            <label htmlFor="rememberId">아이디 저장</label>
          </div>
          <div className="signin-checks-forget">비밀번호 확인</div>
        </div>
        <button
          className={`signin-btn${isValid ? " active" : ""}`}
          disabled={!isValid}
          onClick={isValid ? () => askSignIn() : undefined}
        >
          회원 가입
        </button>
      </div>
    </div>
  );
};

export default Signin;

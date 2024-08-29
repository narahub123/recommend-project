import "./login.css";
import { useState } from "react";
import { debouncedLoginOnChange, handleLogin } from "../../utils/auth";
import { LoginInfoType } from "../../types/user";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const Login = () => {
  const [loginInfo, setLoginInfo] = useState<LoginInfoType>({
    userId: "",
    password: "",
  });
  const [validationMessage, setValidationMessage] = useState<{
    userId: string;
    password: string;
  }>({
    userId: "영문, 숫자, 특수문자를 적어도 1개 이상 넣어주세요.",
    password: "영문, 숫자, 특수문자를 적어도 1개 이상 넣어주세요.",
  });
  const [isValid, setIsValid] = useState(false);
  const [canSee, setCanSee] = useState(false);

  return (
    <div className="login">
      <div className="login-container">
        <h3 className="login-title">로그인</h3>
        <div className="login-item">
          <div className="login-item-title">아이디</div>
          <div className="login-item-input-container">
            <input
              type="text"
              className="login-item-input"
              id="userId"
              onChange={(e) =>
                debouncedLoginOnChange(
                  e,
                  validationMessage,
                  setValidationMessage,
                  setIsValid,
                  loginInfo,
                  setLoginInfo
                )
              }
            />
          </div>
        </div>
        <div className="login-item">
          <div className="login-item-title">비밀번호</div>
          <div className="login-item-input-container">
            <input
              type={canSee ? "text" : "password"}
              className="login-item-input"
              id="password"
              onChange={(e) =>
                debouncedLoginOnChange(
                  e,
                  validationMessage,
                  setValidationMessage,
                  setIsValid,
                  loginInfo,
                  setLoginInfo
                )
              }
            />
            <p className="login-item-input-icon">
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
            </p>
          </div>
        </div>

        <button
          className={`login-btn${isValid ? " active" : ""}`}
          disabled={!isValid}
          onClick={() => handleLogin(loginInfo)}
        >
          로그인
        </button>
      </div>
    </div>
  );
};

export default Login;

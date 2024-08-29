import "./login.css";
import { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const Login = () => {
  const [canSee, setCanSee] = useState(false);
  const [isValid, setIsValid] = useState(false);

  return (
    <div className="login">
      <div className="login-container">
        <h3 className="login-title">로그인</h3>
        <div className="login-item">
          <div className="login-item-title">아이디</div>
          <div className="login-item-input-container">
            <input type="text" className="login-item-input" id="userId" />
          </div>
        </div>
        <div className="login-item">
          <div className="login-item-title">비밀번호</div>
          <div className="login-item-input-container">
            <input type="password" className="login-item-input" id="password" />
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
        >
          로그인
        </button>
      </div>
    </div>
  );
};

export default Login;

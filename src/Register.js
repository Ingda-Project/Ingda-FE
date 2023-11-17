import React, { useState } from 'react'
import './Register.css'

const Register = () => {
  const [nickname, setNickname] = useState('')
  const [email, setEmail] = useState('')
  const [verificationCode, setVerificationCode] = useState('')
  const [password, setPassword] = useState('')
  const [birth, setBirth] = useState('')

  const handleVerification = () => {
    // 인증 확인 로직
    console.log('Verification Code:', verificationCode)
  }

  const handleRegister = () => {}

  return (
    <div className="register-container">
      <div className="logo-ingda">
        <img src="images/logo_ingda_2.png" className="logo-ingda" width="110" />
      </div>
      <h2>회원가입</h2>
      <form>
        <div className="label-container">
          <span>*별명</span>
          <input
            type="text"
            value={nickname}
            onChange={e => setNickname(e.target.value)}
          />
          <button type="button" onClick={handleVerification}>
            중복 확인
          </button>
        </div>
        <div className="label-container">
          <span>*이메일</span>
          <input
            type="email"
            value={email}
            placeholder="example@email.com"
            onChange={e => setEmail(e.target.value)}
          />
          <button type="button" onClick={handleVerification}>
            코드 발송
          </button>
        </div>
        <div className="label-container">
          <span>*이메일 인증코드</span>
          <input
            type="text"
            value={verificationCode}
            onChange={e => setVerificationCode(e.target.value)}
          />
          <button type="button" onClick={handleVerification}>
            인증 확인
          </button>
        </div>
        <div className="label-container">
          <span>*비밀번호</span>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <p className="password-hint">비밀번호는 8자 이상으로 입력해 주세요.</p>
        <div className="label-container">
          <span>*비밀번호 확인</span>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className="label-container">
          <span>생년월일</span>
          <input
            type="birth"
            value={birth}
            placeholder="YYYY-MM-DD"
            onChange={e => setBirth(e.target.value)}
          />
        </div>
        <div className="label-container">
          <span>성별</span>
          <input type="radio" value="male" name="gender" />
          남자
          <input type="radio" value="female" name="gender" />
          여자
        </div>
        <div className="label-container">
          <div className="checkbox-group">
            <input type="checkbox" id="privacyPolicy" />
            <label htmlFor="privacyPolicy">
              개인정보 수집 및 이용약관 동의 (필수)
            </label>
            <br />
            <input type="checkbox" id="privacyPolicy" />
            <label htmlFor="privacyPolicy">만 14세 미만 약관 동의 (필수)</label>
          </div>
        </div>

        <button type="button" onClick={handleRegister} className="register-btn">
          가입하기
        </button>
      </form>
    </div>
  )
}

export default Register

import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  const handleLogin = () => {
    // 로그인 로직을 여기에 추가
    console.log('Email:', email)
    console.log('Password:', password)
    console.log('Remember Me:', rememberMe)
  }

  const handleImageClick = () => {
    // 소셜 로그인 로직을 여기에 추가
  }

  return (
    <div className="login-container">
      <img
        src="images/logo_ingda.png" // 로고 이미지 URL을 여기에 추가하세요
        alt="Logo"
        className="logo-ingda"
        width="70"
      />
      <h2>Welcome to Ingda!</h2>
      <form>
        <label>
          <input
            className="email-input"
            type="email"
            value={email}
            placeholder="이메일을 입력해 주세요."
            onChange={e => setEmail(e.target.value)}
          />
        </label>
        <label>
          <input
            className="password-input"
            type="password"
            value={password}
            placeholder="비밀번호를 입력해 주세요."
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        <button type="button" onClick={handleLogin} className="login-btn">
          로그인
        </button>
        <br />
        <label>
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
          />
          아이디 기억하기
        </label>
        <br />
      </form>
      <div>
        {/*<Link to="/register">회원가입</Link>*/}
        <a href="/forgot">회원가입</a>
        <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
        <a href="/forgot">아이디/비밀번호 찾기</a>
      </div>
      <div className="socialLogin">
        {/* 소셜 로그인 */}
        <img src="images/logo_kakao.png" onClick={handleImageClick} />
        <img src="images/logo_facebook.jpg" onClick={handleImageClick} />
        <img
          src="images/logo_google.png"
          style={{ border: '1px solid lightgrey', borderRadius: '50%' }}
          onClick={handleImageClick}
        />
        <img src="images/logo_naver.png" onClick={handleImageClick} />
      </div>
    </div>
  )
}

export default Login

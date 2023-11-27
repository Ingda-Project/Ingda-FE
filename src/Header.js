import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header>
      <div className="left-section">
        <div className="logo-ingda">
          <img
            src="images/logo_ingda_2.png"
            className="logo-ingda"
            width="50"
          />
        </div>
        <div className="logo-txt">Ingda</div>
      </div>
      <div className="right-section">
        <nav>
          <ul>
            <li>
              <a href="/login">나의 일기장</a>
            </li>
            <li>|</li>
            <li>
              <a href="/mypage">마이페이지</a>
            </li>
            <li>|</li>
            <li>
              <a href="/logout">로그아웃</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

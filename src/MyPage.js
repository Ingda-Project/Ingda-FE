import React, { useState } from 'react'
import Header from './Header'
import './MyPage.css'

const MyPage = () => {
  const [nickname, setNickname] = useState('')
  const [email, setEmail] = useState('')
  const [verificationCode, setVerificationCode] = useState('')
  const [password, setPassword] = useState('')
  const [birth, setBirth] = useState('')

  const handleVerification = () => {
    // 인증 확인 로직
    console.log('Verification Code:', verificationCode)
  }

  const handleModify = () => {}

  const handleWithdraw = () => {}

  return (
    <div className="mypage-container">
      <Header />
      <form>
        <div className="label-container">
          <span>별명</span>
          <input
            type="text"
            value={nickname}
            onChange={e => setNickname(e.target.value)}
            placeholder="배은주"
          />
          <button type="button" onClick={handleVerification}>
            중복 확인
          </button>
        </div>
        <div className="label-container">
          <span>이메일</span>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            readOnly
            placeholder="bej96@naver.com"
          />
        </div>
        <div className="label-container">
          <span>비밀번호</span>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <p className="password-hint">비밀번호는 8자 이상으로 입력해 주세요.</p>
        <div className="label-container">
          <span>비밀번호 확인</span>
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
            onChange={e => setBirth(e.target.value)}
            readOnly
            placeholder="1996-09-05"
          />
        </div>
        <div className="label-container">
          <span>성별</span>
          <input type="radio" value="male" name="gender" disabled />
          남자
          <input type="radio" value="female" name="gender" disabled checked />
          여자
        </div>
        <div className="btn-container">
          <button type="button" onClick={handleModify} className="modify-btn">
            수정하기
          </button>
          <button
            type="button"
            onClick={handleWithdraw}
            className="withdraw-btn"
          >
            탈퇴하기
          </button>
        </div>
        {/* 도움말 영역 */}
        <div className="help-container">
          <p>[고객 지원 및 도움말]</p>
          <p className="help-contents">고객 지원 및 도움말 영역입니다.</p>
          <p className="help-contents">고객 지원 및 도움말 영역입니다.</p>
          <p className="help-contents">고객 지원 및 도움말 영역입니다.</p>
          <p className="help-contents">고객 지원 및 도움말 영역입니다.</p>
          <p className="help-contents">고객 지원 및 도움말 영역입니다.</p>
          <p className="help-contents">고객 지원 및 도움말 영역입니다.</p>
          <p className="help-contents">고객 지원 및 도움말 영역입니다.</p>
          <p className="help-contents">고객 지원 및 도움말 영역입니다.</p>
          <p className="help-contents">고객 지원 및 도움말 영역입니다.</p>
          <p className="help-contents">고객 지원 및 도움말 영역입니다.</p>
          <p className="help-contents">고객 지원 및 도움말 영역입니다.</p>
        </div>
      </form>
    </div>
  )
}

export default MyPage

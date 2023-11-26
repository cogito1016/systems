# 1.개요

- 로그인 구현
- 간단한 UI
- Login API

## 2.Stack

### 2.1.Backend

- NestJS
- Prisma
- Passport

#### 2.1.1.기능명세

- 회원가입/로그인 API
  - sign-in / sign-up API
  - Passport Guard
- 비밀번호 해싱
  - crypto
- 환경변수 관리
- ORM
  - Prisma
- 로그아웃
- 로그인 상태 유지
  - session

### 2.2.Front

- Svelte

#### 2.2.1.기능명세

- 회원가입 UI
- 로그인 UI
- 회원가입/로그인 API 매핑
- 예외 Alert처리
- 로그인된 사용자 개인화된 UI제공
- 로그아웃 UI

### 2.3.DB

- Mysql

## 3.Function

- 휴대폰인증
- 이메일인증
- 카카오로그인
- 네이버로그인
- 구글로그인

## 4.Update

- login-ui-ver2 생성이유
  - 라우팅이 안잡혔기 때문
- login-api-ver2 생성이유
  - 너무 날것의 코드라 처음부터 재정비하기 위함

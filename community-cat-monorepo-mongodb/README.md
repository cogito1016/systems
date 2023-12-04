# Cat-community

- 고양이 커뮤니티를 만듭니다

## 1.Function

## 2.Stack

- NestJS
  - MonoRepo
- MongoDB
- Mongoose

## 2.1.Mongooes설치
```bash
npm install --save @nestjs/mongoose mongoose
```

## 3.오류

### 3.1.[문제] Monorepo를 사용하기위한 커맨드가 작동하지않음
```bash
nest generate app auth
```
### 3.1.[해결] 경로문제였다..
```bash
#src폴더로 이동
nest generate app auth
```
### 3.2.[문제] DB접속문제
```bash
WARNING: MongoDB 5.0+ requires a CPU with AVX support, and your current system does not appear to have that!
  see https://jira.mongodb.org/browse/SERVER-54407
  see also https://www.mongodb.com/community/forums/t/mongodb-5-0-cpu-intel-g4650-compatibility/116610/2
  see also https://github.com/docker-library/mongo/issues/485#issuecomment-891991814
```

### 3.2.[해결] CPU사양문제
- CPU가 AVX를 지원하지않아서 발생하는 문제
- 4.4버전으로 다운그레이드


### 3.3 [문제]
```bash
command listDatabases requires authentication
```

### 3.3 [해결]
- mongoDB에 접속하기위해서는 인증이 필요하다
- mongoDB에 접속하기위한 계정을 생성해야한다

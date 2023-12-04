# Cat-community

- 고양이 커뮤니티를 만듭니다

## 1.Function

## 2.Stack

- NestJS
  - MonoRepo
- MongoDB
- Mongoose

## 3.오류

### 3.1.[문제] Monorepo를 사용하기위한 커맨드가 작동하지않음
```bash
nest generate app auth
```
### 3.2.[해결] 경로문제였다..
```bash
#src폴더로 이동
nest generate app auth
```
# basic-rest-api-skeleton

- RestAPI기본 틀을 제작합니다.

## 1.Function

- 기본적인 CRUD를 구현

## 2. Tech

- NestJS
- Prisma

## 3. Setting

- Configuration세팅
- https://docs.nestjs.com/techniques/configuration
- 최상위 .env는 알아서 매핑, 그러나 다른이름이라면 envFilePath를 지정해야함

```bash
$ npm i --save @nestjs/config

```

### 3.2. Prisma

- Prisma세팅
- https://docs.nestjs.com/recipes/prisma
- prisma generate
  - prisma모델을 변경할때마다 클라이언트를 업데이트하려면 이 명령어가 실행되어야 함

```bash
$ npm install prisma --save-dev
$ npx prisma
$ npx prisma init

$ npm install @prisma/client #자동으로 prisma generate 호출됨
```

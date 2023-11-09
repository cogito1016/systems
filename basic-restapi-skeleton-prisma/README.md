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

### 3.3. Prisma 스키마로 마이그레이션

```bash
npx prisma migrate dev --name init
```

```text
? We need to reset the MySQL database "mydb" at "127.0.0.1:3305"
Do you want to continue? All data will be lost. › (y/N)
```

- 위의질문에 y하면 마이그레이션 시작

### 3.4. Prisma 스키마 수정으로 인한 마이그레이션

```bash
npx prisma migrate dev --name <migration_name>
```

- schema.prisma의 수정사항이 DB에 반영됨

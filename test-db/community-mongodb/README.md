# Database(local-test)

- 로컬에서만 사용할 데이터베이스를 구성

## 1. Docker image pull

- docker image 받아오기

```bash
docker pull --platform linux/amd64 mongo:latest
```

## 2. Docker volume setting

- 데이터매핑을 위한 볼륨 생성

```bash
docker volume create mongodb-volume
docker volume ls
```

## 3. Create/Remove container

- 도커컴포즈로 컨테이너 생성/삭제

```bash
docker-compose up -d
docker-compose down
```

## 4. Exec container

- 컨테이너 접근

```bash
docker exec -it my-mongodb-container /bin/bash

```

## 5. 오류

### 5.1. mongo --version이 안됨

- mongo 커맨드는 6.0버전에서 제거됨
  https://stackoverflow.com/questions/73582703/mongo-command-not-found-on-mongodb-6-0-docker-container

# Database(local-test)

- 로컬에서만 사용할 데이터베이스를 구성

## 1. Docker image build

- dockerfile을 기반으로 이미지 생성

```bash
docker build -t my-mysql-image .
```

## 2. Docker volume setting

- 데이터매핑을 위한 볼륨 생성

```bash
docker volume create mysql-volume
docker volume create mysql-log-volume
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
docker exec -it my-mysql-container /bin/bash

```

# Database(local-test)

- 로컬에서만 사용할 데이터베이스를 구성

## 1. Docker image pull

- docker image 받아오기

```bash
docker pull --platform linux/amd64 mysql:8
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

## 5. 외부접근을 위한 컨테이너 mysql 유저생성 및 권한할당

- 원래는 이렇게가능 !!그러나!!

```bash
mysql> grant all privileges on DB이름.* to 계정ID@'%' identified by '비밀번호';
mysql> flush privileges;

```

- mysql:8 버전이후로는 아래처럼 해야함

```bash
CREATE USER 'jayden'@'%' IDENTIFIED BY '1234';
GRANT ALL PRIVILEGES ON *.* TO 'jayden'@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES;

```

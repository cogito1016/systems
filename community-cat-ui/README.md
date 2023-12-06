# Gomunity(Cat-community) UI

- 고양이 커뮤니티 UI

## 1.오류

### 1.1. [문제] opensslErrorStack
- 프로젝트 npm run dev 시 오류 발생
```bash
  opensslErrorStack: [ 'error:03000086:digital envelope routines::initialization error' ],
  library: 'digital envelope routines',
  reason: 'unsupported',
  code: 'ERR_OSSL_EVP_UNSUPPORTED'
```

### 1.1 [해결] node version 다운그레이드
- n 모듈 설치
- node version 변경
- n 모듈이라는것을 오랜만에 보는것같은데, 노드버전을 너무 손쉽게 변경할수있게 해준다.
```bash
> sudo npm install -g n
Password:

changed 1 package in 162ms
>
>
>
> sudo n latest
  installing : node-v21.4.0
       mkdir : /usr/local/n/versions/node/21.4.0
       fetch : https://nodejs.org/dist/v21.4.0/node-v21.4.0-darwin-arm64.tar.xz
     copying : node/21.4.0
   installed : v21.4.0 (with npm 10.2.4)
>
>
> node -v
v21.4.0
>
> sudo n lts
  installing : node-v20.10.0
       mkdir : /usr/local/n/versions/node/20.10.0
       fetch : https://nodejs.org/dist/v20.10.0/node-v20.10.0-darwin-arm64.tar.xz
     copying : node/20.10.0
   installed : v20.10.0 (with npm 10.2.3)
>
>
> node -v
v20.10.0
>
> sudo n 16.20.0
  installing : node-v16.20.0
       mkdir : /usr/local/n/versions/node/16.20.0
       fetch : https://nodejs.org/dist/v16.20.0/node-v16.20.0-darwin-arm64.tar.xz
     copying : node/16.20.0
   installed : v16.20.0 (with npm 8.19.4)
>
> node -v
v16.20.0
> git status
On branch main
Your branch is up to date with 'origin/main'.
```



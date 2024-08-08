# 용도
 - 프로젝트 내에서 Reverse Proxy를 하기 위한 Gateway
# 설정 방법
 - index.js에 설정된 target 주소 변경 지정 후, Gateway 재 실행
 - target 대상은 실 api 위치 주소
```
 target : "http://localhost:8080"
```
# 프로젝트 내려 받은 후 아래 순서대로 명령 실행
```
npm i
npm start
```

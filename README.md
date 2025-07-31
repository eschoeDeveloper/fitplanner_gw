# 🌐 Gateway Proxy

이 프로젝트는 **Reverse Proxy 역할을 수행하는 Gateway**입니다.  
로컬 개발 환경 또는 테스트 환경에서 프론트엔드와 백엔드 간의 API 통신을 중계합니다.

---

## 📌 용도

- **Reverse Proxy 구성**을 통해 CORS 문제 해결
- API 호출 시, 지정된 백엔드 서버로 트래픽을 프록시 처리
- 로컬에서 API 주소 변경 없이 개발 가능

---

## ⚙️ 설정 방법

1. 프로젝트의 `index.js` 파일을 열어 아래 항목을 수정하세요:

```js
// index.js
const target = "http://localhost:8080"; // ← 여기에 실 API 주소 입력
```

예시:
```js
const target = "http://localhost:8081";
```

2. 저장 후, Gateway 서버를 재시작하세요.

---

## 🚀 실행 방법

```bash
# 1. 프로젝트 다운로드
git clone https://github.com/your-org/gateway-proxy.git
cd gateway-proxy

# 2. 의존성 설치
npm install

# 3. 서버 실행
npm start
```

- 기본 포트: `http://localhost:3000`
- 이 주소로 들어오는 요청은 `target`에 지정한 API 서버로 프록시 처리됩니다.

---

## 📁 예시 구조

```
gateway-proxy/
├── index.js         # Proxy 서버 설정 파일
├── package.json     # 프로젝트 메타 정보
└── ...
```

---

## 📝 참고

- Node.js 기반의 간단한 프록시 서버입니다.
- 필요한 경우 `http-proxy-middleware` 또는 `express-http-proxy` 등으로 확장할 수 있습니다.

---

## 🙋 문의

- 작성자: Choe Eui Seung
- 이메일: develop.eschoe@gmail.com

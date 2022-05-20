# Frontend 포팅 매뉴얼

> 좋아하면 누르는 빌드 매뉴얼



## 주요 기술 스택

| Name              | Version |
| ----------------- | ------- |
| react             | 17.0.2  |
| react-router-dom  | 6.3.0   |
| typescript        | 4.6.3   |
| styled-components | 5.3.5   |
| stomp             | 6.1.2   |
| react-ga          | 3.3.0   |
| react-spring      | 9.4.5   |



## 개발 환경 구성

### 프로젝트 다운로드

```bash
$ git clone <repo-URL>
```

### frontend 폴더로 이동

```bash
$ cd <folder-path>/frontend
```

### 패키지 설치

```bash
$ npm install
```

### 프로젝트 실행/빌드

```bash
// 개발 환경에서 실행
$ npm start

// 빌드
$ npm build
```



## 디렉토리 구조

```
📦src
 ┣ 📂api			// api 요청 모듈
 ┣ 📂components		// 컴포넌트 단위의 파일
 ┣ 📂hooks			// 커스텀 훅
 ┣ 📂images			// 로컬에서 사용할 이미지
 ┣ 📂pages			// 페이지 단위의 파일
 ┣ 📂store			// Context API
 ┣ 📂styles			// 글로벌 스타일 컴포넌트
 ┣ 📂utils			// 유틸 함수
 ┣ 📜App.tsx
 ┣ 📜index.tsx
 ┗ ...
```


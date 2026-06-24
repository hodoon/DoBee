# DoBee Portfolio
React Portfolio Homepage → GitHub Pages (GitHub Actions CI/CD)

🔗 **배포 주소:** https://hodoon.github.io/DoBee/

---

# 1. 시스템 구현하기

### 📂 1. 전체 폴더 구조

```text
DoBee/                            (프로젝트 최상위 폴더)
├── .github/
│   └── workflows/
│       └── deploy.yml            (★ GitHub Actions 배포 워크플로우)
├── public/                       (정적 파일 - 이미지 등)
│   ├── profile.jpg
│   ├── dasom.jpeg
│   ├── Nunsub.png
│   ├── EyeT.jpg
│   └── valuedi.png
├── src/
│   ├── components/               (섹션별 React 컴포넌트)
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Activities.jsx
│   │   ├── Awards.jsx
│   │   ├── Education.jsx
│   │   ├── Contact.jsx
│   │   └── SectionHeader.jsx
│   ├── data/
│   │   └── portfolio.js          (포트폴리오 데이터)
│   ├── hooks/
│   │   └── useDarkMode.js        (다크모드 커스텀 훅)
│   ├── App.jsx                   (루트 컴포넌트)
│   ├── main.jsx                  (★ React 진입점)
│   └── index.css                 (Tailwind CSS 설정)
├── index.html                    (★ Vite 진입점)
├── package.json                  (★ 프로젝트 설계도)
├── vite.config.js                (Vite 빌드 설정)
├── tailwind.config.js            (Tailwind CSS 설정)
├── postcss.config.js             (PostCSS 설정)
└── .gitignore
```

---

### 📝 2. 주요 파일 설명

#### ① `index.html` (Vite 진입점)

Vite 기반 프로젝트에서는 `public/index.html` 대신 **루트의 `index.html`** 이 진입점입니다.

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>윤도훈 | 백엔드 개발자 포트폴리오</title>
    <script>
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
      }
    </script>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

#### ② `src/main.jsx` (React 진입점)

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

#### ③ `src/index.css` (Tailwind CSS)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

#### ④ `package.json` (프로젝트 설정)

```json
{
  "name": "dobee-portfolio",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.47",
    "tailwindcss": "^3.4.14",
    "vite": "^5.4.10"
  }
}
```

#### ⑤ `.gitignore`

```text
node_modules
dist
.DS_Store
*.local
```

---

### 🚀 3. 로컬 실행 방법

터미널에서 아래 명령어를 순서대로 실행하세요.

**① 의존성 설치 (최초 1회)**
```bash
npm install
```

**② 개발 서버 실행**
```bash
npm run dev
```
브라우저에서 http://localhost:5173 으로 접속합니다.

**③ 프로덕션 빌드 (배포 전 테스트)**
```bash
npm run build
npm run preview
```
`dist/` 폴더에 배포용 파일이 생성됩니다.

---

# 2. GitHub Actions를 활용하여 GitHub Pages에 배포하기

### 1단계: 서브경로 base 설정 (`vite.config.js`)

GitHub Pages 프로젝트 페이지는 `https://<유저>.github.io/<레포>/` 형태의 **서브경로**로 서빙됩니다.
따라서 Vite `base`를 레포 이름으로 맞춰야 에셋 경로가 깨지지 않습니다.

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/DoBee/',
  plugins: [react()],
})
```

> `public/` 정적 이미지를 JS에서 문자열 경로로 참조할 때는 `import.meta.env.BASE_URL`을 접두로 붙여야 합니다.
> 예) `src={`${import.meta.env.BASE_URL}profile.jpg`}`

---

### 2단계: 저장소 Pages 설정

**Settings → Pages → Build and deployment → Source → "GitHub Actions" 선택**

별도의 시크릿(AWS 키 등)은 필요 없습니다. GitHub Actions가 OIDC로 Pages에 직접 배포합니다.

---

### 3단계: GitHub Actions 워크플로우 (`deploy.yml`)

**경로:** `.github/workflows/deploy.yml`

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

---

### 4단계: 배포 및 접속 확인

1. 코드를 `main` 브랜치에 `push`합니다.
2. GitHub **Actions** 탭에서 "Deploy to GitHub Pages" 워크플로우가 성공하는지 확인합니다.
3. 배포 주소로 접속합니다.

```
https://hodoon.github.io/DoBee/
```

---

# 3. 과제 영상

### 🎬 GitHub Actions 활용 CI/CD 구축 시연 영상
[![GitHub Actions CI/CD](https://img.shields.io/badge/YouTube-CI%2FCD%20구축%20시연-FF0000?style=for-the-badge&logo=youtube)](https://youtube.com/watch?v=qo0MpvLMvkk&feature=youtu.be)

### 🎬 AWS Amplify 서비스 활용 호스팅 영상
[![AWS Amplify 호스팅](https://img.shields.io/badge/YouTube-AWS%20Amplify%20호스팅-FF0000?style=for-the-badge&logo=youtube)](https://youtube.com/watch?v=MWcLbZz260c&feature=youtu.be)

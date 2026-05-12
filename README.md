# ReactPage_to_AWS_S3
React Portfolio Homepage → AWS S3 (GitHub Actions CI/CD)

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

# 2. GitHub Actions를 활용하여 AWS S3에 배포하기

### 1단계: AWS S3 버킷 설정

**S3 버킷을 생성하고 정적 웹사이트 호스팅을 활성화합니다.**

1. **버킷 생성** (예: `dobee-portfolio`)
2. **권한 → 퍼블릭 액세스 차단:** 모든 차단 **해제**
3. **속성 → 정적 웹 호스팅:** 활성화
   - Index document: `index.html`
   - Error document: `index.html` (SPA 라우팅 대응)
4. **권한 → 버킷 정책:** 아래 정책 붙여넣기

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::내-버킷-이름/*"
    }
  ]
}
```

---

### 2단계: GitHub Secrets 등록 (Academy 토큰 포함 5개)

**Settings → Secrets and variables → Actions → New repository secret**

| Secret 이름 | 값 |
|---|---|
| `AWS_ACCESS_KEY_ID` | Academy 랩 콘솔 → AWS Details → Access Key ID |
| `AWS_SECRET_ACCESS_KEY` | Academy 랩 콘솔 → Secret Access Key |
| `AWS_SESSION_TOKEN` | Academy 랩 콘솔 → Session Token (필수!) |
| `AWS_REGION` | `us-east-1` |
| `S3_BUCKET_NAME` | 생성한 버킷 이름 (예: `dobee-portfolio`) |

> **⚠️ Academy 주의사항:** 랩 세션이 만료되면 임시 자격증명도 만료됩니다.  
> 세션 재시작 후 `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_SESSION_TOKEN` 3개를 새 값으로 업데이트해야 배포가 동작합니다.

---

### 3단계: GitHub Actions 워크플로우 (`deploy.yml`)

**경로:** `.github/workflows/deploy.yml`

```yaml
name: Deploy to S3

on:
  push:
    branches: [main]

jobs:
  deploy:
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
        # 빌드 결과물은 ./dist 폴더에 생성됩니다.

      - name: Configure AWS credentials
        uses: aws-actions/configure-aws-credentials@v4
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-session-token: ${{ secrets.AWS_SESSION_TOKEN }}
          aws-region: ${{ secrets.AWS_REGION }}

      - name: Deploy to S3
        run: |
          # JS/CSS 등 해시가 포함된 파일은 장기 캐시 적용
          aws s3 sync dist/ s3://${{ secrets.S3_BUCKET_NAME }} \
            --delete \
            --cache-control "max-age=31536000,public,immutable" \
            --exclude "index.html"

          # index.html은 항상 최신 버전을 받도록 캐시 비활성화
          aws s3 cp dist/index.html s3://${{ secrets.S3_BUCKET_NAME }}/index.html \
            --cache-control "no-cache,no-store,must-revalidate"
```

---

### 4단계: 배포 및 접속 확인

1. 코드를 `main` 브랜치에 `push`합니다.
2. GitHub **Actions** 탭에서 워크플로우가 성공하는지 확인합니다.
3. S3 버킷 **정적 웹사이트 호스팅 엔드포인트**로 접속합니다.

```
http://버킷이름.s3-website-us-east-1.amazonaws.com
```

예시:
```
http://mybucket-20263587.s3-website-us-east-1.amazonaws.com
```

---

# 3. 과제 영상

### 🎬 GitHub Actions 활용 CI/CD 구축 시연 영상
[![GitHub Actions CI/CD](https://img.shields.io/badge/YouTube-CI%2FCD%20구축%20시연-FF0000?style=for-the-badge&logo=youtube)](https://youtube.com/watch?v=qo0MpvLMvkk&feature=youtu.be)

### 🎬 AWS Amplify 서비스 활용 호스팅 영상
[![AWS Amplify 호스팅](https://img.shields.io/badge/YouTube-AWS%20Amplify%20호스팅-FF0000?style=for-the-badge&logo=youtube)](https://youtube.com/watch?v=MWcLbZz260c&feature=youtu.be)

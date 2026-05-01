# SUKA Platform

## Local development
```
cp .env.example .env
# Fill in DATABASE_URL in .env
npm install
npm start
```

## Deploy on Railway
1. Push this folder to GitHub
2. Railway → New Project → GitHub Repository → select repo
3. Railway auto-detects Node.js and runs npm start
4. Add PostgreSQL plugin — DATABASE_URL is set automatically
5. Generate domain in Settings → Networking

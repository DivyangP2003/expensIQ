# 💰 Wealth - AI Powered Finance Manager

A full-stack, AI-powered finance management platform that helps you **track income, expenses, budgets**, and **analyze spending patterns** — all in one modern web application.

🔗 [Live Demo (Vercel)](https://expensiq.vercel.app)  
📌 Built with Next.js, Tailwind CSS, Clerk, Supabase, ShadCN, and **Inngest** for background jobs.

![Next.js](https://img.shields.io/badge/Next.js-black?logo=next.js)
![ShadCN](https://img.shields.io/badge/ShadCN-UI-blue)
![Supabase](https://img.shields.io/badge/Supabase-green?logo=supabase)
![Clerk](https://img.shields.io/badge/Auth-Clerk-red?logo=clerk)
![Inngest](https://img.shields.io/badge/Jobs-Inngest-black?logo=data:image/svg+xml;base64,YOUR_INNGEST_ICON_BASE64)
![TypeScript](https://img.shields.io/badge/Typed-TypeScript-blue?logo=typescript)

---

## 🧠 Key Features

- ✅ **AI Receipt Scanner** – Upload receipts and auto-fill transactions.
- 🔄 **Recurring Transactions** – Set up repeat expenses or income (salary, subscriptions).
- 📬 **Email Alerts** – Get alerts when you're nearing your budget limit.
- 🧠 **Monthly AI Reports** – Personalized AI insights emailed monthly.
- 📈 **Analytics Dashboard** – View financial health via interactive charts.
- 👥 **Account Management** – Switch between accounts with category-based tracking.
- 🔐 **Secure Auth** – Google login via Clerk; protected dynamic routes.
- 🧵 **Background Jobs with Inngest** – Handles recurring tasks (see below).
- 💂 **Bot/Rate Protection** – Arkjet shields the app from abuse.
- 💎 **Beautiful UI** – Built with ShadCN UI and TailwindCSS.

---

## ⚙️ Background Jobs Powered by Inngest

Inngest handles all automated backend workflows in this project:

| Job Name                  | Trigger              | Purpose |
|--------------------------|----------------------|---------|
| `monthlyReport`          | 1st of each month    | Emails AI-generated finance summaries |
| `dailyBudgetMonitor`     | Daily @ 12AM         | Sends alerts if user nears budget |
| `handleRecurringTx`      | Daily @ 12AM         | Automatically adds recurring transactions |

✅ Jobs run asynchronously and reliably with automatic retries.

🔗 Learn more: [Inngest Docs](https://www.inngest.com/docs)

---

## 📸 Preview

| Landing Page | Dashboard |
|--------------|-----------|
| ![Landing](./public/landing-preview.png) | ![Dashboard](./public/dashboard-preview.png) |

---

## 🚀 Tech Stack

| Area        | Tech                                                             |
|-------------|------------------------------------------------------------------|
| Frontend    | Next.js 15, React, Tailwind CSS, ShadCN UI                       |
| Backend     | Supabase (PostgreSQL), Prisma ORM                                |
| Auth        | Clerk (OAuth + Email-based login)                                |
| AI Features | GEMINI API + OCR for receipt parsing                             |
| Jobs        | Inngest (CRON jobs: budget alerts, monthly reports, etc.)        |
| Security    | Arkjet (rate limiting, bot protection, attack shields)           |
| Dev Tools   | ESLint, Prettier, GitHub Actions (CI/CD)   

---


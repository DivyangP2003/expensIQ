# 💰 Wealth - AI Powered Finance Manager

A full-stack, AI-powered finance management platform that helps you **track income, expenses, budgets**, and **analyze spending patterns** — all in one modern web application.

🔗 [Live Demo (Vercel)](https://your-deployment-url.vercel.app) &nbsp; | &nbsp; ![Next.js](https://img.shields.io/badge/Next.js-black?logo=next.js) ![ShadCN](https://img.shields.io/badge/ShadCN-UI-blue) ![Supabase](https://img.shields.io/badge/Supabase-green?logo=supabase) ![Clerk](https://img.shields.io/badge/Auth-Clerk-red?logo=clerk)

---

## 🧠 Features

- ✅ **AI Receipt Scanner** – Upload receipts to auto-fill transaction data.
- 📊 **Budget Monitoring** – Set monthly budgets and get alerts when overspending.
- 🔄 **Recurring Transactions** – Salary or subscriptions added automatically via cron jobs.
- 📈 **Financial Reports** – Get monthly AI-generated spending insights by email.
- 📬 **Email Alerts** – Real-time notifications when you're close to budget limits.
- 🔐 **Secure Auth** – Social login (Google) using Clerk, with protected routes.
- ⚙️ **Background Jobs** – Using Inngest for automatic processing & email reports.
- 📁 **Account Switching** – Manage multiple accounts (e.g., Personal, Savings).
- 🖼️ **Beautiful UI** – Responsive design using ShadCN and TailwindCSS.
- 🛡️ **Bot & Abuse Protection** – Rate limiting, bot detection via Arkjet.

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
| AI Features | Custom OpenAI API + OCR for receipt parsing                      |
| Jobs        | Inngest (CRON jobs: budget alerts, monthly reports, etc.)        |
| Security    | Arkjet (rate limiting, bot protection, attack shields)           |
| Dev Tools   | ESLint, Prettier, GitHub Actions (CI/CD)                         |


---

## 📖 Getting Started

### Prerequisites
- Node.js v18+
- Vercel CLI (for deployment)
- Supabase + Clerk accounts

### Installation

```bash
git clone https://github.com/yourusername/wealth.git
cd wealth
npm install

# Start dev server
npm run dev


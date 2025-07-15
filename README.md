# 💰 ExpensIQ – AI Powered Personal Finance Manager

A full-stack, AI-powered personal finance platform that helps users **track income and expenses**, set and monitor **budgets**, receive **real-time alerts**, get **AI-generated monthly reports**, and gain **smart financial insights** — all within a modern, responsive web application.


🔗 [Live Demo (Vercel)](https://expensiq.vercel.app)  
📌 Built with &nbsp; | &nbsp; ![Next.js](https://img.shields.io/badge/Next.js-black?logo=next.js)![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-blue?logo=tailwind-css)![ShadCN UI](https://img.shields.io/badge/ShadCN_UI-UI-blue)![TypeScript](https://img.shields.io/badge/TypeScript-Used-blue?logo=typescript)![Clerk](https://img.shields.io/badge/Auth-Clerk-red?logo=clerk)![Supabase](https://img.shields.io/badge/Database-Supabase-green?logo=supabase)![Prisma](https://img.shields.io/badge/ORM-Prisma-3982CE?logo=prisma)![Inngest](https://img.shields.io/badge/Jobs-Inngest-black)![Gemini AI](https://img.shields.io/badge/AI-Gemini-3366cc?logo=google)![Resend](https://img.shields.io/badge/Email-Resend-FF6A55?logo=resend)![Recharts](https://img.shields.io/badge/Charts-Recharts-purple)

---

## 🧠 Features

- ✅ **AI-Powered Receipt Scanner**  
  Upload images of physical receipts and let the app auto-fill transaction details (amount, date, vendor, category) using **OCR** combined with **Gemini AI**.

- 🔁 **Recurring Transaction Automation**  
  Schedule salary deposits, subscriptions, or fixed bills as recurring entries — seamlessly handled via **Inngest CRON jobs** with automatic execution.

- 🧾 **Smart Transaction Management**  
  Add, edit, delete, and categorize transactions. Filter by date range, amount, account, or type. Bulk operations supported for better productivity.

- 📊 **Real-Time Budget Monitoring & Alerts**  
  Set monthly budgets per account and receive **email alerts** when you’re nearing or exceeding limits — powered by Inngest and Resend.

- 📬 **AI-Generated Monthly Reports**  
  Every 1st of the month, users receive a personalized email summary with expense breakdowns, category-wise charts, and AI-generated savings tips.

- 📈 **Interactive Financial Analytics**  
  Use clean and responsive **Recharts** visualizations to track spending patterns, compare months, and assess financial health.

- 👥 **Multi-Account & Category Management**  
  Create and manage multiple financial accounts (e.g., Savings, Personal, Business) with customizable categories for more accurate tracking.

- 🔐 **Secure & Social Authentication**  
  Google login and session handling via **Clerk**. All sensitive routes are protected with Clerk middleware and server-side session validation.

- ⚙️ **Serverless Background Jobs**  
  Recurring logic and notifications are powered by **Inngest**, a serverless job orchestration engine with retries and CRON scheduling.

- 💂 **Bot/Abuse Protection**  
  APIs and critical routes are protected by **Arkjet** to block bots, limit rate abuse, and shield your app from common web attacks.

- 💎 **Polished, Responsive UI**  
  Built with **ShadCN UI** and **Tailwind CSS**, the app offers a smooth user experience across devices — with elegant modals, forms, and animations.


---

## ⚙️ Background Jobs via Inngest

| Job Name             | Trigger            | Purpose |
|----------------------|--------------------|---------|
| `monthlyReport`      | 1st of each month  | Sends AI financial summary via email |
| `dailyBudgetMonitor` | Daily @ 12AM       | Alerts when nearing budget threshold |
| `handleRecurringTx`  | Daily @ 12AM       | Adds recurring transactions automatically |

✅ Powered by [Inngest](https://www.inngest.com) – reliable, serverless job scheduling.

---

## 📸 Screenshots

| Landing Page | Dashboard |
|--------------|-----------|
| ![Landing](./public/landing-preview.png) | ![Dashboard](./public/dashboard-preview.png) |

---

## 🚀 Tech Stack

| Area        | Tech Stack |
|-------------|------------|
| **Frontend** | React, Next.js 15, Tailwind CSS, ShadCN UI |
| **Backend**  | Supabase (PostgreSQL), Prisma ORM |
| **Authentication** | Clerk (Google login + user profile) |
| **Email** | Resend |
| ** Charts** | Recharts |
| **AI/OCR**   | GEMINI API + custom OCR |
| **Job Scheduling** | Inngest (CRON jobs, retries, queues) |
| **Security** | Arkjet (bot detection, rate limiting) |
| **CI/CD**    | Vercel + GitHub Actions |

---



## 🤸 Quick Start

Follow these steps to set up the **ExpensIQ - AI Powered Personal Finance Manager** project locally on your machine.

### 🔧 Prerequisites

- Git
- Node.js (v18+)
- npm

### 📁 Cloning the Repository

```bash
git clone https://github.com/yourusername/expensiq.git
cd expensiq
```
### 📦 Installation

```bash
npm install
```
#### 🧬 Prisma Setup
After installing dependencies and setting up environment variables, initialize your database:
```bash
npm i -D prisma
npx prisma init
npx prisma migrate dev --name create-models
```

### 🔐 Environment Variables

Make sure to create a `.env` file in root of your project with the following variables:

```env
DATABASE_URL=
DIRECT_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

GEMINI_API_KEY=
RESEND_API_KEY=
ARCJET_KEY=
INNGEST_SIGNING_KEY=
```
Replace the placeholder values with your actual credentials.

### ▶️ Running the Project

```bash
npm run dev
```
Open http://localhost:3000 in your browser to view the project.

---

## 🆘 Support

If you find this project useful, consider giving it a ⭐  

---

## 🧑 Authors

- [@DivyangP2003](https://github.com/DivyangP2003)

---
## 🙏 Acknowledgements

Special thanks to the following platforms for their tools:

- [Clerk](https://clerk.dev) – authentication and user management
- [Supabase](https://supabase.io) – backend database and real-time support
- [Inngest](https://www.inngest.com) – background jobs and CRON scheduling
- [Arkjet](https://arcjet.com/) – bot protection and rate limiting
- [ShadCN UI](https://ui.shadcn.com/) – UI component library
- [Gemini API (Google AI)](https://ai.google.dev/) – AI for receipt parsing
- [Resend](https://resend.com) – transactional email delivery
- [Recharts](https://recharts.org) – charts and data visualization
- [Vercel](https://vercel.com) – frontend hosting and CI/CD

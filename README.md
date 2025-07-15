# 💰 ExpensIQ – AI Powered Personal Finance Manager

A full-stack, AI-powered personal finance platform that helps users **track income and expenses**, set and monitor **budgets**, receive **real-time alerts**, get **AI-generated monthly reports**, and gain **smart financial insights** — all within a modern, responsive web application.


##🔗 [Live Demo (Vercel)](https://expensiq.vercel.app)  

📌 Built with &nbsp; | &nbsp; [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)]( https://www.typescriptlang.org/ )[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)]( https://nextjs.org/ )[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white)]( https://tailwindcss.com/ )[![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)]( https://www.prisma.io/ )[![Clerk](https://img.shields.io/badge/Clerk-FF69B4?style=for-the-badge&logo=clerk&logoColor=white)]( https://clerk.dev/ )[![Supabase](https://img.shields.io/badge/Supabase-316CF0?style=for-the-badge&logo=supabase&logoColor=white)]( https://supabase.com/ )[![Inngest](https://img.shields.io/badge/Inngest-0052CC?style=for-the-badge&logo=inngest&logoColor=white)]( https://inngest.com/ )[![Resend](https://img.shields.io/badge/Resend-00A3E0?style=for-the-badge&logo=resend&logoColor=white)]( https://resend.com/ )[![Recharts](https://img.shields.io/badge/Recharts-2F80ED?style=for-the-badge&logo=recharts&logoColor=white)]( https://recharts.org/ )[![Arcjet](https://img.shields.io/badge/Arcjet-0052CC?style=for-the-badge&logo=arcjet&logoColor=white)]( https://arcjet.com/ )

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

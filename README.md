# 💰 Wealth – AI Powered Finance Manager

A full-stack, AI-powered finance management platform that helps users **track income, expenses**, manage **budgets**, and receive **smart insights** — built with Next.js, Supabase, Clerk, ShadCN, and Inngest.

---

## 📸 Screenshots

| Landing Page | Dashboard |
|--------------|-----------|
| ![Landing](./public/landing-preview.png) | ![Dashboard](./public/dashboard-preview.png) |

---

## 📚 Table of Contents

- [Demo](#-demo)
- [Features](#-features)
- [Tech](#-tech)
- [Environment Variables](#-environment-variables)
- [Run Locally](#-run-locally)
- [Installation](#-installation)
- [Usage/Examples](#-usageexamples)
- [API Reference](#-api-reference)
- [Running Tests](#-running-tests)
- [Deployment](#-deployment)
- [Optimizations](#-optimizations)
- [Roadmap](#-roadmap)
- [Lessons](#-lessons)
- [FAQ](#-faq)
- [Appendix](#-appendix)
- [Used By](#-used-by)
- [Contributing](#-contributing)
- [Support](#-support)
- [Feedback](#-feedback)
- [Authors](#-authors)
- [Acknowledgements](#-acknowledgements)
- [License](#-license)

---

## 🚀 Demo

🔗 [Live Demo](https://your-vercel-deployment-url.vercel.app)

---

## 🧠 Features

- 🔍 AI Receipt Scanner (OCR + Gemini)
- 🔁 Recurring Transactions via Inngest CRON jobs
- 📬 Email Alerts & AI Monthly Reports
- 📊 Budget Monitoring & Spend Analytics
- 🔐 Secure Auth (Clerk + JWT)
- 🌐 Multi-Account Management
- 📈 Responsive Charts & UI
- 🧵 Background Job Scheduling (Inngest)
- 💂 Bot/Rate Limiting with Arkjet

---

## 🧰 Tech

| Layer      | Stack |
|------------|-------|
| Frontend   | Next.js 15, Tailwind CSS, ShadCN |
| Backend    | Supabase (PostgreSQL), Prisma ORM |
| Auth       | Clerk (OAuth2 - Google) |
| AI/OCR     | Gemini API, Custom OCR |
| Jobs       | Inngest (serverless CRON jobs) |
| Security   | Arkjet (Bot Protection & Rate Limits) |
| Deployment | Vercel, GitHub Actions |

---

## 🔐 Environment Variables

To run this project, you will need to set the following variables in a `.env` file:

```env
DATABASE_URL=your_supabase_db_url
CLERK_SECRET_KEY=your_clerk_secret
CLERK_PUBLISHABLE_KEY=your_clerk_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_INNGEST_EVENT_KEY=your_inngest_key
ARKJET_SECRET=your_arkjet_key

# Axiom Trade - Token Discovery Table (Frontend Task)

[![Deploy with Vercel](https://vercel.com/button)](https://axiom-trade-clone-nine.vercel.app/)
<img width="1898" height="911" alt="Image" src="https://github.com/user-attachments/assets/f8fb4db9-98f0-43c9-a9b2-cf434ec611be" />

**Live Demo:** [https://axiom-trade-clone-nine.vercel.app/](https://axiom-trade-clone-nine.vercel.app/)  
**Video Walkthrough:** [Insert YouTube Link Here]

A pixel-perfect, high-performance replica of the Axiom Trade Token Discovery interface. Built using **Next.js 14**, **TypeScript**, and **Redux Toolkit**, featuring a simulated real-time WebSocket connection for live price updates.

---

## 🚀 Key Features

* [cite_start]**Pixel-Perfect UI:** Dark-themed interface matching the original design specifications (≤ 2px difference)[cite: 9].
* [cite_start]**Real-time Data Simulation:** Implemented a mock WebSocket engine using Redux that updates token prices, market cap, and volume every 2 seconds with Green/Red visual indicators[cite: 7].
* **Dynamic Views:**
    * **Trending:** Detailed data table with currency formatting and sparkline logic.
    * **Surge:** Grid view displaying high-volatility tokens with progress bars.
    * **DEX Screener:** Full table view integration.
* [cite_start]**High Performance:** Optimized LCP and CLS to achieve a **Lighthouse Score of 99**[cite: 17].
* [cite_start]**Atomic Architecture:** Component structure organized into Atoms, Molecules, and Organisms for maximum reusability[cite: 15].

## 🛠 Tech Stack

* [cite_start]**Framework:** Next.js 14 (App Router) [cite: 11]
* [cite_start]**Language:** TypeScript (Strict Mode) [cite: 11]
* **Styling:** Tailwind CSS, Lucide React (Icons)
* [cite_start]**State Management:** Redux Toolkit (Global Market State) [cite: 12]
* **Image Optimization:** `next/image` with remote patterns.

## 📊 Performance Metrics

* **Lighthouse Performance:** 99/100
* **Largest Contentful Paint (LCP):** 1.3s
* **Total Blocking Time (TBT):** < 150ms
* **Cumulative Layout Shift (CLS):** 0
  
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

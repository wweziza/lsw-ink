## LSW.ink
Brand website with stock, credentials, management, etc. Built in Next.js, Mongodb, Express.

## Features
- Management - You can control the stock, order list, chart just from panel.

- Landing Page - It can be a landing page, either be e-commerce for your brand clothing

- Light, stable, easy-to-read code - You can easily understand the code and change the assets, theme, or whatever you want PS. Currently we have 2 theme mode (light and dark)

- Integrated with payment gateway (WIP) - Automatic payment integrated with [`Midtrans`](https://github.com/Midtrans/midtrans-nodejs-client), i've doing similar project but for `Discord.Js` bot named Jiro


## Getting Started

First, `npm install` and then run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Mongodb URL on `config.json` make sure you have a cluster or host it by yourself.

The Express.js run on port 5000 also http://localhost:3000 to see the website

You can start editing the page by modifying app/page.tsx. The page auto-updates as you edit the file.

This project uses next/font to automatically optimize and load Inter, a custom Google Font.

### Footlink that may helping you
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

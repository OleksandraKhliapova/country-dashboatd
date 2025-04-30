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

Feature: Country Dashboard with Select & Chart

# ✅ What I Implemented and Why

1. Built a minimal, interactive dashboard using Next.js (App Router) with TypeScript

2. Integrated Chakra UI’s new composable Select for both country and measure selection

3. Used GraphQL (graphql-request) to fetch country and cube data

4. Visualized the data with a Recharts line chart, showing the selected measure over time

5. Structured the UI with Chakra's layout primitives for responsiveness and readability

# ⛔ What I Chose Not to Implement

1. No global state management or shared context (kept everything component-local for speed)

2. No persistent routing, URL query syncing, or bookmarking support

3. No advanced visual polish or styling customizations beyond Chakra defaults

# 🔜What I’d Do Next With More Time

If I had more time, I would consider the following next steps to further improve the project:

1. Create a common Select component to reduce code duplication and ensure consistent behavior/styling across the app

2. Fix measure label formatting: currently, labels like life_expectancy are shown as-is; I’d display them as "Life expectancy" or use pre-defined labels for a more user-friendly appearance

3. Add tests cases to cover functionality

4. Improve accessibility (a11y) to ensure proper keyboard navigation and screen reader support

5. Switch to Apollo Client for more scalable GraphQL integration, including features like normalized caching and automatic retries

6. Use skeleton loaders instead of spinners for a more modern, responsive experience

7. Add error boundaries and fallback UIs for failed GraphQL requests or network issues

8. Implement URL query syncing so selected values persist on refresh and support sharing/bookmarking

# ⚖️ Decisions & Trade-offs

1. Prioritized clarity and minimalism over completeness due to the 2-hour constraint

2. Chose Recharts for fast and functional charting, aware it’s less polished visually than alternatives like Nivo or D3

3. Avoided overengineering (e.g., no custom hooks, no global state) to keep focus on task objectives

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Object-Oriented Programming & Design Patterns

### 1. Strategy Pattern
- **File**: `src/lib/services/PropertyService.js`
- **Implementation**: Used for filtering properties by purpose (`SaleFilterStrategy`, `RentFilterStrategy`, `AllFilterStrategy`).
- **Why it's useful**: Allows defining families of algorithms for filtering properties, making them interchangeable. It makes adding new filter criteria (like 'For Lease' or filtering by price) trivial without altering the core service logic.
- **Used by**: `PropertyService.getSaleProperties()`, `PropertyService.getRentProperties()`
- **Why a simpler alternative was not sufficient**: Using conditional `if-else` blocks in the filter logic would make the service harder to maintain as more filters are added. The Strategy pattern adheres to the Open-Closed Principle.

### 2. Singleton Pattern
- **File**: `src/lib/services/PropertyService.js`
- **Implementation**: `PropertyService` ensures only one instance of the service is created and exported (`export const propertyService = new PropertyService();`).
- **Why it's useful**: Provides a single, globally accessible instance of the service that maintains the state (the list of properties) and provides centralized access. 
- **Used by**: Listing pages (`/buy`, `/rent`) and detail pages (`/properties/[slug]`).
- **Why a simpler alternative was not sufficient**: Exporting raw functions and raw data arrays leads to duplicated imports and potentially duplicated data initialization if data fetching was asynchronous. A Singleton service provides a unified access point.

### 3. Facade Pattern
- **File**: `src/lib/services/PropertyService.js`
- **Implementation**: `PropertyService` provides simple methods (`getSaleProperties`, `getRentProperties`, `getPropertyBySlug`) that hide the underlying complexity of the `properties` array and the strategies.
- **Why it's useful**: The UI components do not need to know about how properties are stored or filtered; they just call simple methods.
- **Used by**: `/buy/page.js`, `/rent/page.js`, `/properties/[slug]/page.js`
- **Why a simpler alternative was not sufficient**: Making components directly manipulate and filter the raw `properties` array would lead to duplicated business logic across multiple pages.

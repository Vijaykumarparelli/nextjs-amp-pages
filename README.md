To write content I took referaces from [`Next.js`](https://nextjs.org/) documentation and [`AMP`](https://amp.dev/) documentation

## Key Features

- **Faster Loading:** AMP pages are optimized for rapid loading, resulting in reduced page load times and improved user engagement.
- **Pre-rendering:** AMP pages often pre-render in search engine results, allowing users to access content swiftly without waiting for full page loading.
- **Limited JavaScript:** AMP enforces constraints on custom JavaScript usage, permitting only asynchronous and AMP-specific JavaScript. This enhances both performance and security.
- **Responsive Design:** AMP websites are built with responsiveness in mind, ensuring content displays and functions well across various devices and screen sizes.
- **Caching:** AMP content can be cached by content delivery networks (CDNs), making it readily available and decreasing server load.
- **SEO Benefits:** Search engines like Google often prioritize AMP content in search results, potentially leading to increased visibility and traffic for AMP pages.
- **Improved Ad Performance:** AMP supports fast-loading ads, contributing to a better user experience while still offering opportunities for publishers to monetize their content.

## [useAmp](https://nextjs.org/docs/pages/api-reference/functions/use-amp)

With [`Next.js`](https://nextjs.org/) you can turn any React page into an AMP page, with minimal config, and without leaving React.

## Enabling AMP

To enable AMP support for a page, and to learn more about the different AMP configs
To enable AMP, add the following config to your page:
`[#bd2864] export const config = { amp: true }`
`true` - The page will be AMP-only
`hybrid` - The page will have two versions, one with AMP and another one with HTML

In this I go with `{ amp: true }`

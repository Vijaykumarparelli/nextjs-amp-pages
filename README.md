## Creating and adding styles in AMP pages using Next.js

## Key Features if AMP pages

- **Faster Loading:** AMP pages are optimized for rapid loading, resulting in reduced page load times and improved user engagement.
- **Pre-rendering:** AMP pages often pre-render in search engine results, allowing users to access content swiftly without waiting for full page loading.
- **Limited JavaScript:** AMP enforces constraints on custom JavaScript usage, permitting only asynchronous and AMP-specific JavaScript. This enhances both performance and security.
- **Responsive Design:** AMP websites are built with responsiveness in mind, ensuring content displays and functions well across various devices and screen sizes.
- **Caching:** AMP content can be cached by content delivery networks (CDNs), making it readily available and decreasing server load.
- **SEO Benefits:** Search engines like Google often prioritize AMP content in search results, potentially leading to increased visibility and traffic for AMP pages.
- **Improved Ad Performance:** AMP supports fast-loading ads, contributing to a better user experience while still offering opportunities for publishers to monetize their content.

## AMP in Next.js

### [useAmp](https://nextjs.org/docs/pages/api-reference/functions/use-amp)

With [`Next.js`](https://nextjs.org/) you can turn any React page into an AMP page, with minimal config, and without leaving React.

To enable AMP support for a page, and to learn more about the different AMP configs
To enable AMP, add the following config to your page:
`export const config = { amp: true }`
`true` - The page will be AMP-only
`hybrid` - The page will have two versions, one with AMP and another one with HTML

In this I am going with `{ amp: true }`
In the pages folder I created amp folder for amp pages.
In the components `AmpLayout` here I maintained header section and global styles.
In styles folder i created `amp-styles.js`. here I maintained all styles witch I go to use in all files. same like `global styles`.
In `AmpLayout` bottom added style tag with `jsx global` attributes. note style tag place you can adjest as per your convenience

### Style jsx global

Next.js includes Styled JSX by default, so getting started is as simple as adding a [`<style jsx global>`](https://nextjs.org/blog/styling-next-with-styled-jsx) tag into an existing React element and writing CSS.
By adding just a single jsx attribute to a `<style>` element, you can write standard CSS that gets auto prefixed and automatically scoped to the component. `<style jsx>` elements should be placed inside the root element of the component.
Most projects need some global styles to style the body element or provide css resets. Styled JSX allows us to add global styles using` <style jsx global>`.

If we use `next/link` component while writing styles in module level css won't work because it create unique jsx key className.
If we use html `<a>` element on build you will get error. To fix this error need to add eslink rules in `.eslintrc.json` file. [Please visit for more info](https://nextjs.org/docs/messages/no-html-link-for-pages)

# Project Name

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

A modern Next.js application with smooth scrolling animations and dynamic content configuration.

## 📁 Project Structure

### Content Configuration

Most of the application's content is centrally managed through the configuration file located at:

```
src/components/contentConfig
```

**Note**: While most content is managed through this config file, some components still contain raw text within their tags and may need to be updated directly.

### Key Configuration Sections

The main content configuration includes:

-   **Navigation Menu** (`menuConfig`) - Site navigation items with targets and links
-   **Challenge Section** (`challengeConfig`) - Challenge statements with icons and descriptions
-   **Fix Section** (`fixConfig`) - Solution explanations with images
-   **Benefits** (`benefitsConfig`) - Product benefits with icons and tags
-   **Pricing Plans** (`plansConfig`) - Subscription tiers and features
-   **Testimonials** (`testimonialsConfig`) - Customer feedback and reviews

## 🔗 Adding Links

When adding external links to the navigation or other sections, ensure you include the full URL with protocol:

```typescript
// ✅ Correct - includes http/https protocol
{ label: 'External Link', href: 'https://example.com' }

// ❌ Incorrect - missing protocol
{ label: 'External Link', href: 'example.com' }
```

Example from the config:

```typescript
// Uncomment and modify as needed
// { label: 'Manifestation', href: 'https://google.com' },
```

## 🖼️ Image Management

### Local Images

For local images (icons, logos, etc.), place them in the `assets` folder and import them:

```typescript
import myImage from '@/assets/myImage.json' // For animations
import myLogo from '@/assets/myLogo.png' // For static images
```

### External Images

For external images (testimonials, remote content), you can link directly but must configure the domains in `next.config.ts`:

```typescript
images: {
  domains: [
    'images.unsplash.com',
    'your-cdn-domain.com', // Add your CDN domain here
  ],
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'images.unsplash.com',
      port: '',
      pathname: '/**',
    },
    // Add more patterns as needed
  ],
}
```

## 🖱️ Smooth Scrolling

The application uses **Lenis** for smooth scrolling behavior.

### Customizing Scroll Behavior

To modify scrolling settings, edit the configuration in:

```
src/context/LenisContext
```

This context provides smooth scrolling throughout the application and can be customized for different scroll speeds, easing, and behaviors.

## 🚀 Getting Started

First, install dependencies:

```bash
yarn install
```

Then, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file..

## 📝 Content Updates

### Quick Content Changes

For most content updates, edit the configuration file at `src/components/contentConfig`:

1. **Navigation**: Update `menuConfig` array
2. **Challenge Section**: Modify `challengeConfig` items
3. **Solutions**: Edit `fixConfig` entries
4. **Benefits**: Update `benefitsConfig` items
5. **Pricing**: Modify `plansConfig` plans
6. **Testimonials**: Update `testimonialsConfig` entries

### Adding New Images

1. Place images in the `assets` folder
2. Import them in the config file
3. For external images, update `next.config.ts` domains

### Navigation Targets

Use `target` for internal scrolling sections and `href` for external links:

```javascript
{ label: 'Internal Section', target: 'section-id' },
{ label: 'External Link', href: 'https://example.com' },
```

## 🛠️ Technical Details

-   **Framework**: Next.js with TypeScript
-   **Styling**: Tailwind CSS (implied from the smooth scrolling context)
-   **Animations**: GSAP + Lenis for smooth interactions
-   **Image Optimization**: Next.js Image component with WebP/AVIF support

## 📋 Configuration Files

-   `next.config.ts` - Next.js configuration, image domains, and optimizations
-   `src/components/contentConfig` - Main content configuration
-   `src/context/LenisContext` - Smooth scrolling configuration

## 🔧 Customization

The project is designed for easy customization through the central configuration file. Most visual content, text, and navigation can be updated without touching individual component files.

For components that still contain raw text, you'll need to locate and update them directly within their respective files.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

# nextjs
Lets make some projects on NextJS and learn some new cool concepts

- Next JS is a React framework
- When we build any UI using React, we had the pain of finding the right library and sticthc tohether to build a UI
- React made this work simplified by making a framework where all these important libraries are available inbuilt 

## Why do we need to learn NextJs
- File-Based Routing
    - Next.js offers a file-based routing system that automatically maps files inside the pages directory to routes. For example, `pages/home.jsx` automatically becomes accessible via `/home`.

    - Unlike React, where we typically use react-router-dom and configure <BrowserRouter>, <Routes>, and <Route>, Next.js requires no additional setup. The file structure itself determines the routes.
    
   - Dynamic routes are created by using brackets in the file name, like [id].jsx, which would match any route with an id parameter.

- Pre-Rendering
    - In traditional React apps, the HTML is generated on the client side, which can be less favorable for SEO since search engines may struggle to index content that requires JavaScript to render. Next.js addresses this by generating the HTML on the server side before sending it to the client.

    - Two Pre-Rendering Strategies:
        - Static Generation (SSG): Pages are generated at build time and reused on every request, which is great for performance and SEO.
        - Server-Side Rendering (SSR): Pages are generated on each request, ensuring that data is always up-to-date.

- API Routes
    - Integrated Backend: Next.js allows to define API routes directly within the application under the `pages/api` directory. This enables to handle both frontend and backend logic in one project.
    - No Need for Express: We can build a fully functional API without needing to set up a separate `ExpressJS server`. Each file in the `pages/api` folder becomes an API endpoint.

- CMS Modules
    - Headless CMS Integration: Next.js easily integrates with headless CMS platforms like `Contentful`, `Sanity`, or `Strapi`, which allows to fetch and render dynamic content, fetch data at build time (SSG) or on each request (SSR).
    - Content Management: This makes it easy to manage content from a CMS while benefiting from the static or server-rendered nature of Next.js.

- Authentication
    - Built-In Support: Next.js offers built-in authentication capabilities, especially with libraries like `next-auth` that provide seamless integration for `OAuth providers`, `JWT`, and `session-based` authentication.
    - Secure API Routes: You can protect API routes with middleware to ensure that only authenticated users can access certain data or functionality.

- Environment Readiness
    - Environment-Specific Configurations: Next.js makes it easy to handle different environments (development, production, etc.) through environment variables `(.env.local, .env.production)`. These configurations can dictate behavior like API endpoints, debugging levels, and more.
    - Optimized for Production: Next.js is optimized out-of-the-box for production, with features like code splitting, image optimization, and serverless deployment compatibility.



## NextJS installation
- 1. Install NODE (Node version >= 18.18.0)
- 2. NextJs installation 
    - https://nextjs.org/docs/getting-started/installation
```
npx create-next-app@latest
```
- 3. Follow the prompts and install the nextJS
- 4. This automatically installs all the dependancies
```
Installing dependencies:
- react
- react-dom
- next
```
- 5. This automatically creates the necessary scripts on the `package.json`
```
 "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
"dependencies": {
    "react": "^18",
    "react-dom": "^18",
    "next": "14.2.5"
  },
```
- 6. To start the next - we can use `npm run dev`
- 7. This starts the nextJs on default port 3000
- 8. I am using `next 14`

- <img width="596" alt="NextJs-Start" src="https://github.com/user-attachments/assets/2d2831eb-cb34-4532-84f1-82e6f6dad99d">

- The default page can be edited from this path `app/page.js`
```
import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1 className="p-10"> Hello Next JS</h1>
    </>
  );
}
```
- <img width="477" alt="helllo-next-js" src="https://github.com/user-attachments/assets/d4060229-46d0-4655-b7c6-4d0707548bc6">

## Important concepts

- <img width="654" alt="next-client" src="https://github.com/user-attachments/assets/72db3cb2-5960-4dba-bdd0-86345175d58f">

- Server COmponent
- By default, all the components are server components by default
    - That means, the components gets rendered into the server first before it loads into client
    - None of the React Hooks are allowed inside the Server component

- <img width="453" alt="server-com-1" src="https://github.com/user-attachments/assets/49d23de1-3c3e-4f6f-94f2-d5f42f1535af">
- <img width="822" alt="server-com-1 1" src="https://github.com/user-attachments/assets/a367e688-da18-4a10-b490-144fa626f16f">

- Client Component
- We can override that as a client component as well
    - situation like we want to load something on client upon some sideeffect like button click
    - We will use useeffect() to hanlde this
    - But, to override the component as client rendering, on the top of the component `use client` directive
    - All the react hooks are accessible inside client component

- <img width="515" alt="client-component-1" src="https://github.com/user-attachments/assets/0b22ab27-ca9a-41f4-81cb-b5e3e9ea1fe2">

- <img width="214" alt="client-component-1 1" src="https://github.com/user-attachments/assets/5ba5f29d-0385-4566-b95d-09f913e6ce55">



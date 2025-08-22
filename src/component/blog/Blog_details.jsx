import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import blog1 from '../../assets/blog1.jpg'
import intern from '../../assets/intern.webp'
import blog32 from '../../assets/blog32.png'
import blog42 from '../../assets/blog42.webp'
import { CiCalendarDate } from 'react-icons/ci';

const Blog_details = () => {
    const { id } = useParams()
    const [currentblog, setCurrentblog] = useState(null)

    console.log(id);

    const blog = [{
        id: 1, title: "How to Grab an Internship in Web Development", description: `Step by Step Guide to Getting a Web Development Internship
Are you an aspiring web developer searching for your first internship? Whether you're a student, self taught coder, or someone transitioning into tech, grabbing a web development internship can be your launchpad to a successful career. In this blog, we'll walk you through the complete steps from building your skills to standing out to recruiters and we'll also share 1000+ developer portfolios for inspiration to help you build your own!

1. Master the Basics of Web Development
Before applying for internships, it's essential to build a solid foundation in the core technologies of web development. Start by understanding how HTML structures a webpage, how CSS styles it, and how JavaScript brings interactivity. These three form the holy trinity of frontend development.

Once you’re confident with the basics, explore modern CSS frameworks like Bootstrap or Tailwind CSS to speed up your UI design. It’s also important to get hands-on with version control tools like Git and GitHub, as most companies use them to manage code. Don’t forget to pick a frontend JavaScript library like React or Vue.js, and at least gain a basic understanding of the backend such as using Node.js, PHP, or Flask to connect to databases or handle forms.

Pro Tip: Use free resources like FreeCodeCamp, W3Schools, or The Odin Project to polish your skills.

2. Build Real-World Projects
Instead of just doing tutorials, start building your own mini projects even simple ones. Real-world projects help you apply what you’ve learned and show recruiters that you can build and think independently. Think of a personal website, a weather app using an API, or a simple blog with a login system.

Each project you complete adds credibility to your portfolio and boosts your confidence. Host these projects online using free platforms like Netlify, Vercel, or GitHub Pages. This shows initiative and professionalism when recruiters click on your resume links.

Once you've built projects, host them online using Netlify, Vercel, or GitHub Pages.

3. Build a Professional Portfolio Website
Your portfolio is your first impression make it count. It should reflect your personality, technical skills, and growth. A well structured portfolio includes a bio, skills section, project demos with GitHub links, and an easy way to contact you via LinkedIn or email.

4. Craft a Targeted Web Developer Resume
Your resume should speak directly to web development roles. Keep it one page, tailor it for internships, and avoid adding unrelated experience. Highlight your technical stack, completed projects, and include links to your GitHub and portfolio. Tools like Canva, FlowCV, or Novoresume make it easy to design clean, modern resumes without advanced graphic skills.

Remember to sprinkle keywords like Frontend Intern, React Developer, or Web Development Projects so your resume gets picked up by applicant tracking systems (ATS).

5. Start Applying Smartly (Where to Apply)
Don’t just rely on one platform. Use LinkedIn Jobs, Internshala, Wellfound (formerly AngelList), Remotive, and Indeed with the right filters. Look for roles labeled as internship, junior frontend, or remote web developer. Tech Discord communities, subreddits like r/webdev, and even cold-emailing local agencies can land you unexpected opportunities.

Always personalize your application messages no copy-paste cover letters. Mention the company name and what caught your eye about the role.

Tip: Apply with a personalized message, not generic cover letters.

6. Optimize Your LinkedIn Profile
Your LinkedIn is your online handshake. To attract internship offers:

Use a professional headshot
Add a compelling headline: "Aspiring Web Developer | React Enthusiast | Open for Internships"
Post about your learning journey, project launches, and tech tips
Add skills and get endorsements
7. Contribute to Open Source (Bonus Point)
Open source is a great way to collaborate, learn from experienced devs, and get noticed. Even fixing typos in documentation counts! Look for GitHub repositories with tags like

good-first-issue
beginner-friendly
help-wanted
This shows recruiters that you're active in the developer community.

  8. Prepare for Interviews
When you finally get interview calls, preparation is key. Be ready to explain your own projects. How you built them, why you chose specific tools, and what challenges you faced. Interviewers also ask basic JavaScript and CSS questions, along with a few behavioral ones like “Why should we hire you?”`, final: " Final Thoughts", details:`Getting an internship in web development takes effort but it's 100% achievable if you stay consistent. Build, share, and apply relentlessly. Keep learning, showcase your work, and never be afraid to reach out and ask for opportunities.

Your first internship could be the start of something life-changing.`, img: intern,time:"March 15, 2025",
    },


    {
        id: 2, title: "The Ultimate Frontend Developer Toolkit for 2025", description: `The Ultimate Frontend Developer Toolkit for 2025: Global Edition
The frontend development world in 2025 is more exciting and competitive than ever. With new technologies, smarter AI assistants, and blazing-fast runtimes, staying updated is not a choice it’s a necessity. Whether you’re freelancing, working for a top tech company, or building your SaaS, this guide reveals the essential frontend tools to future-proof your skills and attract high-paying global opportunities.

1. Framework Wars 2025: React 19, Vue 4, or Svelte 5?
React 19 introduces Server Components, elevating full-stack development with Next.js 15. Vue 4 offers a smoother learning curve and better TypeScript support, while Svelte 5’s compiler-first approach results in lightning-fast builds. Each has global demand especially in the U.S., Europe, and Southeast Asia.

React 19 + Next.js 15: Best for enterprise-scale apps, performance-critical SPAs
Vue 4 + Nuxt 4: Perfect for mid-size apps, dashboards, and progressive adoption
Svelte 5 + SvelteKit: Ideal for fast MVPs, static sites, and minimal JS use cases
2. CSS Tools That Will Dominate in 2025
While Tailwind CSS remains dominant, newer options like UnoCSS offer on-demand utility generation and better performance. Open Props standardizes design tokens globally. Combine them with Framer Motion and GSAP for interactive animations that boost UX and reduce bounce rates crucial for SEO.

3. AI Tools That Code for You (Almost)
2025 is the year of AI-assisted development. GitHub Copilot X, CodeWhisperer, and v0.dev allow developers to write, debug, and even design UI through prompts. Integrate them with VS Code or your IDE for maximum productivity.

Copilot X: Best for pair programming, writing tests, documentation
Amazon CodeWhisperer: Enterprise-friendly AI coding assistant
v0.dev: Converts text to production-ready UIs great for MVPs
4. Speed & Testing: Optimize or Fall Behind
WebPageTest + Lighthouse CI: Core Web Vitals audits
Vitest for blazing-fast test execution
Partytown: Move third-party scripts off the main thread
Cypress Component Testing: Ensure UI reliability on every commit
5. Productivity Boosters for the Modern Developer
Bun: Replace Node.js, npm, and Jest with one fast runtime
Volta: Manage multiple Node versions across projects
Preline UI: Tailwind-based UI kit for production-ready components
Shadcn UI: Perfect for building accessible, styled components`, final: " Final Advice for 2025", details:`The tools are powerful, but your mindset is the true multiplier. Focus on fundamentals JavaScript, DOM, CSS, accessibility and learn tools that align with your goals. Track performance, prioritize accessibility, and let automation handle the boring stuff.`, img: blog1,time:"July 25, 2025",
    },


    {
        id: 3, title: "React Compiler Beta Release", description: `The React team is excited to share new updates:

We’re publishing React Compiler Beta today, so that early adopters and library maintainers can try it and provide feedback.
We’re officially supporting React Compiler for apps on React 17+, through an optional react-compiler-runtime package.
We’re opening up public membership of the React Compiler Working Group to prepare the community for gradual adoption of the compiler.
At React Conf 2024, we announced the experimental release of React Compiler, a build-time tool that optimizes your React app through automatic memoization. You can find an introduction to React Compiler here.

Since the first release, we’ve fixed numerous bugs reported by the React community, received several high quality bug fixes and contributions1 to the compiler, made the compiler more resilient to the broad diversity of JavaScript patterns, and have continued to roll out the compiler more widely at Meta.

In this post, we want to share what’s next for React Compiler. Backwards Compatibility 
React Compiler produces code that depends on runtime APIs added in React 19, but we’ve since added support for the compiler to also work with React 17 and 18. If you are not on React 19 yet, in the Beta release you can now try out React Compiler by specifying a minimum target in your compiler config, and adding react-compiler-runtime as a dependency. You can find docs on this here.

Using React Compiler in libraries 
Our initial release was focused on identifying major issues with using the compiler in applications. We’ve gotten great feedback and have substantially improved the compiler since then. We’re now ready for broad feedback from the community, and for library authors to try out the compiler to improve performance and the developer experience of maintaining your library.

React Compiler can also be used to compile libraries. Because React Compiler needs to run on the original source code prior to any code transformations, it is not possible for an application’s build pipeline to compile the libraries they use. Hence, our recommendation is for library maintainers to independently compile and test their libraries with the compiler, and ship compiled code to npm.

Because your code is pre-compiled, users of your library will not need to have the compiler enabled in order to benefit from the automatic memoization applied to your library. If your library targets apps not yet on React 19, specify a minimum target and add react-compiler-runtime as a direct dependency. The runtime package will use the correct implementation of APIs depending on the application’s version, and polyfill the missing APIs if necessary.

You can find more docs on this here.

Opening up React Compiler Working Group to everyone 
We previously announced the invite-only React Compiler Working Group at React Conf to provide feedback, ask questions, and collaborate on the compiler’s experimental release.

From today, together with the Beta release of React Compiler, we are opening up Working Group membership to everyone. The goal of the React Compiler Working Group is to prepare the ecosystem for a smooth, gradual adoption of React Compiler by existing applications and libraries. Please continue to file bug reports in the React repo, but please leave feedback, ask questions, or share ideas in the Working Group discussion forum.

The core team will also use the discussions repo to share our research findings. As the Stable Release gets closer, any important information will also be posted on this forum.

React Compiler at Meta 
At React Conf, we shared that our rollout of the compiler on Quest Store and Instagram were successful. Since then, we’ve deployed React Compiler across several more major web apps at Meta, including Facebook and Threads. That means if you’ve used any of these apps recently, you may have had your experience powered by the compiler. We were able to onboard these apps onto the compiler with few code changes required, in a monorepo with more than 100,000 React components.

We’ve seen notable performance improvements across all of these apps. As we’ve rolled out, we’re continuing to see results on the order of the wins we shared previously at ReactConf. These apps have already been heavily hand tuned and optimized by Meta engineers and React experts over the years, so even improvements on the order of a few percent are a huge win for us.

We also expected developer productivity wins from React Compiler. To measure this, we collaborated with our data science partners at Meta2 to conduct a thorough statistical analysis of the impact of manual memoization on productivity. Before rolling out the compiler at Meta, we discovered that only about 8% of React pull requests used manual memoization and that these pull requests took 31-46% longer to author3. This confirmed our intuition that manual memoization introduces cognitive overhead, and we anticipate that React Compiler will lead to more efficient code authoring and review. Notably, React Compiler also ensures that all code is memoized by default, not just the (in our case) 8% where developers explicitly apply memoization.`, final: " Final Roadmap", details:`This is not a final roadmap, and is subject to change.

We intend to ship a Release Candidate of the compiler in the near future following the Beta release, when the majority of apps and libraries that follow the Rules of React have been proven to work well with the compiler. After a period of final feedback from the community, we plan on a Stable Release for the compiler. The Stable Release will mark the beginning of a new foundation for React, and all apps and libraries will be strongly recommended to use the compiler and ESLint plugin.

✅ Experimental: Released at React Conf 2024, primarily for feedback from early adopters.
✅ Public Beta: Available today, for feedback from the wider community.
🚧 Release Candidate (RC): React Compiler works for the majority of rule-following apps and libraries without issue.
🚧 General Availability: After final feedback period from the community.
These releases also include the compiler’s ESLint plugin, which surfaces diagnostics statically analyzed by the compiler. We plan to combine the existing eslint-plugin-react-hooks plugin with the compiler’s ESLint plugin, so only one plugin needs to be installed.

Post-Stable, we plan to add more compiler optimizations and improvements. This includes both continual improvements to automatic memoization, and new optimizations altogether, with minimal to no change of product code. Upgrading to each new release of the compiler is aimed to be straightforward, and each upgrade will continue to improve performance and add better handling of diverse JavaScript and React patterns.

Throughout this process, we also plan to prototype an IDE extension for React. It is still very early in research, so we expect to be able to share more of our findings with you in a future React Labs blog post.`, img: blog32,time:"July 25, 2025",
    },

    {
        id: 4, title: "HTML, CSS, JavaScript Roadmap for Beginners", description: `1. Learn the Basics of HTML
HTML (HyperText Markup Language) is the backbone of every web page. It defines the structure and content of websites using tags and elements. As a beginner, start by understanding basic HTML tags such as headings, paragraphs, links, images, and lists. Learning semantic HTML will help you build accessible and SEO-friendly websites. Mastering HTML is essential before moving to styling or interactivity.

2. Master CSS for Styling and Layout
CSS (Cascading Style Sheets) controls the visual appearance of your HTML content. Start by learning how to apply colors, fonts, spacing, and layouts using properties like margin, padding, and display. Understand the box model concept, positioning, and responsive design principles using media queries. With CSS, you’ll transform plain HTML into beautiful, user-friendly web pages. Avoid inline styles; instead, practice writing clean, reusable CSS.

3. Understand JavaScript Fundamentals
JavaScript brings websites to life by adding interactivity and dynamic behavior. Begin by learning variables, data types, functions, loops, and conditional statements. Grasp the Document Object Model (DOM) to manipulate HTML elements with JavaScript. Asynchronous programming using Promises and async/await is key for handling real-time data. Developing JavaScript skills is crucial for frontend development and will open doors to frameworks and libraries like React or Vue.

4. Explore Responsive and Mobile-First Design
With most users browsing on mobile devices, responsive design is a must-have skill. Learn to create flexible layouts that adapt to different screen sizes using CSS Grid and Flexbox. Mobile-first design means designing for the smallest screen first and then scaling up, ensuring your site looks great on all devices. Understanding accessibility and performance optimization also plays a significant role in modern web development.

5. Get Comfortable with Developer Tools and Version Control
Using browser developer tools helps debug your HTML, CSS, and JavaScript efficiently. Learn to inspect elements, test responsive layouts, and analyze performance. Additionally, mastering Git and GitHub for version control is vital to track changes and collaborate with others. These skills enhance your workflow and prepare you for real-world projects.

6. Learn Modern JavaScript and Framework Basics
Once comfortable with vanilla JavaScript, explore ES6+ features such as arrow functions, destructuring, modules, and classes. Then, dive into popular frontend frameworks like React, Vue, or Angular. These frameworks streamline complex UI development and are highly sought after in the industry. Familiarity with build tools like Webpack, Babel, and package managers like npm or yarn will also boost your skillset.

7. Understand Basic Backend and APIs
Full-stack knowledge is a great advantage. Learn the basics of backend development with Node.js and Express. Understand RESTful APIs, how to fetch data asynchronously, and work with JSON. This enables you to build interactive web applications that connect with servers and databases.

8. Practice Building Projects Regularly
Theory is important, but practical experience is key. Build small projects like personal portfolios, to-do apps, or simple blogs to apply what you learn. Incrementally increase complexity to include user authentication, data fetching, or state management. Contributing to open-source projects or collaborating with peers will also sharpen your skills and prepare you for professional work.

9. Keep Up with Web Development Trends
The web ecosystem evolves rapidly. Stay updated with the latest standards, tools, and best practices by following blogs, joining communities, and watching tutorials. Learning about progressive web apps (PWAs), static site generators, and serverless architectures can future-proof your career and keep you competitive.`, final: " Final Thoughts", details:`Starting your journey with HTML, CSS, and JavaScript might seem overwhelming, but with a structured roadmap and consistent practice, you can build strong foundations for a rewarding career in web development. Focus on understanding concepts deeply rather than just memorizing syntax. Combine creativity with technical skills, and always keep learning.`, img: blog42,time:"June 5, 2025",
    },

    {
        id: 5, title: "HTML, CSS, JavaScript Roadmap for Beginners", description: " javascriprt is a major part of cording.", final: " Final Thoughts", details:``, img: intern,time:"June 5, 2025",
    }]
    useEffect(() => {
        setCurrentblog(blog.find((b) => b.id == id))
    }, [])
    console.log(currentblog, "blog");

    return (

        <div className="pt-[10%] min-h-screen flex flex-col  bg-white/10 ">
            <div className="w-[50%] mx-auto flex items-center justify-center  ">
                <img className='object-cover' src={currentblog?.img} alt="" />
            </div>
            <div className="flex gap-x-3 items-center px-[20px] py-[18px]">
                <CiCalendarDate size={25} className='text-gray-400' />
                <p className='font-primary font-normal text-[16px] text-gray-400'>{currentblog?.time}</p>
            </div>
            <div className="flex px-[20px] py-[18px] rounded-[20px] group">
                <div className=" ">
                    <h2 className='font-primary font-bold text-[32px] text-white'>{currentblog?.title}</h2>
                    <p className='font-primary font-medium   text-[16px] text-white'>{currentblog?.description}</p>
                    <h2 className='font-primary font-bold text-[32px] text-white'>{currentblog?.final}</h2>
                    <p className='font-primary font-medium   text-[16px] text-white'>{currentblog?. details}</p>
                </div>
            </div>

        </div>


    )
}

export default Blog_details
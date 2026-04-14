<centeredimage src="/projects/images/thumbnail_SocialMedia.png" alt="Social Media App Home Page"></centeredimage>

# Table of Contents
* [Introduction](#introduction)
* [Features](#features)
* [Visual Showcase](#visual-showcase)
* [Conclusion & Personal Thoughts](#conclusion--personal-thoughts)

---

# Introduction

**Social Media Prototype** is a web application I built as a learning project to test out and challenge what I had learned about web development at that point. I knew this would be challenging because of the large number of moving parts behind every social media app.

### Tech Stack

* **Frontend: React:** I chose React to keep my UI design *modular*, thanks to its **component-based architecture** which allowed me to build reusable blocks *(like post cards, navigation bars, modals)*, helping keep my code organized. It also handled **state management** which helped make the app feel "live" and responsive more efficiently by allowing the UI to update instantly with state changes.
* **Styling: Tailwind CSS:** I used Tailwind for efficiency purposes. Being able to build a custom, responsive design directly in my HTML sped up the development significantly and made it easier, allowing me to focus more on the logic rather than design.
* **Backend: Node.js & Express:** I used Node.js to keep the entire project in a single, JavaScript environment, for consistency. Express allowed me to build an API to handle user requests, authentication logic, data flow between the frontend and the database. Furthermore, it helped me implement custom error handlers and middleware for my API.
* **Database: MongoDB & Mongoose:** I chose a NoSQL approach for its flexibility, because it allowed me to easily modify my database. To interact with the database, I used **Mongoose** as it allowed me to define structured schemas and models directly in my code, similarly to *EF Core* in .NET. This approach helped me design a document-based database while still ensuring data validation.

### The Challenge

A social media app needs to feel "live", users need to be able to message each other, receive notifications, see interactions with their posts, all in real-time. Having already worked with real-time sync in my [C#/.NET Notes & Reminders App](/projects/notes_reminders_app), using *PubNub*, it was my initial plan to do the same here.

However, I decided to challenge myself with a different approach: *Could I implement real-time functionality without relying on a third-party service?*

I wanted to move away from an external service and implement the real-time communication layer directly into my own backend. This led me to **Socket.IO**.

By using WebSockets, I was able to build a *"bidirectional"* connection between the client and the server. The concept is simple: the client performs an action, the server catches it, and then **broadcasts** that data to other users, all within **milliseconds**. This gave me full control over the data flow with features such as instant messaging and live notifications.

Another challenge I knew I was going to face was **Responsive Design**. A social media platform has a lot of UI elements, and keeping the layout all of those components consistent across different screen sizes is big task. Fortunately, Tailwind made the implementation more efficient.

# Features

Since this was a prototype focused on the **MERN stack** (MongoDB, Express, React, Node) and **Socket.IO**, I prioritized implementing the *core features* of a social media app, like posting and user interactions, rather than spending time on extra visual polish.

* **User Authentication:** Registration and login system using **JSON Web Tokens (JWT)** for session management.
* **Interactive Posts:** Users can create, reply to, like, and delete posts. Replies function as standalone posts in the feed but include a reference link to the original post, similar to popular platforms like [X (Twitter)](https://x.com/). Users can also see a list of people who liked a post.
* **Instant Feedback:** Thanks to Socket.IO, users receive real-time notifications for every interaction, whether their post gets a new like or reply, or they gain a new follower. Furthermore, it allows for **instant messaging**, letting users communicate with each other in real-time.
* **Image Support:** Posts can also include an image through an external URL *(like Imgur)* to keep the database lightweight.
* **Profile Personalization:** Users can personalize their public profile by changing their **profile picture and writing a custom "bio"**.
* **Fully Responsive:** Thanks to Tailwind, the website layout is consistent and intuitive regardless of the screen size. Furthermore, some elements adapt to the screen size, for example: *the navigation bar turns into a bottom drawer on phones!*

<webmvideo src="/projects/videos/social_media_prototype/responsiveDesignExample.webm" alt="Responsive Design: side-by-side comparison"></webmvideo>

## Visual Showcase

<centertext>

### Instant Feedback, Responsive Design

</centertext>

<webmvideo margintop=-12 src="/projects/videos/social_media_prototype/realtimeNotifications.webm" alt="Instant Feedback & Responsive Design Example"></webmvideo>

<centertext>

Actions such as following other users are **instantly visible** on the user's screen. Other users also receive instant *toast* notifications, providing a feeling of "connection" to each other.

The **Responsive Design** ensures the layout is consistent regardless of screen size. In the video example, notice how the *"Direct Messages"* panel on the right side automatically collapses as the screen width changes, so the main feed remains in focus.

</centertext>

<centertext>

### Instant Messages

</centertext>

<webmvideo margintop=-12 src="/projects/videos/social_media_prototype/instantMessages.webm" alt="Instant Messages Example"></webmvideo>

<centertext>

Thanks to Socket.IO, users can **exchange messages in real-time**, adding another layer of interaction to the platform. The video shows **two different ways I implemented live communication:**
* **Persistent Chat Window:** Users can open small chat windows in the bottom right of their screen to message while still browsing their feed.
* **Dedicated Messages Page:** If messages are the main focus, users can open this page for a full-screen view of their messages, inspired by applications like *Discord*.

</centertext>

<centertext>

### Post Interactions

</centertext>

<webmvideo margintop=-12 src="/projects/videos/social_media_prototype/postInteractions.webm" alt="Showcase of Different Post Interactions"></webmvideo>

<centertext>

As shown in the video, posts can be **liked and replied to**. The author of the post is instantly notified of any interactions with their post. Replies to posts are also treated as *standalone posts* that are *linked to the original post*.

</centertext>

<centertext>

### Profile Personalization

</centertext>

<webmvideo margintop=-12 src="/projects/videos/social_media_prototype/profilePersonalization.webm" alt="Profile Personalization Showcase"></webmvideo>

<centertext>

Users can make their identity on the platform *unique* by **changing their profile picture** and **writing a custom "bio"** that shows publicly on their profile.

</centertext>

# Conclusion & Personal Thoughts

Building this social media prototype was a great **learning experience**, and it gave some insight on **building a full-stack web application**. It forced me to improve my **React skills** – specifically in complex state management and building a responsive UI – all while syncing a real-time **Socket.IO** communication layer on top of my **REST API**, built with **Node.js & Express**. Additionally, it helped me learn about the NoSQL concept with **MongoDB & Mongoose**.

**Some of the key lessons I've learned with this project:**
* **User Authorization:** I learned how to implement secure authorization on my back-end using **custom Express middleware** and **JSON Web Tokens**, so only authorized users had access to protected REST routes. Furthermore, I implemented a **JWT-based handshake** for all Socket.IO connections as well, preventing unauthorized access to the web sockets.
* **Responsive Design:** Since this was a social media app prototype, I had to ensure a lot of UI elements would stay in the right place, regardless of screen size. This went *beyond* the standard *responsive styling in TailwindCSS* – I had to ensure some of my React elements would also adapt to screen size changes – *for example, swapping the desktop sidebar for a mobile bottom drawer*. This resulted in me using a **custom React hook** to catch screen size changes and adapting my UI elements based on that data.

---

### Personal Thoughts

When I started this project, I knew that developing a social media app from scratch as a *learning project* would be a huge undertaking. I never expected to fully "finish" it – I just wanted to build it to a point where I was satisfied with the progress and felt like I had learned enough without burning myself out over minor details. **My goal was to implement a "core social media loop", and I feel like I achieved it.**

Eventually, I decided to transition my focus toward learning newer frameworks like **Next.js**. If I were to rebuild this prototype today with what I know now, **my approach would be different:**
* **Transition to Next.js:** The biggest change would be rebuilding the app using Next.js. I feel that its **Server-Side Rendering** and **Dynamic Routing** are more intuitive than standard React for fetching and handling large amounts of data, such as user profiles and posts.
* **Image Uploads:** Instead of relying on external image hosting services, *which was a great way to quickly have the prototype running*, I would implement a **File Upload** feature so images *(and eventually videos)* could be stored and managed on my server.
* **Improved UX & UI design:** While the current design is functional and only meant to be a prototype, I'd revisit the UI to make it more modern and intuitive, bringing it more "in line" with what's expected from a modern social media application.

As always, there are lots of other changes, bug fixes, and optimizations I would make that are too minor to be mentioned here. Either way, considering I only started this as a learning project, I'm happy with the progress I've made.

Thank you for reading!

> **Note:** A live preview of this project is available upon request.

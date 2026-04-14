### Expanding into Mobile Territory

Aside from building desktop and web applications, I wanted to be able to build mobile applications as well. Since I'm already comfortable using React to build responsive web applications, choosing **React Native** was the logical choice to step into mobile development.

#### Initial Impressions & Progress:

Moving from HTML/CSS to Native UI components *(`<Text>`, `<View>`...)* has been an interesting transition. However, given that the general code structure and mechanics are very similar to React, this transition didn't appear to be too difficult.

I have successfully set up my environment using **Expo CLI** and have been testing applications directly on my smartphone. Furthermore, I learned how to set up **Tailwind CSS** in React Native, and am currently learning how to translate my web-based CSS knowledge into React Native.

Mobile routing appears to be different from the web, and I am currently experimenting with **React Navigation** to handle stack and tab navigators.

#### The Goal:

My current goal is to build a basic, lightweight mobile application that fetches data from an API. I chose to build a simple **Weather Application** where users can check weather forecasts for any location in the world using the **OpenWeather API**.

Since I am simultaneously learning **PHP**, I decided to challenge myself and build a custom **PHP API "proxy"** for my mobile application. That way, instead of the application making direct calls to the OpenWeather API, **API calls have to go through my own PHP server first**, which then makes calls to the OpenWeather API and returns data to the app.

I believe this is an effective method because it gives me more control over API calls, authorizations, and error handling. Furthermore, it's a good way for me to learn *two lessons at once*: building a React Native frontend and a custom API using PHP.
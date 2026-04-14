<centeredimage src="/projects/images/thumbnail_TicTacToe.webp" height=120 alt="Tic-Tac-Toe Web Game"></centeredimage>

## Table of Contents
* [Description](#description)
* [Implementation](#implementation)
* [Features](#features)
* [Visual Showcase](#visual-showcase)
* [Conclusion & Personal Thoughts](#conclusion--personal-thoughts)

---

## Description

**Web Tic-Tac-Toe** is a mini-project I built primarily to practice my skills in **Socket.IO**, using **React** for the frontend and **Node.js & Express** for the backend. Furthermore, it served as practice for my logical thinking as I had to implement a clean and efficient way to check whether a player won or not.

The goal was to build a simple web-based, real-time Tic-Tac-Toe game where users can play with another, randomly selected user.

## Implementation

* **Server-Side Authority:** The application relies on a **Node.js server** that acts as the final authority for all game logic, ensuring that players can't "cheat" by modifying their local game state. While the frontend displays the moves, the server holds the "lobby data", including information about the Tic-Tac-Toe cells. After every move, the server updates this data and runs an algorithm to check if there is a winner or if the game ended in a tie.

* **Automated Matchmaking:** I implemented a server-side matchmaking system which contains a list of connected users. When a user begins searching, the server runs an interval to find another available player and automatically creates a "lobby" when one is found.

* **JWT Handshake:** When a player enters their username and begins searching for a game, a **JSON Web Token** is created during the initial Socket.IO handshake, used to prevent unauthorized connections.

## Features

* **Randomized Matchmaking:** Users are paired with a random opponent in real-time without needing to share room codes or links.

* **Full Game Logic:** The server handles multiple scenarios to end the game, including:
    * **Win Highlights:** The server returns the specific winning cells, allowing the frontend to highlight the winning combination.
    * **Tie Detection:** Detects when the board is full with no winner.
    * **Graceful Disconnects:** If a player leaves mid-game, the server detects the socket drop and automatically declares the other player a winner.

* **Fully Responsive:** Built with **Tailwind CSS**, the game grid adapts from a desktop-sized board to a mobile-friendly layout depending on the screen size.

## Visual Showcase

<webmvideo margintop=-12 src="/projects/videos/web_tic_tac_toe/tictactoeShowcase.webm" alt="Tic-Tac-Toe Showcase"></webmvideo>

<centertext>

The video shows Web Tic-Tac-Toe in action, including **matchmaking, gameplay, and endgame condition checking** when there is a winner, and when the game ends with a tie.

</centertext>

# Conclusion & Personal Thoughts

Building this was a practical way for me to practice **real-time synchronization** in a project that's *not* a standard CRUD application, but rather a multiplayer game that requires the server to manage active "lobbies" and player "turns", which taught me how to handle more complex object states in Node.js. While I had some understanding of game logic development from my time using [Unity](https://unity.com/), this was a good way for me to practice expanding that logic into a real-time multiplayer game environment.

This project also provided some interesting challenges, such as writing an **algorithm to determine the winner** through clean code instead of a million *if-else* statements, **handling real-time game logic** such as player turns, lobby creation, matchmaking, and **edge cases** such as handling players disconnecting mid-game. Furthermore, I had to keep the game "brain" on the server, separate and secure from the frontend which only acts as a visual interface.

If I were to revisit this project today, I would expand upon it and try to make it more interesting by, for example, implementing a **Global Leaderboard**, or an option for players to invite each other to lobbies. Code-wise, I would probably transition to **TypeScript** to provide better type safety for the lobby and player data structures.

Thank you for reading!

> **Note:** A live preview of this project is available upon request.
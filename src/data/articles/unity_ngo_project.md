<centertext>

This project is currently **in early development**. This post is prone to updates!

The last update was on *13th April, 2026*.

</centertext>

<centeredimage src="/projects/images/thumbnail_UnityProject.png" alt=""></centeredimage>

# Table of Contents
* [Introduction](#introduction)
* [Current Progress](#current-progress)
* [Next Steps](#next-steps)

---

# Introduction

I am currently developing a basic co-op first-person shooter game in [Unity](https://unity.com/) using their **Netcode for GameObjects** library to implement server-authoritative networking and synchronization.

This project is currently in the **prototype** phase as I learn how to implement core game mechanics and develop a basic **game loop** in a multiplayer environment.

#### The Tech Stack:
* **Game Engine:** Unity 6.x
* **Networking:** Netcode for GameObjects (NGO)
* **Logic:** C# (.NET)
* **Models & Animation:** Blender 5.0

# Current Progress:

#### **1. Custom 3D Assets**
While I have limited 3D modeling experience, I saw this project as the perfect opportunity to expand my skill set. Because I am a solo developer, I decided to go for a *low-poly* aesthetic. This approach allows me to efficiently model, texture, and rig custom character models, items, and environments from scratch, rather than relying on pre-made assets.

I chose **Blender** for this because of its great community support, its open-source nature, and its support for plugins which are crucial for an efficient workflow when building models for Unity.

<webmvideo src="/projects/videos/unity_ngo_project/blenderRigging.webm" alt="Character rigging in Blender"></webmvideo>

#### **2. Lobby System**
Since my game requires a minimum of two players, I had to make sure a user couldn't start the game alone. This required me to implement a **lobby system** in which one player acts as the **host** *(and also the "server")*, while other players connect as **clients**. Each player can also select a custom username.

#### **3. Full-body Character Models & Animation Sync**
A standard first-person game generally only uses arms to display the character model. However, in a multiplayer game, a bunch of floating arm models would look odd. Therefore, I had to implement logic where the **local player (from a first-person perspective) only sees their arms**, while **other players can see their character's full body**.

This approach requires complex logic where:
* The local player only sees their character's "first-person" arms, with a custom animation set for those arms.
* Other players see a full character body that's also **fully animated** with its own animation set.
* The local player can't see their character's full body as it would cause camera clipping issues.
* Other players can't see the character's "first-person" arms because they would be duplicates.
* All of this has to be synchronized on the network, and support various animation cases *(e.g. players using various items, weapons...)*.

Thanks to NGO's `NetworkAnimator` component, as well as custom code to toggle the first-person and third-person character models per-client, this logic has been successfully implemented.

<webmvideo src="/projects/videos/unity_ngo_project/modelAnimationSync.webm" alt="Full-body Character Model & Animation Sync in Action"></webmvideo>

#### **4. Networked Shooting Mechanics**

Because of the "dual-model" setup *(first-person arms vs. full body)*, the shooting logic had to be carefully managed. When a player fires their weapon, the local player needs to see their first-person recoil and muzzle flash, while everyone else needs to see the third-person model performing the shooting animation.

To handle this, I used **RPCs**: When a player shoots, it triggers their local first-person effects immediately for a responsive feel, and sends an RPC to the server. The server then tells all other clients to play the third-person shooting animation and effects, ensuring that gunfire feels snappy for the shooter, and perfectly synchronized for everyone else.

#### **5. Server-Authoritative AI**
For testing purposes and a basic game loop, I implemented basic "zombies" as *"wander" AI agents*.

In a multiplayer game, if every client tried to calculate where an AI should walk, their positions would quickly desync. To solve this, **the AI logic runs exclusively on the host's PC** which acts as the server. The host calculates the pathfinding and movement, and NGO simply syncs the AI's position to the connected clients.

The prototype zombies also have their own animations for walking and reacting to getting hit, all synchronized. Furthermore, I implemented a networked **health system**. When a player shoots a zombie, the damage is registered on the host, and the updated health value is synchronized across all clients. When a zombie's health reaches zero, it is set into a "ragdoll" state.

<webmvideo src="/projects/videos/unity_ngo_project/enemySync.webm" alt="Shooting Mechanics & Enemy AI Sync"></webmvideo>

# Next Steps:

* **Ammo Logic:** I plan to implement a **magazine-based "tactical" reload system**. Instead of a magic pool of bullets, players carry discrete magazines. If a player reloads a half-empty magazine, those remaining bullets are lost. This encourages a *"make every shot count"* playstyle and makes the game feel much more grounded.
    * **Persistent Weapon States:** To achieve this, the "Ammo in Magazine" value must be stored on the weapon object itself instead of the player, and must be synchronized across the network. This ensures that, if Player A drops a half-empty rifle, Player B picks up that exact same half-empty weapon, rather than it magically refilling.

* **Basic Inventory:** Implementing an inventory system where players can pick up weapons, ammo, items, and physically **drop** items for their teammates.

* **AI Logic:** To turn the current, harmless wandering "zombies" into actual threats, I need to implement their targeting logic. To keep it simple, this AI logic will select the closest player, navigate towards them, and deal damage once they're close enough.

* **Core Game Loop:** With the core features implemented, I can work on a basic "game loop". To keep it simple, this loop will be inspired by basic, yet fun loops found in popular games such as *Call of Duty's Zombies mode*. **The idea is the following:**
    * The players spawn inside a map together with basic, weak gear. Waves of enemies spawn shortly after.
    * For each kill, the players score "points", which can be used to purchase weapons and items.
    * Each wave will spawn faster, more resilient enemies *(increased health, increased attack damage)*, forcing players to think fast, adapt, and upgrade their tools.

Implementation of these fundamental game features and core game loop marks the end of my **"Phase 1"** milestone. Some of my **future plans include:**
* **Human Enemy AI:** Implementing a "human enemy" AI requires significantly more complex logic than a simple "zombie AI", as they aren't limited to one basic, mindless *"run to player and attack"* action. Human enemies need to **shoot back at the players, take cover, and "outsmart" the player.**

* **Basic Campaign:** Transitioning from endless waves of zombies to a linear, level-based progression system where players must complete objectives *(e.g. solve puzzles, clear zones of enemies)* to advance.

* **Proximity Voice Chat:** A proximity-based voice chat system would allow players to communicate directly in-game. The players would have to stay in close proximity to each other to be able to communicate, encouraging team work and building immersion.
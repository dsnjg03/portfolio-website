<centeredimage src="/projects/images/thumbnail_NotesApp.webp" alt="Notes App Dashboard"></centeredimage>

# Table of Contents
* [Introduction](#introduction)
* [Features](#features)
* [Visual Showcase](#visual-showcase)
* [Conclusion & Personal Thoughts](#conclusion--personal-thoughts)
* [Resources](#resources)

---

# Introduction

**Notes & Reminders App** is a Windows desktop application I built as a final year school project. I chose to build this application
due to its simplicity – a basic "CRUD" application – and the potential for challenges.

### Tech Stack

* **C#/.NET:** I chose C#/.NET because I was familiar with it, having used it for everything from small desktop apps to Unity games in my free time.
* **Windows Presentation Foundation:** WPF attracted me with its XAML-based UI design. Coming from HTML/CSS, it felt very intuitive to design layouts.
* **MySQL:** My choice for the backend for its reliability and my previous experience using it to design relational databases. Using *Stored Procedures* made communication between my app and the database easier and cleaner.
* **PubNub Integration:** Used to do most of the heavy lifting behind the real-time logic, such as synchronizing note edits across clients as they happen.

### The Challenge

Since I was already comfortable with *C# and MySQL*, I didn't want to just build a simple *"Save to Disk"* app. I wanted to learn something new, and I found the **real-time sync** concept interesting.

I wanted my app to feel "live", so changes don't only happen then the user refreshes their app. I wanted changes to pop up on every other connected client instantly. After a bit of research, I found **PubNub**, which made it relatively "easy" to implement this into my app and make it stand out amongst other school projects.

# Features

<centeredimage src="/projects/images/notes_app/realtimeExample.webp" height=100 alt="Example of real-time functionality: sharing notes"></centeredimage>

* **User Accounts:** Full registration and login system, tying every note and reminder to a user profile.
* **Note Management:** Notes can be created, edited, deleted, and shared with other users. Furthermore, each note can be exported in a raw text *(.txt)* or Rich Text *(.rtf)* format, have a reminder tied to it, and provide information such as the author, date of creation and last edit, and users it's shared with. Each note can have a custom title and description.
* **Note Styling:** The app includes basic styling tools for notes, such as making the text bold or italic, and changing the font size.
* **Reminders:** A notification system that triggers even while the app is minimized. Every reminder is tied to a note, and can automatically be shared with every user the note is shared with.
* **Real-time Sync:** Thanks to PubNub, changes such as sharing, editing, and deleting notes & reminders are instantly reflected to every user who the note and/or reminder has been shared with.
* **Theme & Language Selection:** Users can personalize the application by choosing between a *light* and *dark* theme, and by changing the interface language. Adding new languages is easily done through an *XML* file, so alongside the *Croatian* language which was the default as I developed this app in Croatia, I also added the *English* language as an example.
* **Profile Pictures:** Besides application settings, users can also **personalize their identity** within the app by changing their **profile picture**.

## Visual Showcase

<centertext>

### Authentication Screen

</centertext>
<centeredimage src="/projects/images/notes_app/authLoading.webp" size="sm" marginbottom=-4 height=100 alt="Example: sign-in loading"></centeredimage>

<centertext>

This is where the user can **sign in** or **register**.

</centertext>

<centertext>

---

### Note Management

</centertext>
<centeredimage src="/projects/images/notes_app/noteCreation.webp" size="sm" marginbottom=-4 height=100 alt="Note Creation"></centeredimage>

<centertext>

When creating notes, the user must enter a **title**, and optionally, a **description**. If no description is entered, the note's content will be displayed in its place.

</centertext>

<centeredimage src="/projects/images/notes_app/noteInfo.webp" size="sm" marginbottom=-4 height=100 alt="Note Information"></centeredimage>

<centertext>

The user can view a note's information, such as the **author, date of creation, date & time of last edit, and users the note is shared with**. The user can also edit the note's title and description here.

</centertext>

<centeredimage src="/projects/images/notes_app/noteContextMenu.webp" size="sm" marginbottom=-4 height=72 alt="Note Context Menu"></centeredimage>

<centertext>

Right clicking a note opens a custom context menu where the user can export a note, view its information, set a reminder for it, or share it with other users.

</centertext>

<centeredimage src="/projects/images/notes_app/noteEditing.webp" size="sm" marginbottom=-4 height=100 alt="Note Editor"></centeredimage>

<centertext>

Notes can be edited with basic styling options, such as making the text **bold** or *italic*, and changing the font size. Whenever a note is saved, its changes are automatically updated for all clients who have access to it.

</centertext>

<centeredimage src="/projects/images/notes_app/noteDeletion.webp" size="sm" marginbottom=-4 height=100 alt="Deleting a note"></centeredimage>

<centertext>

To prevent accidents, users are prompted to enter their username as confirmation when deleting a note.

</centertext>

<centeredimage src="/projects/images/notes_app/noteSharing.webp" size="sm" marginbottom=-4 height=100 alt="Sharing a note"></centeredimage>

<centertext>

Notes can be shared with other users, who will instantly get notified and see the note in real-time.

</centertext>

---

<centertext>

### Reminders

</centertext>

<centeredimage src="/projects/images/notes_app/remindersPanel.webp" size="sm" marginbottom=-4 height=100 alt="Reminders Dashboard"></centeredimage>

<centertext>

This is where users can see their **reminders**, and reminders that have been shared with them. Clicking on a reminder will show more information, such as the **date & time** it's set for, **note** it's set for, and the **author**.

Reminders can also be sorted *(Newest <-> Oldest, by date & time)* and filtered *(for example, between specific dates, by author, by note)*.

</centertext>

<centeredimage src="/projects/images/notes_app/reminderCreation.webp" size="sm" marginbottom=-4 height=100 alt="Creating a reminder"></centeredimage>

<centertext>

A reminder must be given a name and note to be tied to, and the user can choose whether to make it **Private** *(only sets it for the user)* **or not** *(sets it for every user who has access to the note)*. An intuitive date & time picker is used to choose when the reminder should go off.

</centertext>

<centeredimage src="/projects/images/notes_app/windowsReminder.webp" size="sm" marginbottom=-4 height=100 alt="Example of a reminder going off"></centeredimage>

<centertext>

Users are notified about reminders using native **Windows notifications** which show them the reminder title, note it's tied to, and give them options to open the note or clear the reminder.

</centertext>

---

<centertext>

### Other

</centertext>

<centeredimage src="/projects/images/notes_app/notificationsPanel.webp" size="sm" marginbottom=-4 height=100 alt="Notifications Dashboard"></centeredimage>

<centertext>

Users can view all their notifications in one place. Notifications are sent out in real-time for both online and offline users. Users can quickly access the note or reminder a notification may be related to by clicking on it.

</centertext>

</centertext>

<centeredimage src="/projects/images/notes_app/darkThemeExample.webp" size="sm" marginbottom=-4 height=70 alt="Dark theme example"></centeredimage>

<centertext>

Users can pick between a **light or dark UI theme**, updated instantly across the entire app.

</centertext>

</centertext>

<centeredimage src="/projects/images/notes_app/englishLanguageExample.webp" size="sm" marginbottom=-4 height=100 alt="Language change example"></centeredimage>

<centertext>

Users can also choose between **multiple languages** which are added through XML files. In this example, the UI was set to English.

Furthermore, the screenshot also shows other options available in the *Settings* tab.

</centertext>

# Conclusion & Personal Thoughts

Building this fully-functional app from start to finish was a massive jump from the average "mini project" I'd make for learning, homework, or simply for fun. It has provided me valuable insight and experience, as well as some **lessons, of which I'd point out a major one:**

### Always Make Backups... of Everything
While developing the app, I hosted the MySQL database on a paid VPS. After finishing my education, I cancelled the subscription and the data was wiped. I was certain I had a local backup, but I found out the hard way that **I was wrong**.

While I still have the database structure, I lost over **20 Stored Procedures** which were crucial for communication between the app and the database. Rewriting all those procedures from scratch would be a massive undertaking.

**The Outcome:** Fortunately, the source code for the application itself was backed up and I still have it. While I chose to move forward with newer projects rather than rebuilding the database from scratch, this loss turned me into a *"backup extremist"*. Nowadays, **GitHub is a _must_** for every project I touch, and I always ensure that all necessary data is backed up.

---

### Personal Thoughts

I believe I am my own biggest critic. With every project I work on, I wonder: *"how could I improve this?"* – this one is not an exception! If I wanted to develop an app like this *now*, there are definitely **some things I would do differently:**

* **Database Communication:** In the app, I used the **MySqlConnector** driver, allowing me to write call raw queries on my database, which became a bit *messy* despite limiting it to Stored Procedure calls only. In the past few years, I've been using **Entity Framework Core** which I've grown to prefer over my old approach due to its integration in the C#/.NET environment. The *"code-first"* workflow feels cleaner and more efficient with database migrations, LINQ support, and change tracking. *Ironically, using EF Core for this app probably would've saved me from losing my database!*

* **UI Design:** Despite using *Material Design Toolkit* for some UI elements, the execution was a bit "flat" as writing the logic for the app turned into my primary focus. The color design and layout consistency could definitely be improved, and I would invest more time into that rather than letting the styling fall behind the logic.

* **Real-time Data Optimization:** Looking back at the real-time data transport code, I believe there's a lot of room for **optimization**. For example, in this version of the app, when a user shares a note with another user, **the entire note is converted into a JSON object that is sent to another user**. While this worked fine for my purposes, I understand such approach could cause issues in the real world, and that sending huge JSON payloads through real-time channels is generally not recommended.

Of course, there are lots of other code changes, fixes, and optimizations I would make, as well as features I would add that I was planning to in the past, such as *reminders also sending the user an e-mail instead of just a Windows notification*. However, that's a story for another time.

Thank you for reading!

# Resources

For those interested in a deeper dive into the application logic, database structure, and implementation details, you can find my **Final Graduation Project paper** below.

> **Note:** The documentation is written in Croatian, as it was the official paper for my high school graduation project.

<resourceitem icon="pdf" href="/projects/resources/notes_app/notes_app_final_paper.pdf">FINAL PAPER (ZAVRŠNI RAD)</resourceitem>

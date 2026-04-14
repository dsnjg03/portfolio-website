<centeredimage src="/projects/images/thumbnail_MusicPlayer.png" height=120 alt="WPF Music Player App"></centeredimage>

## Table of Contents
* [Description](#description)
* [Implementation](#implementation)
* [Features](#features)
* [Visual Showcase](#visual-showcase)
* [Conclusion & Personal Thoughts](#conclusion--personal-thoughts)

---

## Description

**WPF Music Player** is a mini-project I built to practice UI design and logic within the **Windows Presentation Foundation (WPF)** framework, utilizing **XAML** to build the layouts. Furthermore, I focused on implementing **data persistence**, allowing users to import, save, and reload their music library.

I chose to build a music player app because, on top of everything else, it allowed me to explore **audio processing** in C#/.NET. It helped me learn how to read audio files, extract metadata, and synchronize audio playback with the WPF-based UI.

## Implementation

* **Audio Processing & Playback:** I integrated the **NAudio** library to handle audio playback and metadata extraction. This allowed my app to dynamically calculate audio track lengths and provide a stable playback for *.mp3* and *.wav* files. Furthermore, I implemented various controls for playback, such as **a volume slider, buttons to skip or rewind a track by 10 seconds, buttons to skip to the next or previous track**, as well as the option to set the audio track to a specific position using the **song slider**.

* **UI Synchronization:** To keep the progress bar and duration labels in sync with the audio, I implemented a **DispatcherTimer** that checks the audio track position every second. This ensures that the *song slider* accurately reflects the audio track's progress as it's playing. Furthermore, through implementation of **FontAwesome.WPF**, I was able to easily implement a "dynamic" button which shows a *Pause* or *Play* icon based on the playback state.
    * **State Management via Reflection:** The standard WPF *MediaElement* does not publicly expose its internal playback state. After a bit of research, I solved this by using **System.Reflection** to access this internal state, allowing me to detect whether a media track is currently *playing* or *paused*, which was necessary for the dynamic *Pause/Play* button implementation.

* **Playlist Persistence:** I utilized **Newtonsoft.Json** to implement a basic saving and loading system. The application serializes audio metadata *(name, path, and duration)* into a local *MusicData.json* file, ensuring the user's music library is saved even after the app is closed.


## Features

* **Playlist Management:** Users can import multiple audio files at once. The application dynamically generates UI elements for each song and ensures there are no duplicate entries.

* **Full Playback Control:** Includes the ability to play, pause, and skip tracks, as well as "seek" functionality to jump to specific parts of a song using a slider.

* **Volume & Navigation:** Features a volume slider and dedicated buttons to skip forward or backward by 10 seconds.

* **Custom Window Logic:** I implemented a custom title bar with *DragMove* functionality and custom close/minimize buttons, allowing for a modern, "borderless" design.

## Visual Showcase

<webmvideo margintop=-12 src="/projects/videos/wpf_music_player/musicPlayerShowcase.webm" alt="Music Player Showcase"></webmvideo>

<centertext>

The video shows functionalities of the Music Player application, including **adding multiple audio files at once, skipping song by 10-second intervals, skipping to specific parts of a song, removing audio files from the playlist, the volume slider, and skipping tracks.**

</centertext>

# Conclusion & Personal Thoughts

Building this application was a practical way for me to brush up on my **WPF/XAML** skills and general **C#/.NET** application development. It also taught me about **audio processing** in .NET and the challenges that come with synchronizing a high-level UI with a low-level media engine.

The most interesting challenges involved the **song slider** and **"seek"** functionality. Synchronizing the visual song slider/*progress bar* with real-time playback data required utilizing a **DispatcherTimer** for timing. Perhaps the most unique challenge was discovering that the standard **MediaElement hides its playback state**. It made me research and come to a solution for this problem by utilizing **System.Reflection** to access the internal **_currentState** field, which was a great learning moment in understanding the power of advanced .NET features.

Overall, I would say this project was a rewarding exercise in problem-solving, research, and implementation of technical solutions when standard framework tools are limited.

Thank you for reading!

> **Note:** A live preview/executable of this project is available upon request.
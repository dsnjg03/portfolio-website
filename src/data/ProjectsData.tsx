import NotesApp_Thumbnail from "../assets/projects/thumbnail_NotesApp.png";
import SocialMedia_Thumbnail from "../assets/projects/thumbnail_SocialMedia.png";
import TicTacToe_Thumbnail from "../assets/projects/thumbnail_TicTacToe.png";
import MusicPlayer_Thumbnail from "../assets/projects/thumbnail_MusicPlayer.png";
import UnityProject_Thumbnail from "../assets/projects/thumbnail_UnityProject.png"
import PHP_Thumbnail from "../assets/projects/thumbnail_PHP.png"
import ReactNative_Thumbnail from "../assets/projects/thumbnail_ReactNative.png"
import PortfolioWebsite_Thumbnail from "../assets/projects/thumbnail_PortfolioWebsite.png";
//import imageNotAvailable from "../assets/imageNotAvailable.png";

export const ProjectStatus = {
    InProgress:1,
    Finished:2,
    Prototype:3
}

export interface ProjectData{
    id:string,
    title:string,
    label?:string, // e.g. "C#/.NET", "React"
    shortDescription?:string, // Shown on the card "preview"
    thumbnailPath?:string,
    featured?:boolean,
    status?:number,
    hideFromProjectsPage?:boolean,
}

export const ProjectsData:ProjectData[] = [
    {
        id:"notes_reminders_app",
        title:"Notes & Reminders App",
        label:"C#/.NET",
        shortDescription:`WPF-based C#/.NET desktop application for creating, managing, and sharing notes and reminders.
        Uses MySQL for data storage and PubNub for real-time functionality.`,
        thumbnailPath:NotesApp_Thumbnail,
        featured:true,
        status:ProjectStatus.Finished
    },
    {
        id:"portfolio_website",
        title:"Developer Portfolio",
        label:"React",
        shortDescription:`A custom-built, fully responsive single-page application. Features a complex Bento Box UI, fluid Framer Motion 
        animations, and a custom dynamic routing system for Markdown-based project devlogs.`,
        thumbnailPath:PortfolioWebsite_Thumbnail,
        featured:true,
        status:ProjectStatus.Finished
    },
    {
        id:"social_media_prototype",
        title:"Social Media Prototype",
        label:"MERN Stack",
        shortDescription:`Full-stack social media platform prototype featuring real-time interactions. Built with React for the frontend, 
        Node.js/Express for the backend, MongoDB/Mongoose for data storage, and Socket.IO for live websocket functionality.`,
        thumbnailPath:SocialMedia_Thumbnail,
        featured:true,
        status:ProjectStatus.Prototype
    },
    {
        id:"unity_ngo_project",
        title:"Unity Co-op Game",
        label:"Unity/.NET",
        shortDescription:`Exploring complex game networking in Unity through development of a FPS co-op game, utilizing their
        high-level "Netcode for GameObjects" library to implement real-time client synchronization and server-authoritative logic.`,
        thumbnailPath:UnityProject_Thumbnail,   
        status:ProjectStatus.InProgress,
        featured:true
    },
    {
        id:"learning_php",
        title:"Exploring PHP",
        shortDescription:`Expanding my knowledge in backend programming and building secure, high-performance REST APIs, by focusing on 
        Native PHP (8.x) fundamentals to establish a deep understanding before moving to Laravel.`,
        thumbnailPath:PHP_Thumbnail,
        status:ProjectStatus.InProgress, 
        hideFromProjectsPage:true,
    }, 
    {
        id:"learning_react_native",
        title:"Exploring React Native",
        shortDescription:`Extending my existing React frontend experience into mobile application development territory. Currently focusing on React Native 
        to build performant, cross-platform native applications for Android and iOS.`,
        thumbnailPath:ReactNative_Thumbnail,
        status:ProjectStatus.InProgress, 
        hideFromProjectsPage:true,
    },      
    {
        id:"web_tic_tac_toe",
        title:"Web Tic-Tac-Toe",
        label:"Socket.IO",
        shortDescription:`Real-time multiplayer Tic-Tac-Toe web game. Built with React and Express, heavily utilizing Socket.IO to handle 
        live communication between clients.`,
        thumbnailPath:TicTacToe_Thumbnail,
        status:ProjectStatus.Finished,
    },
    {
        id:"wpf_music_player",
        title:"Music Player",
        label:"C#/.NET",
        shortDescription:`Custom desktop music player built with C#/.NET and WPF. Utilizes the NAudio library for low-level audio playback, 
        file reading, and metadata processing.`,
        thumbnailPath:MusicPlayer_Thumbnail,
        status:ProjectStatus.Finished
    }
];
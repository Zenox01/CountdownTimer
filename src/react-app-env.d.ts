// For setting up the vido background. So 'Clock/Main' can identify the video URL as string. 
/// <reference types="react-scripts" />
declare module '*.mp4' {
    const src: string;
    export default src;
  }
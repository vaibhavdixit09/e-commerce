// src/components/Loader.js

import React from "react";

// Define keyframe animations as JavaScript objects
const rotate = {
  animation: "rotate 1s infinite",
};

const ball1 = {
  animation: "ball1 1s infinite",
};

const ball2 = {
  animation: "ball2 1s infinite",
};

// Define the styles for the loader
const loaderStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundColor: "#1D1F20",
};

const loaderInnerStyles = {
  position: "relative",
  height: "50px",
  width: "50px",
  animation: "rotate 1s infinite",
};

const ballBeforeStyles = {
  content: '""',
  display: "block",
  height: "20px",
  width: "20px",
  borderRadius: "50%",
  backgroundColor: "#cb2025",
  boxShadow: "30px 0 0 #f8b334",
  marginBottom: "10px",
  ...ball1,
};

const ballAfterStyles = {
  content: '""',
  display: "block",
  height: "20px",
  width: "20px",
  borderRadius: "50%",
  backgroundColor: "#00a096",
  boxShadow: "30px 0 0 #97bf0d",
  ...ball2,
};

// Create a loader component
const Loader = () => {
  return (
    <div style={loaderStyles}>
      <div style={loaderInnerStyles}>
        <div style={ballBeforeStyles}></div>
        <div style={ballAfterStyles}></div>
      </div>
    </div>
  );
};

export default Loader;

// Include the following CSS in your global styles or in a <style> tag within your component for keyframe animations
const globalStyles = `
  @keyframes rotate {
    0% { 
      transform: rotate(0deg) scale(0.8); 
    }
    50% { 
      transform: rotate(360deg) scale(1.2); 
    }
    100% { 
      transform: rotate(720deg) scale(0.8); 
    }
  }

  @keyframes ball1 {
    0% {
      box-shadow: 30px 0 0 #f8b334;
    }
    50% {
      box-shadow: 0 0 0 #f8b334;
      margin-bottom: 0;
      transform: translate(15px, 15px);
    }
    100% {
      box-shadow: 30px 0 0 #f8b334;
      margin-bottom: 10px;
    }
  }

  @keyframes ball2 {
    0% {
      box-shadow: 30px 0 0 #97bf0d;
    }
    50% {
      box-shadow: 0 0 0 #97bf0d;
      margin-top: -20px;
      transform: translate(15px, 15px);
    }
    100% {
      box-shadow: 30px 0 0 #97bf0d;
      margin-top: 0;
    }
  }
`;

// Append global styles to the <head> of the document
if (typeof window !== "undefined") {
  const styleElement = document.createElement("style");
  styleElement.type = "text/css";
  styleElement.innerHTML = globalStyles;
  document.head.appendChild(styleElement);
}

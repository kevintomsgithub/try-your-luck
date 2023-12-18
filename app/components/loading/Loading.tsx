"use client";

import React, { useState, useEffect } from "react";

const LoadingBar = () => {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const animateLoadingBar = () => {
      // Gradually decrease the progress over the animation duration
      let currentProgress = 100;
      const decrement = 1; // Adjust the decrement value for smoother animation

      const progressInterval = setInterval(() => {
        currentProgress -= decrement;
        setProgress(currentProgress);

        if (currentProgress <= 0) {
          clearInterval(progressInterval); // Stop the progress animation
          setTimeout(() => {
            setProgress(100); // Reset progress to 100% after a short delay
          }, 100);
        }
      }, 50); // Animation interval
    };

    // Run the initial animation
    animateLoadingBar();

    // Set up an interval to repeat the animation every 5 seconds
    const intervalId = setInterval(animateLoadingBar, 6000);

    // Cleanup interval on component unmount
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div
      className="mt-16 fixed h-2 top-0 left-0 h-1 bg-pink-400 duration-100"
      style={{ width: `${progress}%` }}
    />
  );
};

export default LoadingBar;

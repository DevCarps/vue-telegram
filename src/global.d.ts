// src/global.d.ts
declare global {
    interface Window {
      Telegram: {
        WebApp: {
          ready: () => void;
          // Add any additional methods or properties as needed
        };
      };
    }
  }
  
  // This line makes the file a module
  export {};
  
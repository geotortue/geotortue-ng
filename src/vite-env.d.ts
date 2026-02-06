/// <reference types="vite/client" />

// This allows importing SCSS files with the ?inline suffix
// It tells TypeScript: "When I import *.scss?inline, treat it as a string."
declare module '*.scss?inline' {
  const content: string;
  export default content;
}

// Optional: If you also plan to import regular CSS files inline
declare module '*.css?inline' {
  const content: string;
  export default content;
}

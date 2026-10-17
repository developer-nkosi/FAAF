// Utility function to conditionally join class names
function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

// Utility to generate unique IDs (simple version)
function useId() {
  return Math.random().toString(36).substr(2, 9);
}

export { cn, useId };
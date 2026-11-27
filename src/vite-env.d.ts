/// <reference types="vite/client" />

interface ImportMetaEnv {
  // Where signup forms post. Unset: the placeholder /api/signup. See src/lib/signup.ts.
  readonly VITE_SIGNUP_ENDPOINT?: string;
}

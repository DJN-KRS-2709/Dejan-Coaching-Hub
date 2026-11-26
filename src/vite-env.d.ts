/// <reference types="vite/client" />

interface ImportMetaEnv {
  // Where signup forms post. Unset: the placeholder /api/signup. See src/lib/signup.ts.
  readonly VITE_SIGNUP_ENDPOINT?: string;
  // Analytics script URL. Unset: no analytics and no consent banner. See src/lib/analytics.ts.
  readonly VITE_ANALYTICS_SRC?: string;
}

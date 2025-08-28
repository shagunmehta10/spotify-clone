interface ImportMetaEnv {
  readonly VITE_CLERK_PUBLISHABLE_KEY: string;
  readonly MODE: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
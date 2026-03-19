interface ImportMetaEnv {
  readonly LASTFM_API_KEY: string;
  readonly LASTFM_USERNAME: string;
  readonly LETTERBOXD_USERNAME: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

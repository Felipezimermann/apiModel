declare global {
    namespace NodeJS {
      interface ProcessEnv {
        URL_API_INTERNA: string;
        TOKEN?: string;
        PORT_SERVER: string;
        SECRETKEY: string;
        TOKENAPLICATION: string;
      }
    }
  }
declare module '/dotenv/config';
export {}
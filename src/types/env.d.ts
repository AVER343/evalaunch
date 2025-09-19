// Environment variable type definitions
declare namespace NodeJS {
  interface ProcessEnv {
    // Resend API configuration
    RESEND_API_KEY: string;
    
    // reCAPTCHA configuration
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY: string;
    RECAPTCHA_SECRET_KEY: string;
    
    // Next.js built-in environment variables
    NODE_ENV: 'development' | 'production' | 'test';
    NEXT_PUBLIC_APP_URL?: string;
  }
}

// Global environment variable types
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      RESEND_API_KEY: string;
      NEXT_PUBLIC_RECAPTCHA_SITE_KEY: string;
      RECAPTCHA_SECRET_KEY: string;
      NODE_ENV: 'development' | 'production' | 'test';
      NEXT_PUBLIC_APP_URL?: string;
    }
  }
}

export {};

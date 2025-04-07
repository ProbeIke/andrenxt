// Custom type definitions for Next.js 15 with static export

// Override the PageProps type to make it compatible with static export
declare module 'next' {
  // Add Metadata type
  export interface Metadata {
    title?: string;
    description?: string;
    [key: string]: unknown;
  }
  
  export interface PageProps {
    params?: Record<string, string>;
    searchParams?: Record<string, string | string[]>;
  }
  
  // Add NextConfig type
  export interface NextConfig {
    output?: 'standalone' | 'export';
    images?: {
      unoptimized?: boolean;
    };
    trailingSlash?: boolean;
    // Use unknown instead of any
    [key: string]: unknown;
  }
}

// Ensure generateStaticParams works correctly with static export
declare global {
  namespace JSX {
    interface IntrinsicAttributes {
      params?: Record<string, string>;
    }
  }
}
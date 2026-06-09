declare module 'next/link' {
  const Link: any;
  export default Link;
}

declare module 'next/font/google' {
  export function Plus_Jakarta_Sans(...args: any[]): any;
}

declare module 'react' {
  const React: any;
  export default React;
}

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

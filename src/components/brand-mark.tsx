import type { SVGProps } from 'react';

/** Vector adaptation of the selected G-and-leaf logo concept. */
export default function BrandMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path
        className="brand-mark-loop"
        d="M53 30C35 24 16 36 13 56C9 78 27 96 49 96C71 96 87 80 84 59C73 43 52 47 38 60C54 53 69 55 69 65C68 78 58 85 46 84C31 83 23 70 26 56C28 43 39 35 51 36Z"
      />
      <path
        className="brand-mark-leaf"
        d="M57 40C58 17 73 15 91 4C93 30 85 44 59 47L78 26Z"
      />
    </svg>
  );
}

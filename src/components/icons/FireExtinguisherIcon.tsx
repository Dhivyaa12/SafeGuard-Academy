import React from 'react';

export function FireExtinguisherIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 7h2" />
      <path d="M3 7h12" />
      <path d="M12 7v10" />
      <path d="M9 17h6" />
      <path d="M9 17v-2.5a2.5 2.5 0 0 1 5 0V17" />
    </svg>
  );
}

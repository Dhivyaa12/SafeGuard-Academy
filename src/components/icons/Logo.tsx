import React from 'react';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 font-headline ${className}`}>
        <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary"
        >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="M14.5 9c0 2.5-2.5 5-2.5 5s-2.5-2.5-2.5-5a2.5 2.5 0 0 1 5 0z" />
            <path d="M12 16c-2.5 0-5-1-5-1" />
        </svg>
      <span className="text-xl font-bold text-primary">SafeGuard Academy</span>
    </div>
  );
}

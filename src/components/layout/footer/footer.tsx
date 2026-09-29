import React from 'react';

interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  return (
    <footer className={className}>
      <p>GRahub Community Management System &copy; {new Date().getFullYear()}</p>
    </footer>
  );
}

import { redirect } from 'next/navigation';

export default function Home() {
  // Automatically redirect to login or dashboard
  // For now, redirect to login
  redirect('/login');
}

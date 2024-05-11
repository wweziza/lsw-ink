// app/layout.tsx
import { Inter } from 'next/font/google';
import './globals.css';
import { AuthProvider } from '@/components/layouts/Auth'; // Import the AuthProvider

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'LSW.',
  description: "Don't miss the vibe",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>{children}</AuthProvider> {/* Wrap children with AuthProvider */}
      </body>
    </html>
  );
}
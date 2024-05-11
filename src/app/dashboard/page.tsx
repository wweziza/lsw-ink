// app/dashboard/page.tsx
'use client';
import React, { useContext, useEffect } from 'react';
import Dashboard from '@/components/layouts/dashboard';
import { AuthContext } from '@/components/layouts/Auth';
import { useRouter } from 'next/navigation';

const DashboardPage = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      // Redirect to the login page if not authenticated
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return null;
  }

  return <Dashboard />;
};

export default DashboardPage;
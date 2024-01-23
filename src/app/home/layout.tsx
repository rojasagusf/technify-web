import Controls from '@/components/Controls';
import React from 'react';
import Sidebar from '@/components/Sidebar'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Sidebar />
      {children}
      <Controls />
    </>
  )
}

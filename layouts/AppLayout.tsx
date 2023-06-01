import { Inter } from "next/font/google";

const inter = Inter({ subsets: ['latin'] });

interface LProps {
  children: React.ReactNode;
}

export default function AppLayout({children}: LProps) {
  return <div className={inter.className}>
    {children}
  </div>;
}
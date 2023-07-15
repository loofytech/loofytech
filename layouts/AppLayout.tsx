import { Bebas_Neue } from "next/font/google";

const inter = Bebas_Neue({ subsets: ['latin'], weight: "400" });

interface LProps {
  children: React.ReactNode;
}

export default function AppLayout({children}: LProps) {
  return <div className={inter.className}>
    {children}
  </div>;
}
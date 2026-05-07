import { useState } from "react";
import SidebarInvestidor from "./SidebarInvestidor";
import HeaderInvestidor from "./HeaderInvestidor";

export default function InvestidorLayout({ children, title }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-neutral-100 text-blue-950 relative overflow-hidden">

      {/* GLOW SUAVE (IDENTIDADE IMOBILIÁRIA) */}
      <div className="absolute -top-25 -right-25 w-125 h-125 bg-sky-700/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-30 -left-30 w-125 h-125 bg-blue-950/10 blur-[140px] rounded-full pointer-events-none" />

      {/* SIDEBAR */}
      <SidebarInvestidor
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* CONTEÚDO PRINCIPAL */}
      <div className="flex-1 md:ml-64 flex flex-col relative z-10">

        {/* HEADER */}
        <HeaderInvestidor
          title={title}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        {/* MAIN */}
        <main className="mt-20 px-6 py-8 max-w-7xl mx-auto w-full">
          {children}
        </main>

      </div>
    </div>
  );
}

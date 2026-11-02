// "use client";
// import { ReactNode } from "react";
// import { usePathname } from "next/navigation";
// import { AppSidebar } from "@/components/sidebar/Sidebar";
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb";
// import { Separator } from "@/components/ui/separator";
// import {
//   SidebarInset,
//   SidebarProvider,
//   SidebarTrigger,
// } from "@/components/ui/sidebar";
// import FooterApp from "@/components/footer/Footer";

// type AppLayoutProps = { children: ReactNode };

// const breadcrumbPath: Record<string, string> = {
//   "/": "Dashboard",
//   "/finances/invoices": "Facturas",
//   "/management/clients": "Clientes"
// }

// export const AppLayout = ({ children }: AppLayoutProps) => {

//   let routeText = "/";

//   const pathName = usePathname();

//   if (pathName) {
//     routeText = breadcrumbPath[pathName] ?? "/";
//   }

//   return (
//     <SidebarProvider>
//       <AppSidebar />
//       <SidebarInset className="flex flex-col min-h-screen">
//         <header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b px-6 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-30">
//           <div className="flex items-center gap-3">
//             <SidebarTrigger className="-ml-1 text-slate-500 hover:text-slate-900" />
//             <Separator orientation="vertical" className="h-4" />
//             <Breadcrumb>
//               <BreadcrumbList>
//                 <BreadcrumbItem className="hidden md:block">
//                   <BreadcrumbLink href="/" className="text-slate-500">
//                     PulseBoard
//                   </BreadcrumbLink>
//                 </BreadcrumbItem>
//                 <BreadcrumbSeparator className="hidden md:block" />
//                 <BreadcrumbItem>
//                   <BreadcrumbPage className="font-semibold text-slate-900 dark:text-white">
//                     {routeText}
//                   </BreadcrumbPage>
//                 </BreadcrumbItem>
//               </BreadcrumbList>
//             </Breadcrumb>
//           </div>

//           <div className="flex items-center gap-3">
//             <div className="hidden sm:flex flex-col text-right">
//               <span className="text-xs font-semibold text-slate-900 dark:text-white">
//                 Luis Saavedra
//               </span>
//               <span className="text-[10px] text-muted-foreground">
//                 Admin Dev
//               </span>
//             </div>
//             <div className="size-8 rounded-full bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center text-white font-bold text-xs shadow-sm">
//               LS
//             </div>
//           </div>
//         </header>
//         <main className="flex flex-1 flex-col gap-4 p-6 bg-slate-50/50 dark:bg-slate-950/50 min-h-[calc(100vh-4rem)]">
//           {children}
//         </main>
//         <FooterApp />
//       </SidebarInset>
//     </SidebarProvider>
//   );
// };


"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";

import { AppSidebar } from "@/components/sidebar/Sidebar";
import FooterApp from "@/components/footer/Footer";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { Separator } from "@/components/ui/separator";

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

type AppLayoutProps = {
  children: ReactNode;
};

const breadcrumbMap: Record<string, string> = {
  "/": "Dashboard",
  "/management/clients": "Clientes",
  "/finances/invoices": "Facturas",
};

export const AppLayout = ({ children }: AppLayoutProps) => {
  
  let routeText = "/";

  const pathName = usePathname();

  if (pathName) {
    routeText = breadcrumbMap[pathName] ?? "/";
  }

  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset className="flex min-h-svh flex-col">
        <header className="sticky top-0 z-30 flex h-16 shrink-0 items-center justify-between gap-2 border-b bg-background/95 px-6 backdrop-blur supports-[backdrop-filter]:bg-background/60">

          {/* Navegación */}
          <div className="flex items-center gap-3">
            <SidebarTrigger className="-ml-1 text-muted-foreground hover:text-foreground" />

            <Separator orientation="vertical" className="h-4" />

            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="/">
                    PulseBoard
                  </BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbSeparator className="hidden md:block" />

                <BreadcrumbItem>
                  <BreadcrumbPage className="font-semibold">
                    {routeText}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          {/* Usuario */}
          <div className="flex items-center gap-3">
            <div className="hidden flex-col text-right sm:flex">
              <span className="text-xs font-semibold">
                Luis Saavedra
              </span>

              <span className="text-[10px] text-muted-foreground">
                Admin Dev
              </span>
            </div>

            <div
              className="flex size-8 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-600 to-cyan-500 text-xs font-bold text-white shadow-sm"
              aria-label="Avatar de Luis Saavedra"
            >
              LS
            </div>
          </div>

        </header>

        <main className="flex flex-1 flex-col gap-4 bg-muted/30 p-4 md:p-6">
          {children}
        </main>

        <FooterApp />
      </SidebarInset>
    </SidebarProvider>
  );
};


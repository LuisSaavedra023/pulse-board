"use client";

import * as React from "react";
import {
  ChartPie,
  Users,
  ChartLine,
  CreditCardCheckIcon,
  Wallet2Icon,
  SquareTextIcon,
  ChartNoAxesCombined,
} from "lucide-react";
import { NavMain } from "@/components/sidebar/nav-main";
import { TeamSwitcher } from "@/components/sidebar/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

const data = {
  teams: [
    {
      name: "Pulse Board",
      logo: ChartLine,
      plan: "Enterprise",
    },
  ],
  navMain: [
    {
      title: "Analítica",
      path: "#",
      icon: ChartNoAxesCombined,
      isActive: true,
      items: [
        {
          title: "Dashboard",
          path: "/",
          icon: ChartPie,
        },
      ],
    },
    {
      title: "Gestión Comercial",
      path: "#",
      icon: CreditCardCheckIcon,
      items: [
        {
          title: "Clientes",
          path: "/management/clients",
          icon: Users,
        },
      ],
    },
    {
      title: "Finanzas",
      path: "#",
      icon: Wallet2Icon,
      items: [
        {
          title: "Facturas",
          path: "/finances/invoices",
          icon: SquareTextIcon,
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}

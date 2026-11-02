"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { ChevronRight, type LucideIcon } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

type NavMainItem = {
  title: string;
  icon?: LucideIcon;
  items?: {
    title: string;
    path: string;
    icon?: LucideIcon;
  }[];
};

type NavMainProps = {
  items: NavMainItem[];
};

export function NavMain({ items }: NavMainProps) {
  const pathname = usePathname();

  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setOpenItems({});
  }, [pathname]);

  return (
    <SidebarGroup>
      <SidebarGroupLabel>General</SidebarGroupLabel>

      <SidebarMenu>
        {items.map((item) => {
          const isGroupActive =
            item.items?.some((subItem) => pathname === subItem.path) ?? false;

          const isOpen = openItems[item.title] ?? isGroupActive;

          return (
            <Collapsible
              key={item.title}
              open={isOpen}
              onOpenChange={(open) =>
                setOpenItems((prev) => ({
                  ...prev,
                  [item.title]: open,
                }))
              }
              className="group/collapsible"
              render={
                <SidebarMenuItem>
                  <CollapsibleTrigger
                    render={
                      <SidebarMenuButton
                        tooltip={item.title}
                        isActive={isGroupActive}
                      >
                        {item.icon && <item.icon />}

                        <span>{item.title}</span>

                        <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                      </SidebarMenuButton>
                    }
                  />

                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.items?.map((subItem) => {
                        const isActive = pathname === subItem.path;

                        return (
                          <SidebarMenuSubItem key={subItem.path}>
                            <SidebarMenuSubButton
                              isActive={isActive}
                              render={
                                <Link
                                  href={subItem.path}
                                  aria-current={isActive ? "page" : undefined}
                                >
                                  {subItem.icon && <subItem.icon />}
                                  <span>{subItem.title}</span>
                                </Link>
                              }
                            />
                          </SidebarMenuSubItem>
                        );
                      })}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              }
            />
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}

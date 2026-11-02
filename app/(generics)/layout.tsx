import { AppLayout } from "@/layouts/appLayout";
import { ReactNode } from "react";

type LayoutProps = {children: ReactNode}

export default function GeneralLayout({ children }: LayoutProps) {
  return (
    <AppLayout>
        {children}
    </AppLayout>
  );
}
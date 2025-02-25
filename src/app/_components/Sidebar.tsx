import {
  Calendar,
  Home,
  Inbox,
  LayoutDashboard,
  Search,
  Settings,
  Truck,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Logo from "./Logo";

// Menu items.
const items = [
  {
    title: "Food menu",
    url: "foodmenu",
    icon: LayoutDashboard,
  },
  {
    title: "Order",
    url: "orders",
    icon: Truck,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export default function AdminSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            <Logo />
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

// export default function AdminSidebar() {

//   return (
//     <Sidebar>
//       <SidebarContent />
//     </Sidebar>
//   );
// }

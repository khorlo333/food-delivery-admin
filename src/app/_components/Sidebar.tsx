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
    <div className="h-[100vh] w-[280px] bg-slate-500 flex flex-col gap-5 items-center">
      <Logo />
      <div className="flex flex-col gap-4 ">
        {items.map((item) => (
          <div
            key={item.title}
            className="rounded-3xl bg-slate-200 w-[150px] px-5 "
          >
            <a href={item.url} className="">
              <item.icon />
              <span>{item.title}</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

// export default function AdminSidebar() {

//   return (
//     <Sidebar>
//       <SidebarContent />
//     </Sidebar>
//   );
// }

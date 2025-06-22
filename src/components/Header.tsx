// src/components/Header.tsx
import { Bell } from "lucide-react";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 py-2 border-b bg-white shadow-sm">
      <h1 className="text-lg font-medium">Projects</h1>
      <div className="flex items-center gap-4">
        <Bell className="w-5 h-5" />
        <img
          src="https://i.pravatar.cc/40"
          alt="User"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </header>
  );
};

export default Header;

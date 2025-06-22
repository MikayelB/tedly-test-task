import Dashboard from "../icons/dashboard.svg";
import EditSettings from "../icons/edit-settings.svg";
import Home from "../icons/home.svg";
import Logo from "../icons/logo.svg";
import SettingsIcon from "../icons/settings.svg";
import Users from "../icons/users.svg";

const navItems = [
  { icon: <Dashboard />, label: "Dashboard", active: true },
  { icon: <Home />, label: "Home" },
  { icon: <EditSettings />, label: "Edit Settings" },
  { icon: <Users />, label: "Users" },
  { icon: <SettingsIcon />, label: "Settings" },
];

const Sidebar = () => {
  return (
    <aside className="w-[60px] bg-primary-accent  flex-col items-center">
      <nav className="flex flex-col  w-full items-center">
        <a
          href="#"
          className="w-full  px-[16px] py-[24px] flex justify-center items-center hover:bg-[#2a3649] "
        >
          <Logo />
        </a>
        {navItems.map(({ icon, label, active }) => (
          <a
            key={label}
            href="#"
            className={`w-full px-[16px] py-[9px] flex justify-center items-center hover:bg-[#2a3649] ${
              active ? "bg-primary-accentGreen" : ""
            }`}
            aria-label={label}
            title={label}
          >
            <span className="py-[4px]">{icon}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;

// src/components/Header.tsx
import Notifications from "../icons/notifications.svg";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 py-2  bg-primary-grey-50">
      <h1 className="text-xl font-semibold leading-5 tracking-normal text-center text-dark">
        Projects
      </h1>
      <div className="flex items-center gap-[24px]">
        <div className="flex items-center justify-center w-[40px] h-[40px] bg-white rounded-[29px] border border-primary-grey-100">
          <Notifications />
        </div>
        <img
          src="/images/user.png"
          alt="User"
          className="w-[40px] h-[40px] rounded-full object-cover object-center border border-primary-grey-200"
        />
      </div>
    </header>
  );
};

export default Header;

const Avatar = ({ name }: { name: string }) => {
  const getInitials = (name: string) => {
    const words = name.split(" ");
    return `${words[0]?.[0] || ""}${words[1]?.[0] || ""}`.toUpperCase();
  };

  return (
    <div className="w-[26px] aspect-square rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center">
      <span className="leading-none text-sm font-bold text-gray-300">
        {getInitials(name)}
      </span>
    </div>
  );
};

export default Avatar;

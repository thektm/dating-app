import React from "react";
import Icon from "./Icon";
interface IconProps {
  onClick: () => void;
}
const MobileUser: React.FC<IconProps> = ({ onClick }) => {
  return (
    <div className="ml-auto max-w-[60px]">
      <Icon
        className=" sm:felx ml-auto   lg:hidden md:hidden cursor-pointer "
        src="https://www.svgrepo.com/show/529058/login.svg"
        onClick={onClick}
      />
    </div>
  );
};
export default MobileUser;

import React from "react";
interface IconProps {
  className?: string;
  src: string;
  onClick?: () => void;
}
const Icon: React.FC<IconProps> = ({ className, onClick, src }) => {
  return (
    <div>
      <img src={src} alt="menu" className={className} onClick={onClick} />
    </div>
  );
};
export default Icon;

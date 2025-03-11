import React from "react";
import Button from "./Button";
interface UserSectionProps {}
const UserSection: React.FC<UserSectionProps> = ({}) => {
  return (
    <div className=" md:flex items-center justify-center m-2 hidden w-[100%]  lg:w-fit">
      <Button
        className="bg-blue-500 text-white px-4 py-2 rounded max-w-3xs max-h-3xs m-2"
        text="Login"
      />
      <Button
        className="bg-blue-500 text-white px-4 py-2 rounded max-w-3xs max-h-3xs m-2"
        text="Signup"
      />
    </div>
  );
};
export default UserSection;

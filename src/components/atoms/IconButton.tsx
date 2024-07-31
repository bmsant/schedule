import React from "react";

interface IconButtonProps {
  iconSrc: string;
  onClick: () => void;
  className?: string;
}

const IconButton: React.FC<IconButtonProps> = ({ iconSrc, onClick, className }) => {
  return (
    <button onClick={onClick} className={`p-2 ${className}`}>
      <img src={iconSrc} alt="icon" className="w-8 h-8" />
    </button>
  );
};

export default IconButton;
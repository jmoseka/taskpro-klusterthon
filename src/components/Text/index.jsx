import React from "react";

const sizeClasses = {
  txtPoppinsMedium24: "font-medium font-poppins",
  txtRadleyRegular2724: "font-normal font-radley",
  txtPoppinsSemiBold32: "font-poppins font-semibold",
  txtPoppinsRegular20: "font-normal font-poppins",
  txtSatisfyRegular48: "font-normal font-satisfy",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };

import React from "react";

const Manage = () => {
  return (
    <div className="bg-gradient-to-b from-darkGreen from-45% to-white to-90% py-12 md:py-20 px-5 lg:px-20 flex flex-col gap-20">
      <div className="w-full bg-white rounded-[30px] px-10 py-8 flex items-center justify-between lg:flex-nowrap flex-wrap cardi">
        <div className="w-[100%] max-w-[500px] ">
          <h2 className="text-4xl font-semibold">
            BizHub&apos;s Manage Feature
          </h2>
          <p className="w-[80%] font-medium text-lg py-3">
            <p className="text-center italic">
              &apos;Elevate your clients relationships&apos;
            </p>
            The manage feature is your gateway to finely tune and nurture your
            clients relationships. This feature empowers you to edit client
            information with ease, ensuring that your client database is always
            up-to-date and accurate.
          </p>
        </div>
        <div className="">
          <img src="assets/manageLaptop.png" alt="" className="w-full max-w-[480px]" />
        </div>
      </div>
      <div className="w-full bg-white rounded-[30px] px-10 py-8 flex items-center justify-between lg:flex-nowrap flex-wrap cardi">
        <div className="">
          <img src="assets/invoiceLaptop.png" alt="" className="w-full max-w-[480px]" />
        </div>
        <div className="w-[98%] max-w-[500px]">
          <h2 className="text-4xl font-semibold">
            BizHub&apos;s Invoice Feature
          </h2>
          <p className="w-[80%] font-medium text-lg py-3">
          The invoices feature empowers you to take command of your financial transactions with a suite of tools designed to streamline invoice management. Creating new invoices, monitoring payment statuses, or tracking the financial pulse of your businesses, this feature puts you in control
          </p>
        </div>
      </div>
    </div>
  );
};

export default Manage;

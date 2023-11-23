import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text } from "components";

const SigninPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto p-[53px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col gap-[37px] items-center justify-start max-w-[736px] mb-[170px] w-full">
          <div className="flex flex-col md:gap-10 gap-[68px] items-center justify-start w-full">
            <div className="flex flex-col items-start justify-start sm:pl-5 pl-[20.05px] w-[336px]">
              <div className="flex flex-col items-start justify-start sm:pl-5 pl-[20.05px] w-full">
                <div className="flex flex-row gap-[26px] items-center justify-start pb-[10.02px] w-full">
                  <div className="font-radley md:h-[51px] h-[95px] relative w-[35%]">
                    <div className="absolute flex flex-col items-center justify-start left-[0] top-[0] w-[70%]">
                      <div className="flex flex-row items-start justify-evenly w-full">
                        <div className="h-[41px] md:h-[50px] mt-2.5 relative rotate-[9deg] w-[48%]">
                          <Img
                            className="absolute h-10 inset-[0] justify-center m-auto"
                            src="images/img_group237710.svg"
                            alt="group237710"
                          />
                          <Text
                            className="absolute bottom-[0] capitalize inset-x-[0] mx-auto rotate-[9deg] sm:text-[23.24px] md:text-[25.24px] text-[27.24px] text-center text-white-A700 tracking-[0.04px] w-max"
                            size="txtRadleyRegular2724"
                          >
                            b
                          </Text>
                        </div>
                        <div className="h-[42px] md:h-[50px] mb-[9px] relative w-[51%]">
                          <Img
                            className="absolute h-[41px] inset-[0] justify-center m-auto"
                            src="images/img_group237711.svg"
                            alt="group237711"
                          />
                          <Text
                            className="absolute bottom-[0] capitalize inset-x-[0] mx-auto rotate-[-22deg] sm:text-[23.24px] md:text-[25.24px] text-[27.24px] text-center text-white-A700 tracking-[0.04px] w-max"
                            size="txtRadleyRegular2724"
                          >
                            i
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="absolute h-10 md:h-[38px] right-[0] rotate-[15deg] top-[12%] w-[32%]">
                      <Img
                        className="absolute h-[38px] inset-x-[0] mx-auto top-[0]"
                        src="images/img_group237712.svg"
                        alt="group237712"
                      />
                      <Text
                        className="absolute bottom-[0] capitalize inset-x-[0] mx-auto rotate-[-3deg] sm:text-[23.24px] md:text-[25.24px] text-[27.24px] text-center text-white-A700 tracking-[0.04px] w-max"
                        size="txtRadleyRegular2724"
                      >
                        z
                      </Text>
                    </div>
                    <Img
                      className="absolute bottom-[0] h-12 left-[28%]"
                      src="images/img_group237717.svg"
                      alt="group237717"
                    />
                  </div>
                  <Text
                    className="capitalize text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center tracking-[0.07px] w-auto"
                    size="txtSatisfyRegular48"
                  >
                    Hub
                  </Text>
                </div>
              </div>
            </div>
            <Text
              className="capitalize md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 text-center tracking-[0.05px] w-full"
              size="txtPoppinsSemiBold32"
            >
              Sign in to Biz Invoice
            </Text>
          </div>
          <div className="flex flex-col gap-8 items-center justify-start w-full">
            <div className="bg-cyan-100_7f border-2 border-solid border-teal-200 flex flex-col gap-6 items-start justify-start p-[52px] md:px-10 sm:px-5 w-full">
              <div className="flex flex-col gap-8 items-start justify-start w-full">
                <div className="bg-white-A700 border border-black-900_38 border-solid flex flex-row sm:gap-10 gap-[150px] items-center justify-start px-4 py-3 rounded-[12px] w-full">
                  <Img
                    className="h-8 w-8"
                    src="images/img_icongoogle.svg"
                    alt="icongoogle"
                  />
                  <Text
                    className="capitalize text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl tracking-[0.04px] w-auto"
                    size="txtPoppinsMedium24"
                  >
                    Sign in with Google{" "}
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-2 items-center justify-start w-full">
                  <Line className="bg-blue_gray-900_a5 h-px w-[29%]" />
                  <Text
                    className="flex-1 text-blue_gray-900 text-xl tracking-[0.03px] w-auto"
                    size="txtPoppinsRegular20"
                  >
                    or with your email below
                  </Text>
                  <Line className="bg-blue_gray-900_a5 h-px w-[29%]" />
                </div>
                <div className="flex flex-col gap-3 items-start justify-start w-full">
                  <Input
                    name="frame1000003926"
                    placeholder="Work email"
                    className="leading-[normal] md:text-[22px] p-0 placeholder:text-blue_gray-900_a5 sm:text-xl text-2xl text-left tracking-[0.04px] w-full"
                    wrapClassName="border-2 border-black-900_7f border-solid flex w-full"
                    type="email"
                    prefix={
                      <Img
                        className="mt-[3px] mb-px h-8 mr-6"
                        src="images/img_sms.svg"
                        alt="sms"
                      />
                    }
                  ></Input>
                  <Input
                    name="frame1000003927"
                    placeholder="Password"
                    className="leading-[normal] md:text-[22px] p-0 placeholder:text-blue_gray-900_a5 sm:text-xl text-2xl text-left tracking-[0.04px] w-full"
                    wrapClassName="border border-black-900_38 border-solid flex w-full"
                    type="password"
                    prefix={
                      <Img
                        className="mt-0.5 mb-px h-8 mr-6"
                        src="images/img_solarlockpasswordbroken.svg"
                        alt="solar:lock-password-broken"
                      />
                    }
                  ></Input>
                </div>
              </div>
              <Button
                className="cursor-pointer font-medium leading-[normal] text-2xl md:text-[22px] text-center sm:text-xl tracking-[0.04px] w-full"
                shape="round"
                color="green_800"
                size="sm"
                variant="fill"
              >
                Sign In
              </Button>
            </div>
            <div className="flex flex-col gap-4 items-center justify-start w-full">
              <Button
                className="common-pointer bg-transparent cursor-pointer leading-[normal] min-w-[316px] text-blue_gray-900_a5 text-center text-xl tracking-[0.03px]"
                onClick={() => navigate("/signup")}
              >
                Dont have an account? Sign Up
              </Button>
              <div className="flex sm:flex-col flex-row gap-7 items-center justify-center w-full">
                <div className="flex flex-col items-center justify-center w-auto">
                  <a
                    href="javascript:"
                    className="text-blue_gray-900 text-xl tracking-[0.03px] w-auto"
                  >
                    <Text size="txtPoppinsRegular20">Forgot password?</Text>
                  </a>
                </div>
                <div className="flex flex-col items-center justify-center w-auto">
                  <a
                    href="javascript:"
                    className="text-blue_gray-900 text-xl tracking-[0.03px] w-auto"
                  >
                    <Text size="txtPoppinsRegular20">Terms of service</Text>
                  </a>
                </div>
                <div className="flex flex-col items-center justify-center w-auto">
                  <a
                    href="javascript:"
                    className="text-blue_gray-900 text-xl tracking-[0.03px] w-auto"
                  >
                    <Text size="txtPoppinsRegular20">Privacy policy</Text>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SigninPage;

import React from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      companyName: "",
      password: "",
      email: "",
    },
    validationSchema: Yup.object({
      firstname: Yup.string().required("*Please Enter Your First Name"),
      lastname: Yup.string().min(3,'Minimum of Three Letters').required("*Please Enter Your First Name"),
      companyName: Yup.string(),
      password: Yup.string().required("*Please Enter your password"),
      email: Yup.string().email("Invalid email address!!").required("*Required"),
    }),
    onSubmit: (values) =>{

    }
  })
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col  w-[85%] max-w-[500px]">
        <header className="flex flex-row justify-center">
          <img
            src="assets/BizHubLogo.png"
            alt="BizHub Logo"
            className="w-44"
          />
        </header>
        <main className="mt-16">
          <h2 className="text-3xl font-semibold mb-6">Sign In To Biz Invoice</h2>
          <form action="" className="text-black p-8 border-2 border-[#72D1CC] ">
            <div className="flex items-center bg-white p-2 rounded-xl cursor-pointer">
              <img src="assets/googleIcon.png" alt="Google Logo" />
              <div className="w-[90%]">
                <h4 className="text-xl md:text-2xl font-medium">Sign In With Google</h4>
              </div>
            </div>
            <div className="flex items-center justify-center py-4">
              <hr className=" w-[25%] max-w-[150px]" />
              <p className="text-base md:text-lg">or with your email below</p>
              <hr className="w-[25%] max-w-[150px]" />
            </div>
            <div className="flex items-center bg-white gap-3 p-2">
              <img src="assets/user.png" alt="Email Icon" />
              <input
                type="text"
                placeholder="First name"
                className="outline-none w-full text-xl"
              />
            </div>
            <div className="flex items-center bg-white gap-3 p-2">
              <img src="assets/user.png" alt="Email Icon" />
              <input
                type="text"
                placeholder="Last name"
                className="outline-none w-full text-xl"
              />
            </div>
            <div className="flex items-center bg-white gap-3 p-2">
              <img src="assets/CompanyName.png" alt="Email Icon" />
              <input
                type="text"
                placeholder="Company name"
                className="outline-none w-full text-xl"
              />
            </div>

            <div className="flex items-center bg-white gap-3 p-2 my-4">
              <img src="assets/passwordIcon.png" alt="password" />
              <input
                type="password"
                placeholder="password"
                className="outline-none w-full text-xl"
              />
            </div>
            <button className="bg-veryGreen w-full text-lg text-white py-3 font-medium rounded-xl">Sign In</button>
          </form>
          <div>
            
          </div>
        </main>
      </div>
    </div>
  )
}

export default SignUp

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { getAuth, signInWithEmailAndPassword,GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import {app} from '../../firebase'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignIn = () => {

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid Email Address!!").required("Can't Leave Empty"),
      password: Yup.string().required("Can't Leave Empty")
    }),
    onSubmit: (values)=>{
      const verify = async()=> {
        
      }
      verify()
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
          <form action="" className="text-black signin p-8 border-2 border-[#72D1CC] "
            onSubmit={(e) => {
              e.preventDefault()
              formik.handleSubmit()
            }}
          >
            <div className="flex items-center bg-white p-2 rounded-xl cursor-pointer input">
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
            <div className="flex items-center bg-white gap-3 p-2 input">
              <img src="assets/WorkEmailIcon.png" alt="Email Icon" />
              <input
                name="email"
                type="email"
                placeholder="Work Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="outline-none w-full text-xl"
              />
            </div>
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red text-start font-medium italic">{formik.errors.email}</div>
            ) : formik.errors.password = ""}
            <div className="flex items-center bg-white gap-3 p-2 my-4 input">
              <img src="assets/passwordIcon.png" alt="password" />
              <input
                name="password"
                type="password"
                placeholder="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className="outline-none w-full text-xl"
              />
            </div>
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red text-start font-medium italic">{formik.errors.password}</div>
            ) : null}
            <button className="bg-veryGreen w-full text-lg text-white py-3 font-medium rounded-xl">Sign In</button>
          </form>
          <ToastContainer/>
          <div>
            
          </div>
        </main>
      </div>
    </div>
  );
};

export default SignIn;

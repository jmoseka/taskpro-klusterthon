import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  let navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      emails: "",
      passwords: ""
    },
    validationSchema: Yup.object({
      password: Yup.string(),
      email: Yup.string().email("Invalid email address!!"),
    }),
    onSubmit: (values) => {
      let signInData = new FormData()
      signInData.append('password', values.passwords)
      signInData.append('email', values.emails)
      
      let signIn = async()=>{
        await fetch('https://bizhub-8955b30ff7e1.herokuapp.com/account/login/',{
          method: 'POST',
          body: signInData,
          header:{
            "Content-Type": 'multipart/form-data',
          }
        })
        .then(res => res.json())
        .then(data => {
          if(data.token){
            toast.success('Welcome Back')
            setTimeout(()=>{
              localStorage.setItem('bizToken', data.token)
              navigate('/dashboard')
            },2500)
          }
      })
        .catch(err => toast.error('An Error Occured, Please Try Again'))
      }
      signIn()
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
          <h2 className="text-3xl font-semibold mb-6">Sign In To Biz Hub</h2>
          <form className="text-black signin p-8 border-2 border-[#72D1CC] "
            onSubmit={(e)=> {
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
                name="emails"
                type="email"
                placeholder="Email address"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.emails}
                className="outline-none w-full text-xl"
              />
            </div>
            {formik.touched.emails && formik.errors.emails ? (
              <div className="text-red text-start font-medium italic">{formik.errors.emails}</div>
            ) : null}
            <div className="flex items-center bg-white gap-3 p-2 my-4 input">
              <img src="assets/passwordIcon.png" alt="password" />
              <input
                name="passwords"
                type="password"
                placeholder="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.passwords}
                className="outline-none w-full text-xl"
              />
            </div>
            {formik.touched.password && formik.errors.passwords ? (
              <div className="text-red text-start font-medium italic">{formik.errors.passwords}</div>
            ) : null}
            <button className="bg-veryGreen w-full text-lg text-white py-3 font-medium rounded-xl" type="submit" onClick={(e )=> e.stopPropagation()}>Sign In</button>
          </form>
          <ToastContainer/>
          <div className="p-2">
          <p className="text-xl">Don&apos;t have an account? <Link to="/signup" className="text-veryGreen">Sign Up</Link></p>
          <div className="flex items-center justify-center gap-4 text-base text-black">
          <p>Forgot password?</p>
          <p>Terms Of service</p>
          <p>Privacy policy</p>
          </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SignIn;

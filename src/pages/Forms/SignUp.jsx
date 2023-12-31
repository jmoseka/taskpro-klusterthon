import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
  let navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      business_name: "",
      password: "",
      email: "",
    },
    validationSchema: Yup.object({
      first_name: Yup.string().required("*Please Enter Your First Name"),
      last_name: Yup.string().min(3, "Minimum of Three Letters").required("*Please Enter Your Last Name"),
      business_name: Yup.string().required("*Please Enter Your Company Name"),
      password: Yup.string().required("*Please Enter your password"),
      email: Yup.string().email("Invalid email address!!").required("*Required"),
    }),
    onSubmit: (values) => {
      let formdata = new FormData()
      formdata.append('first_name', values.first_name)
      formdata.append('last_name', values.last_name)
      formdata.append('business_name', values.business_name)
      formdata.append('password', values.password)
      formdata.append('email', values.email)
      let signUpUser = async()=>{
        await fetch('https://bizhub-8955b30ff7e1.herokuapp.com/account/register/',{
          method: "POST",
          body: formdata,
          header: {
            "Content-Type": 'multipart/form-data'
          },
        }).then(res => res.json())
        .then(data =>{
          console.log(data)
          if(data.success){
            toast.success('Account Created Successfully')
            setTimeout(()=>{
              navigate('/signin')
            },2500)
          }else if(data.failure){
            console.log(data)
            toast.error('Email or Company Already Exist')
          }
        })
        .catch(err => console.error(err))
      }
      signUpUser()
    }
  });
  return (
    <div className="flex justify-center ">
      <div className="flex flex-col w-[90%] max-w-[550px]">
        <header className="flex flex-row justify-center">
          <img src="assets/BizHubLogo.png" alt="BizHub Logo" className="w-44" />
        </header>
        <main className="mt-16">
          <h2 className="text-3xl text-center font-semibold mb-6">
            Sign Up To Biz Hub
          </h2>
          <form className="text-black p-8 " onSubmit={(e)=>{
            e.preventDefault()
            formik.handleSubmit()
          }}>
            <div className="flex flex-col gap-3">
              <div className="flex items-center bg-white gap-3 p-2 input">
                <img src="assets/user.png" alt="Email Icon" />
                <input
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.first_name}
                  name="first_name"
                  type="text"
                  placeholder="First name"
                  className="outline-none w-full text-xl"
                />
              </div>
              {formik.touched.email && formik.errors.first_name ? (
              <div className="text-red text-start font-medium italic">{formik.errors.first_name}</div>
            ) : null }
              <div className="flex items-center bg-white gap-3 p-2 input">
                <img src="assets/user.png" alt="Email Icon" />
                <input
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.last_name}
                  name="last_name"
                  type="text"
                  placeholder="Last name"
                  className="outline-none w-full text-xl"
                />
              </div>
              {formik.touched.email && formik.errors.last_name ? (
              <div className="text-red text-start font-medium italic">{formik.errors.last_name}</div>
            ) : null }
              <div className="flex items-center bg-white gap-3 p-2 input">
                <img src="assets/CompanyName.png" alt="Email Icon" />
                <input
                  name="business_name"
                  type="text"
                  placeholder="Company name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.business_name}
                  className="outline-none w-full text-xl"
                />
              </div>
              {formik.touched.email && formik.errors.business_name ? (
              <div className="text-red text-start font-medium italic">{formik.errors.business_name}</div>
            ) : null }
              <div className="flex items-center bg-white gap-3 p-2 input">
                <img src="assets/WorkEmailIcon.png" alt="Email Icon" />
                <input
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  placeholder="email"
                  className="outline-none w-full text-xl"
                />
              </div>
              {formik.touched.email && formik.errors.email ? (
              <div className="text-red text-start font-medium italic">{formik.errors.email}</div>
            ) : null }
              <div className="flex items-center bg-white gap-3 p-2 mb-4 input">
                <img src="assets/passwordIcon.png" alt="password" />
                <input
                  name="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  type="password"
                  placeholder="password"
                  className="outline-none w-full text-xl"
                />
              </div>
              {formik.touched.email && formik.errors.password ? (
              <div className="text-red text-start font-medium italic">{formik.errors.password}</div>
            ) : null }
            </div>
            <button className="bg-veryGreen button w-full text-lg text-white py-3 font-medium rounded-xl" disabled={!formik.isValid} type="submit">
              Sign Up
            </button>
          </form>
          <ToastContainer/>
          <div>
          <p className="text-start text-xl">Already a Customer? 
            <Link to='/signin' className="text-veryGreen "> Sign in</Link>
          </p>
          <p className="text-start text-lg mt-3">By creating an account, you agree to our Terms of service and Privacy policy.</p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SignUp;

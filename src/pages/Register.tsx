import { FcGoogle } from "react-icons/fc";
import { MdAlternateEmail } from "react-icons/md";
import { MdOutlinePassword } from "react-icons/md";
import { BiArrowToRight } from "react-icons/bi";
import { RiAccountCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterFormSchema } from "../util/schema";
import { SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";

type RegisterFormInput = z.infer<typeof RegisterFormSchema>;

export const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterFormInput>({ resolver: zodResolver(RegisterFormSchema) });

  const processForm: SubmitHandler<RegisterFormInput> = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="min-h-[93vh] flex flex-col items-center justify-center bg-gray-300 dark:bg-slate-800">
        <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md dark:bg-slate-600">
          <button className="relative mt-6 border rounded-md py-2 text-sm text-gray-800 bg-gray-100 hover:bg-gray-200 flex gap-4 px-4 items-center dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700">
            <FcGoogle size={30} />
            <span className="text-base">Continue with Google</span>
          </button>
          <div className="relative mt-10 h-px bg-gray-300">
            <div className="absolute left-0 top-0 flex justify-center w-full -mt-2">
              <span className="bg-white px-4 text-xs text-gray-500 uppercase dark:bg-slate-800 dark:text-white">
                Or Register With Email
              </span>
            </div>
          </div>
          <div className="mt-10">
            <form onSubmit={handleSubmit(processForm)}>
              <div className="flex flex-col mb-6">
                <label
                  htmlFor="username"
                  className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                >
                  Username:
                </label>
                <div className="relative">
                  <div
                    className={`inline-flex items-center justify-center absolute left-0 top-0 h-full w-10
                    ${errors.username ? "text-red-500" : "text-gray-400"}
                    `}
                  >
                    <RiAccountCircleLine size={22} />
                  </div>
                  <input
                    id="username"
                    type="text"
                    {...register("username")}
                    className={`text-sm sm:text-base  pl-10 pr-4 rounded-lg border  w-full py-2 focus:outline-none  ${
                      errors.username
                        ? "placeholder-red-600 border-red-500"
                        : "placeholder-gray-500 border-gray-400"
                    }`}
                    placeholder={`${
                      errors.username ? errors.username.message : "Username"
                    }`}
                  />
                </div>
              </div>
              <div className="flex flex-col mb-6">
                <label
                  htmlFor="email"
                  className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                >
                  E-Mail Address:
                </label>
                <div className="relative">
                  <div
                    className={`inline-flex items-center justify-center absolute left-0 top-0 h-full w-10  ${
                      errors.email ? "text-red-500" : "text-gray-400"
                    }`}
                  >
                    <MdAlternateEmail size={20} />
                  </div>
                  <input
                    id="email"
                    type="email"
                    {...register("email")}
                    className={`text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none  ${
                      errors.email
                        ? "placeholder-red-600 border-red-500"
                        : "placeholder-gray-500 border-gray-400"
                    }`}
                    placeholder={`${
                      errors.email ? errors.email.message : "E-Mail Address"
                    }`}
                  />
                </div>
              </div>
              <div className="flex flex-col mb-6">
                <label
                  htmlFor="password"
                  className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                >
                  Password:
                </label>
                <div className="relative">
                  <div
                    className={`inline-flex items-center justify-center absolute left-0 top-0 h-full w-10  ${
                      errors.email ? "text-red-500" : "text-gray-400"
                    }`}
                  >
                    <span>
                      <MdOutlinePassword size={20} />
                    </span>
                  </div>
                  <input
                    id="password"
                    type="password"
                    {...register("password")}
                    className={`text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none ${
                      errors.password
                        ? "placeholder-red-600 border-red-500"
                        : "placeholder-gray-500 border-gray-400"
                    }`}
                    placeholder={`${
                      errors.password ? errors.password.message : "Password"
                    }`}
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="flex flex-col mb-6">
                <label
                  htmlFor="password"
                  className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                >
                  Password:
                </label>
                <div className="relative">
                  <div
                    className={`inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 ${
                      errors.confirmPassword ? "text-red-500" : "text-gray-400"
                    }`}
                  >
                    <span>
                      <MdOutlinePassword size={20} />
                    </span>
                  </div>
                  <input
                    id="confirmPassword"
                    type="password"
                    {...register("confirmPassword")}
                    className={`text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none ${
                      errors.confirmPassword
                        ? "placeholder-red-600 border-red-500"
                        : "placeholder-gray-500 border-gray-400"
                    }`}
                    autoComplete="off"
                    placeholder={`${
                      errors.confirmPassword
                        ? errors.confirmPassword.message
                        : "Confirm Password"
                    }`}
                  />
                </div>
              </div>
              <div className="flex w-full">
                <button
                  type="submit"
                  className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in dark:text-slate-white dark:bg-slate-800 dark:hover:bg-slate-700"
                >
                  <span className="mr-2 uppercase">Register</span>
                  <span>
                    <BiArrowToRight size={25} />
                  </span>
                </button>
              </div>
            </form>
          </div>
          <div className="flex justify-center items-center mt-6 ">
            <Link
              to="/login"
              className="inline-flex items-center font-bold text-blue-500 hover:text-blue-700 text-xs text-center dark:text-white dark:hover:text-slate-300"
            >
              <span>
                <RiAccountCircleLine size={30} />
              </span>
              <span className="ml-2 text-base ">
                Already have an account? Log in.
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

"use client";
import React from "react";
import styles from "@/app/ui/home.module.css";
import "bootstrap/dist/css/bootstrap.css";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";

import { useForm, FieldValues } from "react-hook-form";
import { resetPasswordData, resetPasswordSchema } from "../lib/login-data";

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<resetPasswordData>({
    resolver: zodResolver(resetPasswordSchema),
  });

  const submitFormData = (data: resetPasswordData) => console.log(data);

  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex grow flex-col md:flex-row w-full h-full">
        <div
          className="flex items-center justify-center w-full md:w-1/2 bg-[#7D9CB7] md:py-12"
          style={{ backgroundColor: "#7D9CB7" }}
        ></div>

        <div
          className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-1/2 md:px-20"
          style={{ backgroundColor: "#EEEEEE" }}
        >
          <div>
            <p className={styles.heading}> Reset Password </p>
            <p className={styles.description}> organisation </p>
          </div>

          <form onSubmit={handleSubmit(submitFormData)}>
            <div>
              <input
                {...register("email")}
                type="text"
                id="email"
                name="email"
                placeholder="email"
                className={styles.login}
                style={{ fontSize: "20px" }}
              />
              {errors.email && (
                <p className="text-danger"> {errors.email.message}</p>
              )}
            </div>

            <div>
              <input
                {...register("password")}
                type="password"
                id="password"
                name="password"
                placeholder="password"
                className={styles.login}
                style={{ fontSize: "20px" }}
              />
              {errors.password && (
                <p className="text-danger"> {errors.password.message}</p>
              )}
            </div>

            <div>
              <input
                {...register("confirmPassword")}
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="confirmPasswordl"
                className={styles.login}
                style={{ fontSize: "20px" }}
              />
              {errors.confirmPassword && (
                <p className="text-danger"> {errors.confirmPassword.message}</p>
              )}
            </div>
            <div>
              <button type="submit" className={styles.loginButton}>
                LOG IN
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default ResetPassword;

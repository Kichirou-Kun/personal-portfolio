import FrontLayout from "@common/FrontLayout";
import Button from "@ui/Button";
import Container from "@ui/Container";
import TextField from "@ui/TextField";
import Typography from "@ui/Typography";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import BaseSeo from "@components/BaseSeo";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import PasswordTextField from "@ui/PasswordTextField";
import { useAuth } from "@context/AuthContext/AuthContext";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

type FormValues = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const { signin, user } = useAuth();
  const router = useRouter();

  const validationSchema = Yup.object({
    email: Yup.string().required().max(255).trim().email(),
    password: Yup.string().required().max(255).trim(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid, touchedFields, isSubmitting },
  } = useForm<FormValues>({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(validationSchema),
  });

  const submitHandler = async ({ email, password }: FormValues) => {
    try {
      await signin(email, password);
      router.push("/");
    } catch (error: any) {
      toast.error(`Email or Password Invalid!`);
      router.push("/signin");
    }
  };
  return (
    <>
      <BaseSeo title="SignUp" description="SignUP Page : SEO Title" />
      <section className="mt-[120px] flex  flex-col items-center justify-center">
        <Container>
          <form
            onSubmit={handleSubmit(submitHandler)}
            className="mb-10 flex h-full w-full flex-col items-center justify-center"
          >
            <Typography
              variant="h4"
              className="my-6 text-center uppercase leading-snug text-SECONDARY_COLOR"
            >
              Login
            </Typography>
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="flex w-full flex-col gap-6 rounded bg-SECONDARY_BG p-6 md:w-4/6 lg:w-3/6 xl:w-2/6"
            >
              <div>
                <Typography variant="h6" className="mb-2 text-SECONDARY_COLOR">
                  Email
                </Typography>
                <TextField
                  {...register("email")}
                  error={
                    touchedFields.email && errors.email && Boolean(errors.email)
                  }
                  helperText={
                    touchedFields.email && errors.email && errors.email?.message
                  }
                  fullWidth
                  type={"email"}
                  placeholder="Email"
                />
              </div>
              <div>
                <Typography variant="h6" className="mb-2 text-SECONDARY_COLOR">
                  Password
                </Typography>
                <PasswordTextField
                  {...register("password")}
                  error={
                    touchedFields.password &&
                    errors.password &&
                    Boolean(errors.password)
                  }
                  helperText={
                    touchedFields.password &&
                    errors.password &&
                    errors.password?.message
                  }
                  fullWidth
                  type={"password"}
                  placeholder="Password"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting && isDirty && isValid}
                size="large"
                className="cursor-pointer bg-gradient-to-r from-[#619BFD] to-[#A17CF9] text-white transition-opacity duration-150 ease-linear hover:opacity-80"
              >
                {isSubmitting ? "Loading..." : "Login"}
              </Button>

              <Typography component="span" className="text-white">
                Don't have account yet ?{" "}
                <Link
                  href={`/signup`}
                  className="bg-gradient-to-r from-[#619BFD] to-[#A17CF9] bg-clip-text font-semibold capitalize text-transparent transition-colors duration-150 ease-linear hover:opacity-80"
                >
                  create account
                </Link>
              </Typography>
            </motion.div>
          </form>
        </Container>
      </section>
    </>
  );
};

export default LoginPage;

LoginPage.getLayout = function getLayout(page: React.ReactElement) {
  return <FrontLayout>{page}</FrontLayout>;
};

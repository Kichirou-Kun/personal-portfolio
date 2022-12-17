import FrontLayout from "@common/FrontLayout";
import Button from "@ui/Button";
import Container from "@ui/Container";
import TextField from "@ui/TextField";
import Typography from "@ui/Typography";
import NextLink from "next/link";
import React from "react";
import { motion } from "framer-motion";
import BaseSeo from "@components/BaseSeo";

const LoginPage = () => {
  return (
    <>
      <BaseSeo title="SignIn" description="Sign Page : SEO Title" />
      <section className="mt-[120px] flex flex-col items-center justify-center ">
        <Container>
          <form className="flex w-full flex-col items-center justify-center">
            <Typography
              variant="h4"
              className="my-6 text-center uppercase leading-snug text-SECONDARY_COLOR"
            >
              SignIn
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
                <TextField fullWidth type={"email"} placeholder="Email" />
              </div>
              <div>
                <Typography variant="h6" className="mb-2 text-SECONDARY_COLOR">
                  Password
                </Typography>
                <TextField fullWidth type={"password"} placeholder="Password" />
              </div>

              <Button
                size="large"
                className="bg-gradient-to-r  from-[#619BFD] to-[#A17CF9] text-white transition-opacity duration-150 ease-linear hover:opacity-80"
              >
                Submit
              </Button>
              <Typography component="span" className="text-white">
                Don't have account ?{" "}
                <NextLink
                  href={`/signup`}
                  className="bg-gradient-to-r from-[#619BFD] to-[#A17CF9] bg-clip-text font-semibold text-transparent transition-colors duration-150 ease-linear hover:opacity-80"
                >
                  Create Account
                </NextLink>
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

import Title from "@components/Title";
import { NEXT_IMAGE_QUALITY } from "@config/app";
import Container from "@ui/Container";
import Grid from "@ui/Grid";
import IconButton from "@ui/IconButton";
import Typography from "@ui/Typography";
import NextImage from "next/legacy/image";
import NextLink from "next/link";
import React from "react";
import img from "../../../public/assets/contact/contact.jpg";
import github from "../../../public/assets/skills/github.png";
import facebook from "../../../public/assets/skills/facebook.jpg";
import TextField from "@ui/TextField";
import { motion } from "framer-motion";
import TextAreaField from "@ui/TextAreaField";

const ContactSection = () => {
  return (
    <section className="py-32" id="contact">
      <Container>
        <Title title="contact" text="get in touch" />
        <Grid container className="gap-6">
          <Grid item className="col-span-12 lg:col-span-5">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="flex flex-col justify-between rounded bg-SECONDARY_BG p-6"
            >
              <NextImage
                src={img}
                alt="contact"
                objectFit="cover"
                quality={NEXT_IMAGE_QUALITY}
                height={400}
                className="w-full rounded"
                priority
              />
              <Typography
                variant="h3"
                className="my-3 bg-gradient-to-r from-[#619BFD] to-[#A17CF9] bg-clip-text font-bold  text-transparent"
              >
                Aung Nyein Htet
              </Typography>
              <Typography variant="h5" className="text-white">
                Front-End Developer
              </Typography>
              <Typography className="mt-3 text-lg text-SECONDARY_COLOR">
                I am available for freelance or full-time positions.Contact me
                and let's talk
              </Typography>

              <div className="mt-8">
                <Typography
                  variant="h5"
                  className="capitalize text-SECONDARY_COLOR"
                >
                  connect with me
                </Typography>
                <div className="mt-2 flex flex-row items-center space-x-6">
                  <NextLink
                    href={`https://github.com/Kichirou-Kun`}
                    target="_blank"
                  >
                    <IconButton className="flex flex-col items-center justify-center">
                      <NextImage
                        priority
                        src={github}
                        width={40}
                        height={40}
                        alt="github"
                        objectFit="contain"
                      />
                    </IconButton>
                  </NextLink>
                  <NextLink
                    href={`https://www.facebook.com/profile.php?id=100077353853364&mibextid=ZbWKwL`}
                    target="_blank"
                  >
                    <IconButton className="flex flex-col items-center justify-center">
                      <NextImage
                        priority
                        src={facebook}
                        width={40}
                        height={40}
                        alt="github"
                        objectFit="contain"
                      />
                    </IconButton>
                  </NextLink>
                </div>
              </div>
            </motion.div>
          </Grid>
          <Grid item className="col-span-12 lg:col-span-7">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="h-full rounded bg-SECONDARY_BG p-6 "
            >
              <form className="flex flex-col gap-6">
                <Grid container className="gap-4">
                  <Grid item className="col-span-12 lg:col-span-6">
                    <div>
                      <Typography
                        variant="h5"
                        className="mb-2 uppercase text-SECONDARY_COLOR"
                      >
                        Name
                      </Typography>
                      <TextField fullWidth type={"text"} placeholder="Name" />
                    </div>
                  </Grid>
                  <Grid item className="col-span-12 lg:col-span-6">
                    <div>
                      <Typography
                        variant="h5"
                        className="mb-2 uppercase text-SECONDARY_COLOR"
                      >
                        Phone Number
                      </Typography>
                      <TextField
                        fullWidth
                        type={"tel"}
                        placeholder="Phone Number"
                      />
                    </div>
                  </Grid>
                </Grid>
                <div>
                  <Typography
                    variant="h5"
                    className="mb-2 uppercase text-SECONDARY_COLOR"
                  >
                    Email
                  </Typography>
                  <TextField fullWidth type={"email"} placeholder="Email" />
                </div>
                <div>
                  <Typography
                    variant="h5"
                    className="mb-2 uppercase text-SECONDARY_COLOR"
                  >
                    Subject
                  </Typography>
                  <TextField fullWidth type={"text"} placeholder="Subject" />
                </div>
                <div>
                  <Typography
                    variant="h5"
                    className="mb-2 uppercase text-SECONDARY_COLOR"
                  >
                    Message
                  </Typography>
                  <TextAreaField placeholder="Message" />
                </div>
              </form>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default ContactSection;

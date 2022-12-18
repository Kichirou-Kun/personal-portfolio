import Title from "@components/Title";
import { NEXT_IMAGE_QUALITY } from "@config/app";
import Container from "@ui/Container";
import Grid from "@ui/Grid";
import IconButton from "@ui/IconButton";
import Typography from "@ui/Typography";
import NextImage from "next/legacy/image";
import NextLink from "next/link";
import React from "react";
import github from "../../../public/assets/skills/github.png";
import facebook from "../../../public/assets/skills/facebook.jpg";
import { motion } from "framer-motion";
import { contactDataType } from "src/types/dataTypes";
import ContactForm from "@components/ContactForm";

interface Props {
  contact: contactDataType;
}
const ContactSection = ({ contact }: Props) => {
  return (
    <section className="overflow-x-hidden py-32 " id="contact">
      <Container>
        <Title title="contact" text="get in touch" />
        <Grid container className="gap-6">
          <Grid item className="col-span-12 lg:col-span-5">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="flex h-full w-full flex-col justify-between rounded bg-SECONDARY_BG p-6"
            >
              <NextImage
                src={contact?.imageURL}
                alt="contact"
                quality={NEXT_IMAGE_QUALITY}
                layout="responsive"
                width={460}
                objectFit="cover"
                height={260}
                className="rounded"
                priority
              />
              <Typography
                variant="h3"
                className=" bg-gradient-to-r from-[#619BFD] to-[#A17CF9] bg-clip-text font-bold  text-transparent"
              >
                {contact?.name}
              </Typography>
              <Typography variant="h5" className="text-white">
                {contact?.position}
              </Typography>
              <Typography className="text-lg text-SECONDARY_COLOR">
                {contact?.description}
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
            <ContactForm />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default ContactSection;

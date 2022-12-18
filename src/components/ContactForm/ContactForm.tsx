import React from "react";
import { motion } from "framer-motion";
import Grid from "@ui/Grid";
import Typography from "@ui/Typography";
import TextField from "@ui/TextField";
import TextAreaField from "@ui/TextAreaField";
import Button from "@ui/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { createUserContact } from "@lib/createUserContact";

interface FormValues {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}
const ContactForm = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required().max(255).trim(),
    phone: Yup.string().required().max(255).trim(),
    email: Yup.string().required().max(255).trim().email(),
    subject: Yup.string().required().max(255).trim(),
    message: Yup.string().required().max(800).trim(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid, isSubmitting, touchedFields },
  } = useForm<FormValues>({
    mode: "onChange",
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    },
    resolver: yupResolver(validationSchema),
  });
  const submitHandler = async ({
    name,
    phone,
    email,
    subject,
    message,
  }: FormValues) => {
    const doc = {
      id: `${Date.now()}`,
      name,
      phone,
      email,
      subject,
      message,
    };
    createUserContact(doc);
  };
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="h-full rounded bg-SECONDARY_BG p-6 "
    >
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="flex flex-col gap-4"
      >
        <Grid container className="gap-4">
          <Grid item className="col-span-12 lg:col-span-6">
            <div>
              <Typography
                variant="h5"
                className="mb-2 uppercase text-SECONDARY_COLOR"
              >
                Name
              </Typography>
              <TextField
                {...register("name")}
                error={
                  touchedFields.name &&
                  errors.name &&
                  Boolean(errors.name?.message)
                }
                helperText={
                  touchedFields.name && errors?.name && errors?.name?.message
                }
                fullWidth
                type={"text"}
                placeholder="Name"
              />
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
                {...register("phone")}
                error={
                  touchedFields.phone &&
                  errors.phone &&
                  Boolean(errors.phone?.message)
                }
                helperText={
                  touchedFields.phone && errors?.phone && errors?.phone?.message
                }
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
          <TextField
            {...register("email")}
            error={
              touchedFields.email &&
              errors.email &&
              Boolean(errors.email?.message)
            }
            helperText={
              touchedFields.email && errors?.email && errors?.email?.message
            }
            fullWidth
            type={"email"}
            placeholder="Email"
          />
        </div>
        <div>
          <Typography
            variant="h5"
            className="mb-2 uppercase text-SECONDARY_COLOR"
          >
            Subject
          </Typography>
          <TextField
            {...register("subject")}
            error={
              touchedFields.subject &&
              errors.subject &&
              Boolean(errors.subject?.message)
            }
            helperText={
              touchedFields.subject &&
              errors?.subject &&
              errors?.subject?.message
            }
            fullWidth
            type={"text"}
            placeholder="Subject"
          />
        </div>
        <div>
          <Typography
            variant="h5"
            className="mb-2 uppercase text-SECONDARY_COLOR"
          >
            Message
          </Typography>
          <TextAreaField
            {...register("message")}
            error={
              touchedFields.message &&
              errors.message &&
              Boolean(errors.message?.message)
            }
            helperText={
              touchedFields.message &&
              errors?.message &&
              errors?.message?.message
            }
            rows={4}
            fullWidth
            placeholder="Message"
          />
        </div>
        <Button
          size="large"
          type="submit"
          disabled={isSubmitting && isDirty && isValid}
          className="bg-gradient-to-r from-[#619BFD] to-[#A17CF9] text-white transition-opacity duration-150 ease-linear  hover:opacity-80"
        >
          Submit
        </Button>
      </form>
    </motion.div>
  );
};

export default ContactForm;

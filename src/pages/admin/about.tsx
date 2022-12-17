import BackLayout from "@admin/common/Layout/BackLayout";
import BaseSeo from "@components/BaseSeo";
import Button from "@ui/Button";
import Container from "@ui/Container";
import Grid from "@ui/Grid";
import TextAreaField from "@ui/TextAreaField";
import TextField from "@ui/TextField";
import Typography from "@ui/Typography";
import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { uploadImage } from "@utils/uploadImage";
import IconButton from "@ui/IconButton";
import { TrashIcon } from "@heroicons/react/24/solid";
import { deleteImages } from "@utils/deleteImage";
import { saveAboutPost } from "@lib/saveAboutPost";
interface FormValues {
  text: string;
  description1: string;
  description2: string;
}
const AboutPage = () => {
  const [imageAsset, setImageAsset] = React.useState<null | any>(null);
  const validationSchema = Yup.object({
    text: Yup.string().required().max(255).trim(),
    description1: Yup.string().required().max(255).trim(),
    description2: Yup.string().required().max(255).trim(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty, isSubmitting, touchedFields },
  } = useForm<FormValues>({
    mode: "onChange",
    defaultValues: {
      text: "",
      description1: "",
      description2: "",
    },
    resolver: yupResolver(validationSchema),
  });

  const upload = (e: any) => {
    const imageFile = e.target.files[0];
    uploadImage(imageFile, setImageAsset);
  };
  const deleteImg = () => {
    deleteImages(imageAsset, setImageAsset);
  };
  const onSubmitHandler = ({
    text,
    description1,
    description2,
  }: FormValues) => {
    const data: any = {
      id: `${Date.now()}`,
      text,
      description1,
      description2,
      imageURL: imageAsset,
    };
    saveAboutPost(data);
    setImageAsset(null);
  };
  return (
    <BackLayout>
      <>
        <BaseSeo title="About Page" description="Admin About Page: SEO Title" />

        <section className="mt-[120px]">
          <Container>
            <div className="flex w-full flex-col">
              <Typography
                variant="h3"
                className="mb-8 text-center uppercase text-SECONDARY_COLOR"
              >
                Update About Section
              </Typography>
              <form
                onSubmit={handleSubmit(onSubmitHandler)}
                className="mb-10 flex  w-full  flex-col items-center justify-center"
              >
                <div className="flex w-full flex-col gap-6 rounded bg-PRIMARY_BG p-6 lg:w-4/6">
                  <div>
                    <Typography
                      variant="h5"
                      className="mb-2 text-SECONDARY_COLOR"
                    >
                      Text
                    </Typography>
                    <TextField
                      {...register("text")}
                      error={
                        touchedFields.text &&
                        errors.text &&
                        Boolean(errors.text?.message)
                      }
                      helperText={
                        touchedFields.text &&
                        errors.text &&
                        errors.text?.message
                      }
                      fullWidth
                      type={"text"}
                      placeholder="Text"
                    />
                  </div>
                  <div>
                    <Typography
                      variant="h5"
                      className="mb-2 text-SECONDARY_COLOR"
                    >
                      Description1
                    </Typography>
                    <TextAreaField
                      error={
                        touchedFields.description1 &&
                        errors.description1 &&
                        Boolean(errors.description1?.message)
                      }
                      helperText={
                        touchedFields.description1 &&
                        errors.description1 &&
                        errors.description1?.message
                      }
                      {...register("description1")}
                      fullWidth
                      placeholder="Description1"
                    />
                  </div>
                  <div>
                    <Typography
                      variant="h5"
                      className="mb-2 text-SECONDARY_COLOR"
                    >
                      Description2
                    </Typography>
                    <TextAreaField
                      {...register("description2")}
                      error={
                        touchedFields.description2 &&
                        errors.description2 &&
                        Boolean(errors.description2?.message)
                      }
                      helperText={
                        touchedFields.description2 &&
                        errors.description2 &&
                        errors.description2?.message
                      }
                      fullWidth
                      placeholder="Description2"
                    />
                  </div>
                  <div className="relative flex h-[300px]  w-full cursor-pointer flex-col items-center justify-center rounded border-4 border-dashed border-SECONDARY_COLOR">
                    {imageAsset ? (
                      <>
                        <img
                          src={imageAsset}
                          alt=""
                          className="h-full w-full object-contain"
                        />
                        <IconButton
                          className="absolute top-4 right-4 flex flex-col items-center justify-center"
                          onClick={deleteImg}
                        >
                          <TrashIcon className="h-6 w-6 text-red-600" />
                        </IconButton>
                      </>
                    ) : (
                      <>
                        <label
                          className="flex h-full w-full cursor-pointer flex-col items-center justify-center text-xl capitalize text-SECONDARY_COLOR"
                          htmlFor="image"
                        >
                          Click Here To Image Upload
                          <input
                            onChange={upload}
                            type={"file"}
                            hidden
                            id="image"
                          />
                        </label>
                      </>
                    )}
                  </div>
                  <Button
                    type="submit"
                    size="large"
                    disabled={isSubmitting && isValid && isDirty}
                    className="bg-gradient-to-r from-[#619BFD] to-[#A17CF9] text-white transition-opacity duration-150 ease-linear hover:opacity-80"
                  >
                    Upload
                  </Button>
                </div>
              </form>
            </div>
          </Container>
        </section>
      </>
    </BackLayout>
  );
};

export default AboutPage;

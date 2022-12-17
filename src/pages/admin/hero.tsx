import BackLayout from "@admin/common/Layout/BackLayout";
import BaseSeo from "@components/BaseSeo";
import { TrashIcon } from "@heroicons/react/24/solid";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { saveHeroPost } from "@lib/saveHeroPost";
import Button from "@ui/Button";
import Container from "@ui/Container";
import Grid from "@ui/Grid";
import IconButton from "@ui/IconButton";
import TextAreaField from "@ui/TextAreaField";
import TextField from "@ui/TextField";
import Typography from "@ui/Typography";
import React from "react";
import { useForm } from "react-hook-form";
import { HeroDataType } from "src/types/heroType";
import { uploadImage } from "@utils/uploadImage";
import { deleteImages } from "@utils/deleteImage";

interface FormValues {
  name: string;
  position: string;
  description: string;
}

const HeroPage = () => {
  const [imageAsset, setImageAsset] = React.useState<null | any>(null);
  const validationSchema = Yup.object({
    name: Yup.string().required().max(255).trim(),
    position: Yup.string().required().max(255).trim(),
    description: Yup.string().required().max(255).trim(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty, isSubmitting, touchedFields },
  } = useForm<FormValues>({
    mode: "onChange",
    defaultValues: {
      name: "",
      position: "",
      description: "",
    },
    resolver: yupResolver(validationSchema),
  });

  const upload = (e: any) => {
    const imageFile = e.target.files[0];
    uploadImage(imageFile, setImageAsset);
  };

  const delteImg = () => {
    deleteImages(imageAsset, setImageAsset);
  };

  const submitHandler = ({ name, position, description }: FormValues) => {
    const data: HeroDataType = {
      id: `${Date.now()}`,
      name,
      position,
      description,
      imageURL: imageAsset,
    };
    saveHeroPost(data);
    setImageAsset(null);
  };

  return (
    <BackLayout>
      <>
        <BaseSeo title="Hero Page" description="Admin Hero Page: SEO Title" />

        <section className="mt-[120px]">
          <Container>
            <div className="flex w-full flex-col">
              <Typography
                variant="h3"
                className="mb-8 text-center uppercase text-SECONDARY_COLOR"
              >
                Update Hero Section
              </Typography>
              <form
                onSubmit={handleSubmit(submitHandler)}
                className="mb-10  flex  w-full flex-col items-center justify-center"
              >
                <div className="flex w-full flex-col gap-6 rounded bg-PRIMARY_BG p-6 lg:w-4/6">
                  <Grid container className="gap-4 ">
                    <Grid item className="col-span-12 lg:col-span-6">
                      <div>
                        <Typography
                          variant="h5"
                          className="mb-2 text-SECONDARY_COLOR"
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
                            touchedFields.name &&
                            errors.name &&
                            errors.name?.message
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
                          className="mb-2 text-SECONDARY_COLOR"
                        >
                          Position
                        </Typography>
                        <TextField
                          error={
                            touchedFields.position &&
                            errors.position &&
                            Boolean(errors.position?.message)
                          }
                          helperText={
                            touchedFields.position &&
                            errors.position &&
                            errors.position?.message
                          }
                          {...register("position")}
                          fullWidth
                          type={"text"}
                          placeholder="Position"
                        />
                      </div>
                    </Grid>
                  </Grid>
                  <div>
                    <Typography
                      variant="h5"
                      className="mb-2 text-SECONDARY_COLOR"
                    >
                      Description
                    </Typography>
                    <TextAreaField
                      rows={4}
                      error={
                        touchedFields.description &&
                        errors.description &&
                        Boolean(errors.description?.message)
                      }
                      helperText={
                        touchedFields.description &&
                        errors.description &&
                        errors.description?.message
                      }
                      fullWidth
                      {...register("description")}
                      placeholder="Description"
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
                          onClick={delteImg}
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
                    size="large"
                    disabled={isSubmitting && isDirty && isValid}
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

export default HeroPage;

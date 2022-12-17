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
import { deleteImages } from "@utils/deleteImage";
import IconButton from "@ui/IconButton";
import { TrashIcon } from "@heroicons/react/24/solid";
import { saveProjectPost } from "@lib/saveProjectPost";
interface FormValues {
  app_name: string;
  main_technology: string;
  github_link: string;
  demo_link: string;
  all_technologies: string;
}
const ProjectsPage = () => {
  const [imageAsset, setImageAsset] = React.useState<null | any>(null);
  const validationSchema = Yup.object({
    app_name: Yup.string().required().max(255).trim(),
    main_technology: Yup.string().required().max(255).trim(),
    github_link: Yup.string().required().max(255).trim(),
    demo_link: Yup.string().required().max(255).trim(),
    all_technologies: Yup.string().required().max(255).trim(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty, isSubmitting, touchedFields },
  } = useForm<FormValues>({
    mode: "onChange",
    defaultValues: {
      app_name: "",
      main_technology: "",
      github_link: "",
      demo_link: "",
      all_technologies: "",
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
    app_name,
    main_technology,
    github_link,
    demo_link,
    all_technologies,
  }: FormValues) => {
    const data: any = {
      id: `${Date.now()}`,
      app_name,
      main_technology,
      github_link,
      demo_link,
      all_technologies,
      imageURL: imageAsset,
    };
    saveProjectPost(data);
    setImageAsset(null);
  };
  return (
    <BackLayout>
      <>
        <BaseSeo
          title="Projects Page"
          description="Admin Projects Page: SEO Title"
        />

        <section className="mt-[120px]">
          <Container>
            <div className="flex w-full flex-col">
              <Typography
                variant="h3"
                className="mb-8 text-center uppercase text-SECONDARY_COLOR"
              >
                Update Projects Section
              </Typography>
              <form
                onSubmit={handleSubmit(onSubmitHandler)}
                className="mb-10 flex  w-full  flex-col items-center justify-center"
              >
                <div className="flex w-full flex-col gap-6 rounded bg-PRIMARY_BG p-6 lg:w-4/6">
                  <Grid container className="gap-4 ">
                    <Grid item className="col-span-12 lg:col-span-6">
                      <div>
                        <Typography
                          variant="h5"
                          className="mb-2 text-SECONDARY_COLOR"
                        >
                          App Name
                        </Typography>
                        <TextField
                          {...register("app_name")}
                          error={
                            touchedFields.app_name &&
                            errors.app_name &&
                            Boolean(errors.app_name?.message)
                          }
                          helperText={
                            touchedFields.app_name &&
                            errors.app_name &&
                            errors.app_name?.message
                          }
                          fullWidth
                          type={"text"}
                          placeholder=" App Name"
                        />
                      </div>
                    </Grid>
                    <Grid item className="col-span-12 lg:col-span-6">
                      <div>
                        <Typography
                          variant="h5"
                          className="mb-2 text-SECONDARY_COLOR"
                        >
                          Main Technology
                        </Typography>
                        <TextField
                          {...register("main_technology")}
                          error={
                            touchedFields.main_technology &&
                            errors.main_technology &&
                            Boolean(errors.main_technology?.message)
                          }
                          helperText={
                            touchedFields.main_technology &&
                            errors.main_technology &&
                            errors.main_technology?.message
                          }
                          fullWidth
                          type={"text"}
                          placeholder="Main Technology"
                        />
                      </div>
                    </Grid>
                  </Grid>
                  <Grid container className="gap-4 ">
                    <Grid item className="col-span-12 lg:col-span-6">
                      <div>
                        <Typography
                          variant="h5"
                          className="mb-2 text-SECONDARY_COLOR"
                        >
                          Github Link
                        </Typography>
                        <TextField
                          {...register("github_link")}
                          error={
                            touchedFields.github_link &&
                            errors.github_link &&
                            Boolean(errors.github_link?.message)
                          }
                          helperText={
                            touchedFields.github_link &&
                            errors.github_link &&
                            errors.github_link?.message
                          }
                          fullWidth
                          type={"text"}
                          placeholder=" Github Link"
                        />
                      </div>
                    </Grid>
                    <Grid item className="col-span-12 lg:col-span-6">
                      <div>
                        <Typography
                          variant="h5"
                          className="mb-2 text-SECONDARY_COLOR"
                        >
                          Demo Link
                        </Typography>
                        <TextField
                          {...register("demo_link")}
                          error={
                            touchedFields.demo_link &&
                            errors.demo_link &&
                            Boolean(errors.demo_link?.message)
                          }
                          helperText={
                            touchedFields.demo_link &&
                            errors.demo_link &&
                            errors.demo_link?.message
                          }
                          fullWidth
                          type={"text"}
                          placeholder="Demo Link"
                        />
                      </div>
                    </Grid>
                  </Grid>
                  <div>
                    <Typography
                      variant="h5"
                      className="mb-2 text-SECONDARY_COLOR"
                    >
                      All Technologies
                    </Typography>
                    <TextField
                      {...register("all_technologies")}
                      error={
                        touchedFields.all_technologies &&
                        errors.all_technologies &&
                        Boolean(errors.all_technologies?.message)
                      }
                      helperText={
                        touchedFields.all_technologies &&
                        errors.all_technologies &&
                        errors.all_technologies?.message
                      }
                      fullWidth
                      type={"text"}
                      placeholder="All Technologies"
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
                    disabled={isSubmitting && isValid && isDirty}
                    size="large"
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

export default ProjectsPage;

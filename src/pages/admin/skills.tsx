import BackLayout from "@admin/common/Layout/BackLayout";
import BaseSeo from "@components/BaseSeo";
import Button from "@ui/Button";
import Container from "@ui/Container";
import TextField from "@ui/TextField";
import Typography from "@ui/Typography";
import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { uploadImage } from "@utils/uploadImage";
import { deleteImages } from "@utils/deleteImage";
import { TrashIcon } from "@heroicons/react/24/solid";
import IconButton from "@ui/IconButton";
import { saveSkillPost } from "@lib/saveSkillPost";
interface FormValues {
  technologires: string;
}
const SkillsPage = () => {
  const [imageAsset, setImageAsset] = React.useState<null | any>(null);
  const validationSchema = Yup.object({
    technologires: Yup.string().required().max(255).trim(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty, isSubmitting, touchedFields },
  } = useForm<FormValues>({
    mode: "onChange",
    defaultValues: {
      technologires: "",
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

  const onSubmitHandler = ({ technologires }: FormValues) => {
    const data: any = {
      id: `${Date.now()}`,
      technologires,
      imageURL: imageAsset,
    };
    saveSkillPost(data);
    setImageAsset(null);
  };
  return (
    <BackLayout>
      <>
        <BaseSeo
          title="Skills Page"
          description="Admin Skills Page: SEO Title"
        />

        <section className="mt-[120px]">
          <Container>
            <div className="flex w-full flex-col">
              <Typography
                variant="h3"
                className="mb-8 text-center uppercase text-SECONDARY_COLOR"
              >
                Update Skills Section
              </Typography>
              <form
                onSubmit={handleSubmit(onSubmitHandler)}
                className="mb-10 flex w-full flex-col items-center justify-center"
              >
                <div className="flex w-full flex-col gap-6 rounded bg-PRIMARY_BG p-6 lg:w-4/6">
                  <div>
                    <Typography
                      variant="h5"
                      className="mb-2 text-SECONDARY_COLOR"
                    >
                      Technologires
                    </Typography>
                    <TextField
                      {...register("technologires")}
                      error={
                        touchedFields.technologires &&
                        errors.technologires &&
                        Boolean(errors.technologires?.message)
                      }
                      helperText={
                        touchedFields.technologires &&
                        errors.technologires &&
                        errors.technologires?.message
                      }
                      fullWidth
                      type={"text"}
                      placeholder="Technologires"
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

export default SkillsPage;

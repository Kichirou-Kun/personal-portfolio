import BackLayout from "@admin/common/Layout/BackLayout";
import BaseSeo from "@components/BaseSeo";
import Button from "@ui/Button";
import Container from "@ui/Container";
import Grid from "@ui/Grid";
import TextAreaField from "@ui/TextAreaField";
import TextField from "@ui/TextField";
import Typography from "@ui/Typography";
import React from "react";

const AboutPage = () => {
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
              <form className="mb-10 flex  w-full  flex-col items-center justify-center">
                <div className="flex w-full flex-col gap-6 rounded bg-PRIMARY_BG p-6 lg:w-4/6">
                  <div>
                    <Typography
                      variant="h5"
                      className="mb-2 text-SECONDARY_COLOR"
                    >
                      Text
                    </Typography>
                    <TextField fullWidth type={"text"} placeholder="Text" />
                  </div>
                  <div>
                    <Typography
                      variant="h5"
                      className="mb-2 text-SECONDARY_COLOR"
                    >
                      Description1
                    </Typography>
                    <TextAreaField placeholder="Description1" />
                  </div>
                  <div>
                    <Typography
                      variant="h5"
                      className="mb-2 text-SECONDARY_COLOR"
                    >
                      Description2
                    </Typography>
                    <TextAreaField placeholder="Description2" />
                  </div>
                  <div className="flex h-[250px] w-full  cursor-pointer flex-col items-center justify-center rounded border-4 border-dashed border-SECONDARY_COLOR">
                    <label
                      className="flex h-full w-full cursor-pointer flex-col items-center justify-center text-xl capitalize text-SECONDARY_COLOR"
                      htmlFor="image"
                    >
                      Click Here To Image Upload
                      <input type={"file"} hidden id="image" />
                    </label>
                  </div>
                  <Button
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

export default AboutPage;

import Box from "@ui/Box";
import Button from "@ui/Button";
import Container from "@ui/Container";
import Grid from "@ui/Grid";
import TextField from "@ui/TextField";
import Typography from "@ui/Typography";
import UserTable from "../UserTable";
import React from "react";
import ContactMessage from "./ContactMessage";

const Dashboard = () => {
  const [isEdit, setIsEdit] = React.useState(false);
  const toggleEdit = () => {
    setIsEdit((prev) => !prev);
  };
  return (
    <section className="mt-[120px] h-full bg-BODY_BG">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col">
          <Typography variant="h3" className="mb-2 text-SECONDARY_COLOR">
            Dashboard
          </Typography>
          <Grid container className="gap-4">
            <Grid
              item
              className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3"
            >
              <Box className="flex  flex-col items-center justify-center rounded bg-SECONDARY_BG p-4">
                <Typography variant="h2" className="text-white">
                  32
                </Typography>
                <Typography className="mt-4 text-xl font-bold text-SECONDARY_COLOR">
                  View Users
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3"
            >
              <Box className="flex  flex-col items-center justify-center rounded bg-SECONDARY_BG p-4">
                <Typography variant="h2" className="text-white">
                  6
                </Typography>
                <Typography className="mt-4 text-xl font-bold text-SECONDARY_COLOR">
                  Contact
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3"
            >
              <Box className="flex  flex-col items-center justify-center rounded bg-SECONDARY_BG p-4">
                <Typography variant="h2" className="text-white">
                  1
                </Typography>
                <Typography className="mt-4 text-xl font-bold text-SECONDARY_COLOR">
                  Admin Permission
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3"
            >
              <Box className="flex  flex-col items-center justify-center rounded bg-SECONDARY_BG p-4">
                <Typography variant="h2" className="text-white">
                  10
                </Typography>
                <Typography className="mt-4 text-xl font-bold text-SECONDARY_COLOR">
                  Contact Interview
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </div>
        <div className="flex flex-col ">
          <Typography variant="h3" className="mb-2 text-SECONDARY_COLOR">
            Contact Messages
          </Typography>
          <ContactMessage />
        </div>
        <UserTable onClick={toggleEdit} />

        {isEdit && (
          <form className="mb-10  flex w-full flex-col items-center justify-center">
            <Typography variant="h4" className="mb-6 text-SECONDARY_COLOR">
              Edit New Permission
            </Typography>
            <div className="flex w-full flex-col gap-6 rounded bg-SECONDARY_BG p-6 md:w-4/6 lg:w-3/6 xl:w-2/6">
              <div>
                <Typography variant="h5" className="text-SECONDARY_COLOR">
                  Name
                </Typography>
                <TextField fullWidth type="text" placeholder="Name" />
              </div>
              <div className="w-full">
                <Typography variant="h5" className="text-SECONDARY_COLOR">
                  Role
                </Typography>
                <select className="block w-full rounded-md border border-gray-500 bg-inherit px-4 py-[16.5px]  text-SECONDARY_COLOR placeholder-slate-400 invalid:border-pink-500 invalid:text-pink-600 hover:ring-1 hover:ring-black focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:cursor-not-allowed disabled:text-gray-500 disabled:shadow-none disabled:hover:ring-0 dark:text-white dark:placeholder-slate-300 dark:hover:ring-white dark:disabled:text-gray-400">
                  <option className="bg-black" selected>
                    Choose a Role
                  </option>
                  <option className="bg-black" value="admin">
                    Admin
                  </option>
                  <option className="bg-black" value="user">
                    User
                  </option>
                </select>
              </div>
              <Button
                type="submit"
                size="large"
                className="bg-gradient-to-r from-[#619BFD] to-[#A17CF9] text-white transition-opacity duration-150 ease-linear hover:opacity-80"
              >
                Edit
              </Button>
            </div>
          </form>
        )}
      </Container>
    </section>
  );
};

export default Dashboard;

import Box from "@ui/Box";
import Container from "@ui/Container";
import Grid from "@ui/Grid";
import Typography from "@ui/Typography";
import UserTable from "../UserTable";
import React from "react";
import ContactMessage from "./ContactMessage";

const Dashboard = () => {
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
        <UserTable />
      </Container>
    </section>
  );
};

export default Dashboard;

import BackLayout from "@admin/common/Layout/BackLayout";
import Dashboard from "@admin/components/Dashboard";
import BaseSeo from "@components/BaseSeo";
import { getAllUserContact } from "@lib/fetchApi/get-all-contact-user";
import { InferGetStaticPropsType } from "next";
import React from "react";

export const getStaticProps = async () => {
  const usersContact: any = await getAllUserContact();
  return {
    props: {
      contactMessages: usersContact,
    },
    revalidate: 60,
  };
};

const AdimnPage = ({
  contactMessages,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <BackLayout>
      <>
        <BaseSeo title="Admin" description="Admin Page :SEO : Title" />
        <Dashboard messages={contactMessages} />
      </>
    </BackLayout>
  );
};

export default AdimnPage;

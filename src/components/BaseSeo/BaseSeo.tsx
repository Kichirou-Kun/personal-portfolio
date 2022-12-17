import React from "react";
import { NextSeo } from "next-seo";
import { APP_NAME } from "@config/app";
interface Props {
  title?: string;
  description?: string;
}
const BaseSeo = ({ title, description }: Props) => {
  const seoTitle = title ? `${title} - ${APP_NAME}` : APP_NAME;
  const seoDescription = description || "";
  return (
    <NextSeo
      title={seoTitle}
      description={seoDescription}
      openGraph={{
        title: seoTitle,
        description: seoDescription,
        siteName: APP_NAME,
      }}
    />
  );
};

export default BaseSeo;

import BackLayout from "@admin/common/Layout/BackLayout";
import Dashboard from "@admin/components/Dashboard";
import BaseSeo from "@components/BaseSeo";
import React from "react";

const AdimnPage = () => {
  return (
    <BackLayout>
      <>
        <BaseSeo title="Admin" description="Admin Page :SEO : Title" />
        <Dashboard />
      </>
    </BackLayout>
  );
};

export default AdimnPage;

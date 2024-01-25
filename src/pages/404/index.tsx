import NotFoundBlock from "@/components/NotFoundBlock";
import React from "react";
import Breadcrumb from '@components/ui/breadcrumb';

const NotFound: React.FC = () => {
  return (
    <div className="norfound_container container">
      <Breadcrumb />
      <NotFoundBlock />
    </div>
  );
};

export default NotFound;

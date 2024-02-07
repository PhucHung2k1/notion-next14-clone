"use client";

import Image from "next/image";
import React from "react";

const DocumentsPage = () => {
  return (
    <div className="h-full flex items-center flex-col justify-center space-y-4">
      <Image
        src="/empty.png"
        height={300}
        width={300}
        alt="Empty"
        className="dark:hidden"
      />
      <Image
        src="/empty-dark.png"
        height={300}
        width={300}
        alt="Empty"
        className="hidden dark:block"
      />
    </div>
  );
};

export default DocumentsPage;

"use client"; // jika ini client component

import React from "react";
import dynamic from "next/dynamic";
import { AudioProvider } from "@/context/AudioContext";
import { CoverProvider } from "@/context/CoverContext";

const templatesMap = {
  "aleiva-flowable": dynamic(() => import("../../../components/templates/AleivaFlowable")),
  "test-template": dynamic(() => import("../../../components/templates/TestTemplate")),
} as const;

interface TemplatePageProps {
  params: Promise<{ templateName: string }>;
}

export default function TemplatePage({ params }: TemplatePageProps) {
  // Gunakan React.use() untuk unwrap Promise params
  const unwrappedParams = React.use(params);
  const { templateName } = unwrappedParams;

  if (!templateName || !(templateName in templatesMap)) {
    return <div>Template not found: {templateName}</div>;
  }

  const TemplateComponent = templatesMap[templateName as keyof typeof templatesMap];

  return (
    <CoverProvider>
      <AudioProvider>
        <TemplateComponent />
      </AudioProvider>
    </CoverProvider>
  );
}

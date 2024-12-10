"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Header } from "./Header";
import { BackButton } from "./BackButton";

type FormCardWrapperProps = {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
};

export const FormCardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
}: FormCardWrapperProps) => {
  return (
    <Card className="w-[350px ] min-w-[270px] pt-6 shadow-md dark:border-gray-100 md:w-[500px]">
      <Header label={headerLabel} />

      <CardContent>{children}</CardContent>
      <CardFooter>
        <BackButton label={backButtonLabel} href={backButtonHref} />
      </CardFooter>
    </Card>
  );
};

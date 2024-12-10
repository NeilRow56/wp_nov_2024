"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import React, { useTransition } from "react";

import { Calendar } from "@/components/ui/calendar";

// import { passwordStrength } from 'check-password-strength'
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Button } from "../ui/button";

import { Loader2, LogIn } from "lucide-react";

import { CardWrapper } from "./CardWrapper";
import { ManagerSchema } from "@/lib/validation";

import { DatePickerExtra } from "../DatePickerExtra";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";

export const ManagerForm = () => {
  const [date, setDate] = React.useState<Date>();

  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof ManagerSchema>>({
    resolver: zodResolver(ManagerSchema),
    defaultValues: {
      username: "",
      password: "",
      email: "",
      firstName: "",
      lastName: "",
      phone: "",
      birthday: new Date(),
      security_emails: true,
    },
  });
  const onSubmit = (values: z.infer<typeof ManagerSchema>) => {
    console.log(values);
  };

  return (
    <div className="max-auto mb-0 mt-8 flex w-full flex-col">
      <CardWrapper
        headerLabel="Enter details to create an account"
        backButtonLabel=""
        backButtonHref=""
      >
        <Form {...form}>
          <form
            className="gap-3 space-y-6"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <div className="grid gap-3 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex w-full">Username</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="John56 "
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex w-full">Password</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="***** "
                        type="password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex w-full">First Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="John "
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex w-full">Last Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="Doe"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex w-full">Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="john.doe@example.com"
                        type="email"
                        // suffix={<MailIcon />}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex w-full">Phone</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="07887123456"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="birthday"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <Label>Birthday</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <DatePickerExtra
                            date={
                              field.value ? new Date(field.value) : undefined
                            }
                            setDate={(date) => {
                              // Use field.onChange to update the form state
                              if (date) {
                                field.onChange(date);
                              }
                            }}
                            endYear={2190}
                          />
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    {/* <FormDescription>
                        Your date of birth is used to calculate your age.
                      </FormDescription> */}

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="security_emails"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                      <FormLabel className="text-base">
                        Security emails
                      </FormLabel>
                      <FormDescription>
                        Receive emails about your account security.
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        // disabled
                        // aria-readonly
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div className="flex w-full justify-center">
              <Button
                type="submit"
                className="max-w-[150px]"
                disabled={isPending}
              >
                {isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4" /> Processing
                  </>
                ) : (
                  <>
                    <LogIn className="mr-2 h-4 w-4" /> Create
                  </>
                )}
              </Button>
            </div>
          </form>
        </Form>
      </CardWrapper>
    </div>
  );
};

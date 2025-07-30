"use client";

import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { useTransition } from "react";
import { registerForEvent } from "@/app/actions";
import { toast } from "sonner";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { InfoCircledIcon } from "@radix-ui/react-icons";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "Must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Must be at least 2 characters.",
  }),
  email: z.string().email(),
  phone: z.string().min(10, {
    message: "Invalid phone number.",
  }),
  company: z.string().min(2, {
    message: "Must be at least 2 characters.",
  }),
  title: z.string().min(2, {
    message: "Must be at least 2 characters.",
  }),
});

export default function ReactHookForm() {
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      title: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    startTransition(async () => {
      try {
        // Always set photoRelease to true
        const registrationData = {
          ...values,
          photoRelease: true,
        };

        const result = await registerForEvent(registrationData);

        if (result.success) {
          form.reset();
          toast.success("Registration successful!", {
            description:
              "You will receive an email with more information shortly. Our accounts department will contact you regarding the invoice for your ticket purchase.",
            duration: 10000, // Display for 10 seconds
          });
        } else {
          toast.error(result.error || "Registration failed. Please try again.");
        }
      } catch (error) {
        console.error("Failed to register:", error);
        toast.error("Registration failed. Please try again.");
      }
    });
  }

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-foreground text-balance">
          Register for the Course
        </h2>
        <p className="text-lg text-muted-foreground text-pretty">
          Secure your spot in this comprehensive training experience
        </p>
      </div>

      <Alert className="border-electricGreen/20 bg-electricGreen/5">
        <InfoCircledIcon className="h-4 w-4 text-electricGreen" />
        <AlertTitle className="text-electricGreen font-semibold">
          Course Information
        </AlertTitle>
        <AlertDescription className="text-muted-foreground">
          September 23rd • 9 AM - 5 PM • WAFIOS Machinery Corporation, Branford,
          CT
        </AlertDescription>
      </Alert>

      <Card className="card-enhanced p-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-foreground">
                      First Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your first name"
                        className="h-11 focus:ring-2 focus:ring-brand-500"
                        {...field}
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
                    <FormLabel className="text-sm font-medium text-foreground">
                      Last Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your last name"
                        className="h-11 focus:ring-2 focus:ring-brand-500"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-foreground">
                      Email Address
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="your.email@company.com"
                        className="h-11 focus:ring-2 focus:ring-brand-500"
                        {...field}
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
                    <FormLabel className="text-sm font-medium text-foreground">
                      Phone Number
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        placeholder="(555) 123-4567"
                        className="h-11 focus:ring-2 focus:ring-brand-500"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-foreground">
                      Company Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your company name"
                        className="h-11 focus:ring-2 focus:ring-brand-500"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-foreground">
                      Job Title
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your job title"
                        className="h-11 focus:ring-2 focus:ring-brand-500"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="bg-muted/30 border border-border/50 rounded-lg p-4">
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-foreground">
                  Photo Release Agreement
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  By registering, you automatically consent to the use of
                  photographs taken during the training course for marketing and
                  educational purposes. If you have concerns, please contact us
                  before the event.
                </p>
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <Button
                type="submit"
                disabled={isPending}
                className="w-full h-12 bg-brand-500 hover:bg-brand-600 text-white font-semibold text-base rounded-lg transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50"
              >
                {isPending ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing Registration...
                  </>
                ) : (
                  "Register for Course"
                )}
              </Button>

              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  Questions? Contact{" "}
                  <a
                    href="mailto:BrianD@wafios.us"
                    className="text-brand-600 hover:text-brand-700 font-medium hover:underline transition-colors"
                  >
                    BrianD@wafios.us
                  </a>{" "}
                  or call{" "}
                  <a
                    href="tel:203-871-2072"
                    className="text-brand-600 hover:text-brand-700 font-medium hover:underline transition-colors"
                  >
                    203-871-2072
                  </a>
                </p>
              </div>
            </div>
          </form>
        </Form>
      </Card>
    </div>
  );
}

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/lRlOs5CNlxp
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export default function Component() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-foreground text-balance">
          Course Pricing
        </h2>
        <p className="text-lg text-muted-foreground text-pretty">
          Professional training investment with NESMA member benefits
        </p>
      </div>
      <div className="space-y-6">
        <Card className="card-enhanced relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-electricGreen/10 to-brand-500/10 rounded-full -translate-y-16 translate-x-16"></div>
          <CardHeader className="relative">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-3 h-3 rounded-full bg-brand-500"></div>
              <CardTitle className="text-xl">Non-NESMA Member</CardTitle>
            </div>
            <CardDescription className="text-base">
              General admission for all professionals
            </CardDescription>
          </CardHeader>
          <CardContent className="relative space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-foreground">$500</div>
                <div className="text-sm text-muted-foreground font-medium">
                  First Company Registration
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-foreground">$300</div>
                <div className="text-sm text-muted-foreground font-medium">
                  Additional Company Registrations
                </div>
              </div>
            </div>
            <div className="space-y-3 pt-4 border-t border-border/50">
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-electricGreen"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="text-sm font-medium text-foreground">
                  Lunch Provided
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-enhanced relative overflow-hidden border-brand-200 bg-gradient-to-br from-brand-50/50 to-electricGreen-50/30">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-electricGreen/20 to-brand-500/20 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute top-4 right-4 bg-electricGreen text-brand-900 text-xs font-semibold px-3 py-1 rounded-full">
            MEMBER BENEFITS
          </div>
          <CardHeader className="relative">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-3 h-3 rounded-full bg-electricGreen"></div>
              <CardTitle className="text-xl text-brand-800">
                NESMA Member
              </CardTitle>
            </div>
            <CardDescription className="text-base text-brand-700">
              Exclusive member pricing and benefits
            </CardDescription>
          </CardHeader>
          <CardContent className="relative space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-brand-800">$250</div>
                <div className="text-sm text-brand-700 font-medium">
                  First Company Registration
                </div>
                <div className="text-xs text-electricGreen font-semibold">
                  SAVE $250
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-brand-800">$150</div>
                <div className="text-sm text-brand-700 font-medium">
                  Additional Company Registrations
                </div>
                <div className="text-xs text-electricGreen font-semibold">
                  SAVE $150
                </div>
              </div>
            </div>
            <div className="space-y-3 pt-4 border-t border-brand-200">
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-electricGreen"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="text-sm font-medium text-brand-800">
                  Lunch Provided
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="bg-muted/30 border border-border/50 rounded-lg p-6">
          <div className="space-y-3 text-center">
            <h3 className="text-lg font-semibold text-foreground">
              What&apos;s Included
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <svg
                  className="w-4 h-4 text-electricGreen"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>Comprehensive training materials</span>
              </div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <svg
                  className="w-4 h-4 text-electricGreen"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>Certificate of completion</span>
              </div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <svg
                  className="w-4 h-4 text-electricGreen"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>Lunch and refreshments</span>
              </div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <svg
                  className="w-4 h-4 text-electricGreen"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>Expert instruction</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

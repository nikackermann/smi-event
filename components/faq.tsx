import { Card } from "./ui/card";
/* eslint-disable react/no-unescaped-entities */

export default function Component() {
  return (
    <div className="space-y-12">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-muted-foreground text-pretty">
          Everything you need to know about the training course
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="card-enhanced p-8">
          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-foreground">
                What is the format of the course?
              </h3>
              <div className="w-12 h-1 bg-gradient-to-r from-brand-500 to-electricGreen rounded-full"></div>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                Our Spring End Grinding Training Course is designed as a
                comprehensive theoretical learning experience focusing on
                in-depth knowledge transfer and technical understanding.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-500 mt-2.5"></div>
                  <div>
                    <span className="font-semibold text-foreground">
                      Theoretical Content:
                    </span>{" "}
                    Comprehensive coverage of spring end grinding processes,
                    machinery specifications, technology principles, and
                    automation systems.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-500 mt-2.5"></div>
                  <div>
                    <span className="font-semibold text-foreground">
                      Technical Deep-Dive:
                    </span>{" "}
                    Process parameters, influencing factors, optimization
                    strategies, and software applications.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-500 mt-2.5"></div>
                  <div>
                    <span className="font-semibold text-foreground">
                      Interactive Discussions:
                    </span>{" "}
                    Q&A sessions, case studies, and technical problem-solving
                    discussions.
                  </div>
                </li>
              </ul>
              <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                <p className="text-sm font-medium text-amber-800 mb-1">
                  Important Note:
                </p>
                <p className="text-sm text-amber-700">
                  This course will not include practical demonstrations on the
                  machine. The focus is on providing comprehensive theoretical
                  knowledge and technical understanding.
                </p>
              </div>
            </div>
          </div>
        </Card>
        <Card className="card-enhanced p-8">
          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-foreground">
                Who should attend the course?
              </h3>
              <div className="w-12 h-1 bg-gradient-to-r from-brand-500 to-electricGreen rounded-full"></div>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                The Spring End Grinding Training Course is designed to be
                relevant and valuable for all professionals involved in the
                grinding process, including:
              </p>
              <div className="grid grid-cols-1 gap-3">
                {[
                  "Operators",
                  "Engineers",
                  "Technicians",
                  "Quality Control Specialists",
                  "Production Managers",
                  "R&D Personnel",
                  "Process Improvement Specialists",
                ].map((role) => (
                  <div
                    key={role}
                    className="flex items-center gap-3 p-2 rounded-lg bg-muted/30 border border-border/50"
                  >
                    <svg
                      className="w-4 h-4 text-electricGreen flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-sm font-medium text-foreground">
                      {role}
                    </span>
                  </div>
                ))}
              </div>
              <p className="leading-relaxed text-sm">
                Whether you're hands-on with the machinery or overseeing
                operations, this course offers insights and skills that can
                enhance your understanding and contribution to the grinding
                process.
              </p>
            </div>
          </div>
        </Card>
        <Card className="card-enhanced p-8 lg:col-span-2">
          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-foreground">
                Where can I book accommodation for the course?
              </h3>
              <div className="w-12 h-1 bg-gradient-to-r from-brand-500 to-electricGreen rounded-full"></div>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p className="leading-relaxed">
                We recommend the following hotel for your convenience:
              </p>
              <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-blue-900 text-lg">
                      Holiday Inn Express
                    </h4>
                    <div className="space-y-2 text-sm text-blue-800">
                      <p>
                        <span className="font-medium">Address:</span> 309 E Main
                        St, Branford, CT
                      </p>
                      <p>
                        <span className="font-medium">Amenities:</span> Free
                        Wi-Fi, Parking
                      </p>
                      <p>
                        <span className="font-medium">Location:</span>{" "}
                        Convenient to WAFIOS facility
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h5 className="font-medium text-blue-900">
                      Booking Information
                    </h5>
                    <div className="text-sm text-blue-800 space-y-1">
                      <p>Contact the hotel directly for reservations</p>
                      <p>
                        Mention the WAFIOS training course for potential group
                        rates
                      </p>
                      <p>
                        Check hotel website for current rates and availability
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

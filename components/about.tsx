import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card } from "./ui/card";

export default function Component() {
  return (
    <div className="space-y-12">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
          About the Training Course
        </h2>
        <p className="text-lg text-muted-foreground text-pretty">
          Comprehensive professional development in spring end grinding
          technology
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="card-enhanced p-8">
          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-foreground">
                Course Overview
              </h3>
              <div className="w-12 h-1 bg-gradient-to-r from-brand-500 to-electricGreen rounded-full"></div>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                Our Spring End Grinding Training Course offers a comprehensive
                exploration into the essential aspects of spring end grinding.
                This course provides technical and in-depth knowledge on
                machinery, processes, technology, automation, and software used
                in spring end grinding.
              </p>
              <p className="leading-relaxed">
                Participants will learn about the grinding process within the
                larger context of spring manufacturing, gaining insight into the
                correlation between process parameters and influencing factors.
                This understanding is crucial for efficient process control and
                cost optimization.
              </p>
              <div className="bg-muted/30 p-4 rounded-lg border border-border/50">
                <p className="text-sm font-medium text-foreground mb-1">
                  What You&apos;ll Receive
                </p>
                <p className="text-sm text-muted-foreground">
                  Each participant receives a detailed training handout and
                  certificate of completion, ensuring you leave with valuable
                  resources and recognition of your new skills.
                </p>
              </div>
            </div>
          </div>
        </Card>
        <Card className="card-enhanced p-8">
          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-foreground">
                About the Presenter
              </h3>
              <div className="w-12 h-1 bg-gradient-to-r from-brand-500 to-electricGreen rounded-full"></div>
            </div>
            <div className="flex items-start gap-6">
              <Avatar className="h-20 w-20 overflow-hidden rounded-full ring-2 ring-border/50">
                <AvatarImage
                  src="/simon.webp"
                  className="object-cover h-full w-full"
                />
                <AvatarFallback className="text-lg font-medium">
                  SH
                </AvatarFallback>
              </Avatar>
              <div className="space-y-4 flex-1">
                <div>
                  <h4 className="text-lg font-semibold text-foreground">
                    Simon Haase
                  </h4>
                  <p className="text-sm text-brand-600 font-medium">
                    Applications Engineer
                  </p>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Simon Haase is an applications engineer for WAFIOS at the
                  facility in Branford, CT. He specializes in Spring End
                  Grinding Technology and Applications for the EV Industry.
                  Prior to moving to the U.S. in 2023, he worked six years for
                  WAFIOS in Reutlingen, Germany as the Technology Engineer for
                  the Spring End Grinding Department. He studied mechanical
                  engineering in Dresden, Germany.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

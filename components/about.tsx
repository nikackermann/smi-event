import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Card } from './ui/card';

export default function Component() {
    return (
        <div className="col-span-2 space-y-6">
            <div>
                <h2 className="text-2xl md:text-3xl font-bold">
                    About the Training Course
                </h2>
                <p className="text-muted-foreground mt-2">
                    Learn more about the Spring End Grinding Training Course.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-background p-6 rounded-lg border shadow-md">
                    <h3 className="text-xl font-bold">Course Overview</h3>
                    <p className="text-muted-foreground mt-2">
                        Our Spring End Grinding Training Course offers a
                        comprehensive exploration into the essential aspects of
                        spring end grinding. This course provides technical and
                        in-depth knowledge on machinery, processes, technology,
                        automation, and software used in spring end grinding.
                    </p>
                    <p className="text-muted-foreground mt-2">
                        Participants will learn about the grinding process
                        within the larger context of spring manufacturing,
                        gaining insight into the correlation between process
                        parameters and influencing factors. This understanding
                        is crucial for efficient process control and cost
                        optimization. Each participant will receive a detailed
                        training handout and a certificate of completion,
                        ensuring they leave with valuable resources and
                        recognition of their new skills.
                    </p>
                </Card>
                <Card className="bg-background p-6 rounded-lg border shadow-md">
                    <h3 className="text-xl font-bold">About the Presenter</h3>
                    <div className="flex items-start gap-4 mt-2">
                        <Avatar className="h-16 w-16 overflow-hidden rounded-full">
                            <AvatarImage
                                src="/simon.png"
                                className="object-cover h-full w-full"
                            />
                            <AvatarFallback>SH</AvatarFallback>
                        </Avatar>
                        <div className="space-y-2">
                            <div className="font-medium">Simon Haase</div>
                            <p className="text-muted-foreground">
                                Simon Haase is an applications engineer for
                                WAFIOS at the MTC in Mokena, Illinois. He
                                specializes in Spring End Grinding Technology
                                and Applications for the EV Industry. Prior to
                                moving to the U.S. in 2023, he worked six years
                                for WAFIOS in Reutlingen, Germany as the
                                Technology Engineer for the Spring End Grinding
                                Department. He studied mechanical engineering in
                                Dresden, Germany.
                            </p>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}

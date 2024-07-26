import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowStrokeRight } from "../../../../public/Icons";
import { Questionnaire } from "@/components/shared/questionnaire";
export const InstructionsPage = () => {
  return (
    <Questionnaire>
      <div className="md:px-10 md:mt-[76px]  w-full xl:max-w-[870px] lg:max-w-[692px] md:max-w-[680px] max-w-[361px] mx-auto px-1">
        <Card className="w-full px-4">
          <div className="max-w-[438px] md:my-[60px] my-[60px] mx-auto">
            <CardHeader>
              <CardTitle> Hi, John Doe!</CardTitle>
              <CardDescription className="md:mb-[60px] mb-[100px]">
                It's easy to get started!
              </CardDescription>
            </CardHeader>
            <CardContent>
              {[
                "Answer a few Questions",
                "Create a Profile",
                "Start Applying to Companies and Roles",
              ].map((values) => (
                <Card className="rounded-[8px] mb-10 bg-white border-none cursor-pointer">
                  <div className="flex items-center gap-2 py-[14px] pl-[26px]">
                    <ArrowStrokeRight className="h-3 w-3" />{" "}
                    <p className="text-lg font-medium ml-5">{values}</p>{" "}
                  </div>
                </Card>
              ))}
              <Button
                type="button"
                className="w-full bg-primary mb-6"
                variant="outline"
                size="sm"
              >
                Lets Get Started
              </Button>
            </CardContent>
            <CardFooter>
              <p className="text-center md:font-normal  md:text-base text-sm text-darkgrey">
                It takes less than 10 minutes and you can always make changes
                later.
              </p>
            </CardFooter>
          </div>
        </Card>
      </div>
    </Questionnaire>
  );
};

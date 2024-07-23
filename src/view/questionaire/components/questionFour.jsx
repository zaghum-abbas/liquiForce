import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import { cn } from "@/lib/utils";
const QuestionFour = ({ title, options, questionTitle, questionBody }) => {
  const [selected, setSelected] = useState(0);

  return (
    <>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>

        <p className="md:text-center text-primary font-medium mb-4 md:text-base text-sm">
          {questionTitle}
        </p>
        <p className="md:text-center text-black font-medium md:text-lg text-base md:mb-[48px] mb-10">
          {questionBody}
        </p>
      </CardHeader>
      <CardContent className="md:flex md:justify-between block">
        {options.map((item, index) => (
          <Card
            className={cn(
              "md:w-[195px] md:mb-0 mb-4 md:rounded-[8px]  rounded-[8px] md:p-4 px-4 py-3 flex md:flex-col max-md:gap-[10px] items-center md:justify-center justify-start cursor-pointer",
              selected === index ? "bg-primary" : "bg-white"
            )}
            onClick={() => setSelected(index)}
          >
            <item.icon color={selected === index ? "#7DA8FF" : "#001E54"} />

            <CardDescription
              className={cn(
                "font-medium md:mt-[16px] text-base md:text-center text-start",
                selected === index ? "text-white" : "text-black"
              )}
            >
              {item.text}
            </CardDescription>
          </Card>
        ))}
      </CardContent>
    </>
  );
};
export default QuestionFour;

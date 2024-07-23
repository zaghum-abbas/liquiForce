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
import { Checkbox } from "@/components/ui/checkbox";

const QuestionThree = ({ title, options, questionTitle, questionBody }) => {
  const [selected, setSelected] = useState([]);

  const handleCardClick = (index) => {
    if (selected.includes(index)) {
      setSelected(selected.filter((i) => i !== index));
    } else {
      setSelected([...selected, index]);
    }
  };

  return (
    <>
      <CardHeader>
        <CardTitle className="text-xl md:mb-[60px]">{title}</CardTitle>
        <p className="md:text-center text-primary font-medium mb-4 md:text-base text-sm">
          {questionTitle}
        </p>
        <p className="md:text-center text-black font-medium md:text-lg text-base md:mb-[48px] mb-10">
          {questionBody}
        </p>
      </CardHeader>
      <CardContent className="md:flex md:justify-between flex-wrap block gap-y-4">
        {options.map((item, index) => (
          <Card
            key={index}
            className={cn(
              "md:w-[299px] md:mb-0 mb-4 md:rounded-[8px] rounded-[8px] md:p-4 px-4 py-3 flex max-md:gap-[10px] items-center justify-between cursor-pointer",
              selected.includes(index)
                ? "border-2 border-secondary bg-white"
                : "bg-white"
            )}
            onClick={() => handleCardClick(index)}
          >
            <div className="flex items-center gap-[10px]">
              <Checkbox checked={selected.includes(index)} />
              <CardDescription
                className={cn(
                  "md:font-medium text-base text-start",
                  selected.includes(index) ? "text-primary" : "text-black"
                )}
              >
                {item.text}
              </CardDescription>
            </div>
            <item.icon />
          </Card>
        ))}
      </CardContent>
    </>
  );
};

export default QuestionThree;

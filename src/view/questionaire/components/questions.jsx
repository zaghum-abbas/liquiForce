import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";

const Questions = ({
  title,
  content,
  options,
  questionTitle,
  questionBody,
  isOk,
  error,
  type,
}) => {
  const [selected, setSelected] = useState();
  const [checked, setChecked] = useState([]);

  const handleClicked = (index, text) => {
    setSelected(index);
    if (text !== "") {
      isOk((prevValues) => ({
        ...prevValues,
        questionOne: text,
      }));
    }
  };

  const handleCardClick = (index) => {
    if (checked.includes(index)) {
      setChecked(checked.filter((i) => i !== index));
    } else {
      setChecked([...checked, index]);
    }
  };
  return (
    <>
      <CardHeader>
        <CardTitle className={cn("text-xl", !content && "md:mb-[60px]")}>
          {title}
        </CardTitle>
        {content && (
          <CardDescription
            dangerouslySetInnerHTML={{ __html: content }}
            className="md:mb-[60px] mb-10 text-sm"
          />
        )}
        <p className="md:text-center text-primary font-medium mb-4 md:text-base text-sm">
          {questionTitle}
        </p>
        <p className="md:text-center text-black font-medium md:text-lg text-base md:mb-[48px] mb-10">
          {questionBody}
        </p>
      </CardHeader>

      <CardContent
        className={cn(
          "md:flex md:justify-between block",
          questionTitle === "Question 1" ? "" : "flex-wrap block gap-y-4"
        )}
      >
        {options.map((item, index) => (
          <Card
            key={index}
            className={cn(
              "md:mb-0 mb-4 md:rounded-[8px] rounded-[8px] md:p-4 px-4 py-3 flex  max-md:gap-[10px] items-center  justify-start cursor-pointer",
              questionTitle === "Question 2" || questionTitle === "Question 3"
                ? "md:w-[300px]  md:flex-col md:justify-center"
                : "md:w-[195px] md:flex-col md:justify-center",

              type === "card" && selected === index
                ? "bg-primary"
                : checked.includes(index)
                ? "border-2 border-secondary bg-white"
                : "bg-white"
            )}
            onClick={() => handleClicked(index, item.text)}
          >
            {type === "card" ? (
              <React.Fragment>
                <item.icon color={selected === index ? "#7DA8FF" : "#001E54"} />
                <CardDescription
                  className={cn(
                    "font-medium md:mt-[16px] text-base md:text-center text-start",
                    selected === index ? "text-white" : "text-black"
                  )}
                >
                  {item.text}
                </CardDescription>
              </React.Fragment>
            ) : (
              <div
                className="flex justify-between w-full"
                onClick={() => handleCardClick(index)}
              >
                <div className="flex items-center gap-[10px]">
                  <Checkbox checked={checked.includes(index)} />
                  <CardDescription
                    className={cn(
                      "md:font-medium text-base text-start",
                      checked.includes(index) ? "text-primary" : "text-black"
                    )}
                  >
                    {item.text}
                  </CardDescription>
                </div>
                <item.icon />
              </div>
            )}
          </Card>
        ))}
      </CardContent>
      <p className="text-red-500 text-sm mt-2 md:text-center">{error}</p>
    </>
  );
};
export default Questions;

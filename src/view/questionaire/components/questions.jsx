import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils/utils";
import { Checkbox } from "@/components/ui/checkbox";

const Questions = ({
  title,
  content,
  options,
  questionTitle,
  questionBody,
  updateValues,
  error,
  type,
  values,
  clearError,
}) => {
  const [selected, setSelected] = useState(values[questionTitle]);
  const [checked, setChecked] = useState([]);

  useEffect(() => {
    if (type === "checkboxes" && values[questionTitle]) {
      setChecked(values[questionTitle]);
    }
  }, [values, questionTitle, type]);

  const handleClicked = (index, text) => {
    setSelected(text);
    if (text !== "") {
      clearError();
      updateValues(questionTitle, text);
    }
  };

  const handleCardClick = (text) => {
    let newChecked;
    if (checked.includes(text)) {
      newChecked = checked.filter((i) => i !== text);
    } else {
      newChecked = [...checked, text];
    }
    clearError();
    setChecked(newChecked);
    updateValues(questionTitle, newChecked);
  };

  return (
    <div className="relative">
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
              type === "card" && selected === item.text
                ? "bg-primary"
                : checked.includes(item.text)
                ? "border-2 border-secondary bg-white"
                : "bg-white"
            )}
            onClick={() =>
              type === "card"
                ? handleClicked(index, item.text)
                : handleCardClick(item.text)
            }
          >
            {type === "card" ? (
              <React.Fragment>
                <item.icon
                  color={selected === item.text ? "#7DA8FF" : "#001E54"}
                />
                <CardDescription
                  className={cn(
                    "font-medium md:mt-[16px] text-base md:text-center text-start",
                    selected === item.text ? "text-white" : "text-black"
                  )}
                >
                  {item.text}
                </CardDescription>
              </React.Fragment>
            ) : (
              <div className="flex justify-between w-full">
                <div className="flex items-center gap-[10px]">
                  <Checkbox checked={checked.includes(item.text)} />
                  <CardDescription className="font-medium text-base text-black">
                    {item.text}
                  </CardDescription>
                </div>
                <item.icon color={"#001E54"} />
              </div>
            )}
          </Card>
        ))}
      </CardContent>
      <div className="text-red-500 text-sm mx-auto inset-x-0  max-w-max mt-2 absolute">
        {error}
      </div>
    </div>
  );
};

export default Questions;

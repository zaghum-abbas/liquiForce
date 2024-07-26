import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { basicInfoForm } from "../data";
export const BasicInfo = () => {
  return (
    <>
      <h1 className="text-xl font-bold mb-4">Let's Get Started!</h1>
      <p className="mb-6">Start your profile by telling us about you.</p>

      {basicInfoForm.map((step, stepIndex) => (
        <div key={stepIndex} className="mb-8">
          <h2 className="text-lg font-semibold mb-2">{step.inputLabel}</h2>
          <div className="grid grid-cols-12 gap-4">
            {step.inputs.map((input, inputIndex) => (
              <div
                key={inputIndex}
                className={` ${
                  inputIndex === step.inputs.length - 1
                    ? "max-md:col-span-12 col-span-6"
                    : "col-span-6"
                } mb-4`}
              >
                {input.type === "select" ? (
                  <>
                    <Label htmlFor={input.label}>{input.label}</Label>

                    <Select>
                      <SelectTrigger>
                        <SelectValue
                          placeholder={`Select your  ${input.label}`}
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Fruits</SelectLabel>

                          {input.options.map((items) => (
                            <SelectItem value={items}>{items}</SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </>
                ) : (
                  <>
                    <Label htmlFor={input.label}>{input.label}</Label>
                    <Input
                      type={input.type}
                      placeholder={`Enter your ${input.label}`}
                    />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

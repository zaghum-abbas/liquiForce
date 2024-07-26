import { BasicInfo } from "./components/basicInfo";
import { Personalize } from "./components/Personalize";
import { PreviewAndSubmit } from "./components/Preview&Submit";
import { ProfileCreation } from "./components/profilecreation";
import { WorkSetting } from "./components/workSetting";

export const components = {
  1: BasicInfo,
  2: ProfileCreation,
  3: WorkSetting,
  4: Personalize,
  5: PreviewAndSubmit,
};

export const basicInfoForm = [
  {
    inputLabel: "Personal",
    inputs: [
      { label: "First Name", type: "text" },
      { label: "Last Name", type: "text" },
      { label: "Date of Birth", type: "date" },
      { label: "Phone Number", type: "number" },
      { label: "Email", type: "email" },
    ],
  },
  {
    inputLabel: "Address",
    inputs: [
      { label: "Address Line 1", type: "text" },
      { label: "Address Line 2", type: "text" },
      { label: "Country", type: "select", options: ["USA", "Canada", "UK"] },
      {
        label: "City",
        type: "select",
        options: ["New York", "Los Angeles", "Chicago"],
      },
      {
        label: "State / Province",
        type: "select",
        options: ["New York", "California", "Illinois"],
      },
      { label: "Zip / Postal Code", type: "text" },
    ],
  },
];

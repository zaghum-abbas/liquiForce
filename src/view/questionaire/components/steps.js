import {
  CalculatorIcon,
  ExecutiveIcon,
  FreelanceIcon,
  HumanResourcesIcon,
  IncomeIcon,
  ManageIcon,
  Management,
  OperationIcon,
  SalesIcon,
  SkilledIcon,
  TeamIcon,
  TimeIcon,
  TrainedWorkerIcon,
  TrendingIcon,
} from "../../../../public/Icons";
import Questions from "./questions";

export const steps = [
  {
    id: 2,
    title: "First, let's answer a few quick questions.",
    content: `This will help us get you set up for success and take full advantage of the ways you can work with <span class="text-secondary">LiquiFORCE</span>. We won't share your answers with anyone.`,
    questionTitle: "Question 1",
    questionBody: "How do you want to work on the LiquiFORCE platform?",
    options: [
      {
        icon: IncomeIcon,
        text: "Supplement Income through Part-time work",
      },
      {
        icon: TrendingIcon,
        text: "Do Occasional Projects and Gigs",
      },
      {
        icon: TimeIcon,
        text: "Full-time Freelancer",
      },
    ],
    type: "card",
    component: Questions,
  },

  {
    id: 3,
    title: "Let's understand your experience level",
    questionTitle: "Question 2",
    questionBody:
      "Which of the following best describes your experience level?",
    options: [
      {
        icon: TrainedWorkerIcon,
        text: "Trained Worker",
      },
      {
        icon: SkilledIcon,
        text: "Skilled Professional",
      },
      {
        icon: Management,
        text: "Senior Management",
      },
      {
        icon: ExecutiveIcon,
        text: "C-Suite Executive",
      },
    ],
    type: "card",
    component: Questions,
  },
  {
    id: 4,
    title: "Great! Let's keep going, we're almost there",
    questionTitle: "Question 3",
    questionBody:
      "Which of the following represents your industry experience and interest for work? Select all that apply.",
    type: "checkboxes",
    options: [
      {
        text: "Administration / Operations",
        value: "Administration / Operations",
        icon: OperationIcon,
      },
      {
        text: "Finance & Accounting",
        value: "Finance & Accounting",
        icon: CalculatorIcon,
      },
      {
        text: "Human Resources",
        value: "Human Resources",
        icon: HumanResourcesIcon,
      },
      {
        text: "Sales",
        value: "Sales",
        icon: SalesIcon,
      },
      {
        text: "Marketing & PR",
        value: "Marketing & PR",
        icon: OperationIcon,
      },
      {
        text: "Learning & Development",
        value: "Learning & Development",
        icon: CalculatorIcon,
      },
      {
        text: "XR & Metaverse",
        value: "XR & Metaverse",
        icon: HumanResourcesIcon,
      },
      {
        text: "Information Technology (IT)",
        value: "Information Technology (IT)",
        icon: SalesIcon,
      },
      {
        text: "Risk & Compliance",
        value: "Risk & Compliance",
        icon: OperationIcon,
      },
      {
        text: "Data & Analytics",
        value: "Data & Analytics",
        icon: CalculatorIcon,
      },
      {
        text: "Cyber Security",
        value: "Cyber Security",
        icon: HumanResourcesIcon,
      },
      {
        text: "Hospitality",
        value: "Hospitality",
        icon: SalesIcon,
      },
      {
        text: "Retail & Leisure",
        value: "Retail & Leisure",
        icon: SalesIcon,
      },
      {
        text: "Charitable Organizations",
        value: "Charitable Organizations",
        icon: OperationIcon,
      },
      {
        text: "Government",
        value: "Government",
        icon: CalculatorIcon,
      },
      {
        text: "High-Tech",
        value: "High-Tech",
        icon: HumanResourcesIcon,
      },
      {
        text: "Start-ups",
        value: "Start-ups",
        icon: SalesIcon,
      },
    ],
    component: Questions,
  },
  {
    id: 5,
    title: "And now, our final question for you",
    questionTitle: "Question 4",
    questionBody: "How would you like to collaborate through LiquiFORCE?",
    options: [
      {
        icon: FreelanceIcon,
        text: "Freelance",
      },
      {
        icon: TeamIcon,
        text: "Team (through a LiquiFORCE company)",
      },
      {
        icon: ManageIcon,
        text: "Create & Manage My own Fractional Company or Offering.",
      },
    ],
    type: "card",
    component: Questions,
  },
];

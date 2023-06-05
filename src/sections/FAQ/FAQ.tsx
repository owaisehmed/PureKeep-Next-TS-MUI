import { FC } from "react";
import { AccordionDetails, AccordionSummary } from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import {
  CustomAccordion,
  FAQMainWrapper,
  FaqAnswer,
  FaqQuestion,
  FaqSubTitle,
  FaqTitle,
} from "./FAQ.styled";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqs: FAQItem[];
}

const FAQ: FC<FAQProps> = ({ faqs }) => {
  return (
    <FAQMainWrapper>
      <FaqTitle>Frequently Asked Questions</FaqTitle>
      <FaqSubTitle>
        Read on to find answers to frequently asked questions about PureKeep
      </FaqSubTitle>
      {faqs.map((faq, index) => (
        <CustomAccordion key={index}>
          <AccordionSummary
            expandIcon={
              <AddCircleOutlineOutlinedIcon
                sx={{ width: "40px", height: "40px" }}
              />
            }
          >
            <FaqQuestion>{faq.question}</FaqQuestion>
          </AccordionSummary>
          <AccordionDetails>
            <FaqAnswer>{faq.answer}</FaqAnswer>
          </AccordionDetails>
        </CustomAccordion>
      ))}
    </FAQMainWrapper>
  );
};

export default FAQ;

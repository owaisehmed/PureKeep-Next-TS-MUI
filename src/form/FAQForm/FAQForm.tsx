import { FC } from "react";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createData } from "../../redux/faqSlice";
import CustomButton from "../../components/CustomButton/CustomButton";
import { FormWrapper } from "./FAQForm.styled";

interface FormData {
  question: string;
  answer: string;
}

const FAQForm: FC = ({}) => {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const dispatch = useDispatch();

  const handleFormSubmit = (data: FormData) => {
    dispatch(createData({ id: Date.now(), ...data }));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <FormWrapper>
        <TextField required label="Question" {...register("question")} />
        <TextField required label="Answer" {...register("answer")} />
        <CustomButton type="submit" text="Submit" />
      </FormWrapper>
    </form>
  );
};

export default FAQForm;

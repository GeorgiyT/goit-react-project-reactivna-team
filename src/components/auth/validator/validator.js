import * as yup from "yup";

let schema = yup.object().shape({
  username: yup.string().min(3, "Минимум 3 символа!").max(50, "Слишком длинный!"),
  email: yup.string().min(3, "Минимум 3 символа!").max(50, "Слишком длинный!").required("Обязательно"),
  password: yup.string().min(7, "Минимум 7 символов!").max(50, "Слишком длинный!").required("Обязательно")
});

export default schema;

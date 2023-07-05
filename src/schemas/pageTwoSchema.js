import * as Yup from "yup";

export const pageTwoSchema = Yup.object().shape({
   fullName: Yup.string().min(4, "Full name must be 4 characters at least").required("se necesita el nombre completo"),
   tel: Yup.number().min(10).max(12).required("se necesita un numero de minimo 10 digitos"),
   
});
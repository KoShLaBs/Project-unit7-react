import * as Yup from "yup";
export const pageOneSchema = Yup.object().shape({
    email: Yup.string().email("dame un email valido").required("se necesira un correo"),
    });

pageOneSchema
  .isValid({
    email: 'eric.cartman@southpark.com',
  })
  .then((valid) => {
    console.log(valid); // true
  });
pageOneSchema
  .isValid({
    email: 'not.a.valid.email',
  })
  .then((valid) => {
    console.log(valid); // false
  });

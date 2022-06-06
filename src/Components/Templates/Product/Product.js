import { ProductIcon } from "../../../assets/images/Iocns";
import { SELECT, STRING } from "../../Modal/InputTypes";

export const ProductTamplate = {
  text: "Маъмурий иш",
  path: "/admin/product",
  icon: "ProductIcon",
  isOpenModal: false,
  modal: {
    width: 500,
  },
  form: [
    {
      grid: {
        columns: "repeat(4, 1fr)",
        rows: ".2fr .2fr",
      },
      inputs: [
        {
          name: "name",
          type: STRING,
          placeholder: "Name",
          gridColumn: "1 / 4",
        },
        {
          name: "select",
          type: SELECT,
          placeholder: "Kategoriya",
        },
      ],
    },
  ],
  columns: [
    {
      text: "№",
    },
    {
      text: "Nomi",
    },
    {
      text: "Kategoriya",
    },

    {
      text: "Action",
    },
  ],
};

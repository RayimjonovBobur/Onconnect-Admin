import { Base } from "../../../assets/images/Iocns";
import { STRING } from "../../Modal/InputTypes";


export const BasicTemplate = {
  text: "Руйхатга олиш",
  path: "/admin",
  icon: "Base",
  isOpenModal: false,
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
          gridColumn: "1 / 3",
        },
        {
          name: "last",
          type: STRING,
          placeholder: "Last",
          gridColumn: "3 / 5",
        },
        {
          name: "handle",
          type: STRING,
          placeholder: "Handle",
          gridColumn: "1 / 5",
          gridRow: "2 / 2",
        },
      ],
    },
  ],

  columns: [
    {
      text: "#",
    },
    {
      text: "First",
    },
    {
      text: "Last",
    },
    {
      text: "Handle",
    },
    {
      text: "Action",
    },
  ],
};

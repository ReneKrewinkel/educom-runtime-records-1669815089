import "../src/resources/styles/main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faShoppingCart,
  faFloppyDisk,
  faArrowRightLong,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

library.add(fab, faShoppingCart, faFloppyDisk, faArrowRightLong, faTrash);
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

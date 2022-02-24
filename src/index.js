import { registerBlockType } from "@wordpress/blocks";

import edit from "./edit";
import save from "./save";

import "./style.scss";

registerBlockType("mhm/link-404", {
    edit,
    save,
});

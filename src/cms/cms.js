import CMS from "netlify-cms";

import HomePagePreview from "./preview-templates/HomePagePreview";
import AboutPagePreview from "./preview-templates/AboutPagePreview";
import ContactPagePreview from "./preview-templates/ContactPagePreview";

CMS.registerPreviewTemplate("homepage", HomePagePreview);
CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("contact", ContactPagePreview);

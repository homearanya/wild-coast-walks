import CMS from "netlify-cms";

import HomePagePreview from "./preview-templates/HomePagePreview";
import AboutPagePreview from "./preview-templates/AboutPagePreview";
import ContactPagePreview from "./preview-templates/ContactPagePreview";
import TourCalendarPagePreview from "./preview-templates/TourCalendarPagePreview";

CMS.registerPreviewTemplate("homepage", HomePagePreview);
CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("contact", ContactPagePreview);
CMS.registerPreviewTemplate("tourcalendar", TourCalendarPagePreview);

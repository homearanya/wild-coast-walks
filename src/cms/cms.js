import CMS from "netlify-cms";

import { RelationBisControl, RelationBisPreview } from "./widgets/RelationBis";

CMS.registerWidget("relationBis", RelationBisControl, RelationBisPreview);

import CMS from "netlify-cms";

import RelationBisControl from "./widgets/RelationBisControl";
import RelationBisPreview from "./widgets/RelationBisPreview";

CMS.registerWidget("relationbis", RelationBisControl, RelationBisPreview);

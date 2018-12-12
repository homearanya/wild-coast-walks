import CMS from "netlify-cms";

import RelationBisControl from "./widgets/RelationBisControl";
import RelationBisPreview from "./widgets/RelationBisPreview";

CMS.registerWidget("relationBis", RelationBisControl, RelationBisPreview);

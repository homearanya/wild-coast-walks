import CMS from "netlify-cms";

import RelationBisControl from "./widgets/RelationBisControl";
import RelationBisPreview from "./widgets/RelationBisPreview";
import Se;ectBisControl from "./widgets/SelectBisControl";
import SelectBisPreview from "./widgets/SelectBisPreview";

CMS.registerWidget("relationbis", RelationBisControl, RelationBisPreview);
CMS.registerWidget("selectbis", SelectBisControl, SelectBisPreview);

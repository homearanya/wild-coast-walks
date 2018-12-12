import React from "react";
import PropTypes from "prop-types";
import { WidgetPreviewContainer } from "netlify-cms-ui-default";

const RelationBisPreview = ({ value }) => (
  <WidgetPreviewContainer>{value}</WidgetPreviewContainer>
);

RelationBisPreview.propTypes = {
  value: PropTypes.node
};

export default RelationBisPreview;

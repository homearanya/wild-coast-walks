import PropTypes from "prop-types";
import React from "react";
import { WidgetPreviewContainer } from "netlify-cms-ui-default";

const SelectBisPreview = ({ value }) => (
  <WidgetPreviewContainer>
    {value ? value.toString() : null}
  </WidgetPreviewContainer>
);

SelectBisPreview.propTypes = {
  value: PropTypes.string
};

export default SelectBisPreview;

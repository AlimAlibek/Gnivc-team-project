import React from "react";
import Select from "@ff/ui-kit/lib/Select";
import TextFields from "../../../../../models/interfaces/TextFields";

const Responsible: React.FC<TextFields> = ({ isDisbled }) => (
  <Select
    label="Ответственный"
    options={[{ key: 1, value: "first", label: "Значение первое" }]}
    fullWidth
    floatingLabel
    disabled={isDisbled}
    showSearch
  />
);
export default Responsible;

import React, { useEffect, useState } from "react";

import { types } from "../../utils/bookTypes";

import Select from "react-select";
import { ComboContainer } from "./style";

export default function SingleSelect() {
  const [isClearable, setIsClearable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isRtl, setIsRtl] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [options, setOptions] = useState([{}]);

  let arrayOptions = [{ value: "", label: "Search for other books" }];
  useEffect(() => {
    types.forEach((item) => {
      arrayOptions.push({ value: item, label: item });
    });
    setOptions(arrayOptions);
  });

  const customStyles = {
    control: () => ({
      width: 500,
      height: 65,
    }),
  };

  console.log(options);

  return (
    <ComboContainer>
      {options && options.length > 1 && (
        <Select isSearchable={true} options={options} />
      )}
    </ComboContainer>
  );
}

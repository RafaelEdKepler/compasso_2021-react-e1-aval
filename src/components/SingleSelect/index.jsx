import React, { useEffect, useState } from "react";

import { types } from "../../utils/bookTypes";

import Select from "react-select";
import { ComboContainer, Container } from "./style";
import useBook from "../../hooks/useBook";
import { useLocation } from "react-router";

export default function SingleSelect() {
  const [options, setOptions] = useState([{}]);
  const [selectedOption, setSelectedOption] = useState("");

  const { searchBooksByType } = useBook();

  const location = useLocation();

  useEffect(() => {
    if (options.length <= 1) {
      setOptions(
        types.map((item) => {
          return { value: item, label: item };
        })
      );
    }
  }, [types]);

  useEffect(() => {
    if (sessionStorage.getItem("selectedOption") && !selectedOption) {
      setSelectedOption(JSON.parse(sessionStorage.getItem("selectedOption")));
    }

    if (!location.pathname.includes("search")) {
      if (sessionStorage.getItem("selectedOption")) {
        sessionStorage.removeItem("selectedOption");
      }
    }
  });

  const customStyles = {
    control: (provided) => ({
      ...provided,
      background: "#fff",
      borderColor: "#9e9e9e",
      minHeight: "30px",
      height: "30px",
      width: "300px",
    }),
  };

  function handleChange(option) {
    if (!location.pathname.includes("/search")) {
      sessionStorage.setItem("selectedOption", JSON.stringify(option));
    }
    searchBooksByType(option.value);
    setSelectedOption(option);
  }

  return (
    <Container>
      <ComboContainer>
        {options && options.length > 1 && (
          <Select
            isSearchable={true}
            options={options}
            style={customStyles}
            placeholder="Search for other books"
            value={selectedOption}
            onChange={handleChange}
          />
        )}
      </ComboContainer>
    </Container>
  );
}

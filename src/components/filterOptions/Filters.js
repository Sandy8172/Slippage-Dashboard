import * as React from "react";
import { useState } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import dayjs from "dayjs";

const Filters = () => {
  const [selectedDateRange, setSelectedDateRange] = useState([null, null]);
  const [days, setDays] = useState('');
  const [name, setName] = useState('');
  const [variant, setVariant] = useState('');
  const [type, setType] = useState('');
  const [instrument, setInstrument] = useState('');

  const handleDateChange = (newDateRange) => {
    setSelectedDateRange(newDateRange);
  };

  const formatSelectedDate = (date) => {
    return dayjs(date).format("DD/MM/YYYY");
  };

  const startingDate = selectedDateRange[0] ? formatSelectedDate(selectedDateRange[0]) : "";
  const lastDate = selectedDateRange[1] ? formatSelectedDate(selectedDateRange[1]) : "";

  console.log("from", startingDate, "to", lastDate);

  const handleDaysChange = (event) => {
    setDays(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleVariantChange = (event) => {
    setVariant(event.target.value);
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleInstrumentChange = (event) => {
    setInstrument(event.target.value);
  };

  return (
    <>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer sx={{ width: "20%" }} components={["DateRangePicker"]}>
            <DateRangePicker
              localeText={{ start: "From", end: "To" }}
              value={selectedDateRange}
              onChange={handleDateChange}
            />
          </DemoContainer>
        </LocalizationProvider>
        <FormControl sx={{ minWidth: 120 }} size="small">
          <InputLabel id="days-select-label">Days</InputLabel>
          <Select
            labelId="days-select-label"
            id="days-select"
            value={days}
            label="Days"
            onChange={handleDaysChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Monday">
              Monday
            </MenuItem>
            <MenuItem value="Tuesday">
              Tuesday
            </MenuItem>
            <MenuItem value="Wednesday">
              Wednesday
            </MenuItem>
            <MenuItem value="Thursday">
              Thursday
            </MenuItem>
            <MenuItem value="Friday">
              Friday
            </MenuItem>
            {/* Add dropdown options */}
          </Select>
        </FormControl>
        <FormControl sx={{ minWidth: 120 }} size="small">
          <InputLabel id="name-select-label">Name</InputLabel>
          <Select
            labelId="name-select-label"
            id="name-select"
            value={name}
            label="Name"
            onChange={handleNameChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {/* Add dropdown options */}
          </Select>
        </FormControl>
        {/* Add more dropdowns using the same pattern */}
        {/* Variant */}
        <FormControl sx={{ minWidth: 120 }} size="small">
          <InputLabel id="variant-select-label">Variant</InputLabel>
          <Select
            labelId="variant-select-label"
            id="variant-select"
            value={variant}
            label="Variant"
            onChange={handleVariantChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {/* Add dropdown options */}
          </Select>
        </FormControl>
        {/* Type */}
        <FormControl sx={{ minWidth: 120 }} size="small">
          <InputLabel id="type-select-label">Type</InputLabel>
          <Select
            labelId="type-select-label"
            id="type-select"
            value={type}
            label="Type"
            onChange={handleTypeChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {/* Add dropdown options */}
          </Select>
        </FormControl>
        {/* Instrument */}
        <FormControl sx={{ minWidth: 120 }} size="small">
          <InputLabel id="instrument-select-label">Instrument</InputLabel>
          <Select
            labelId="instrument-select-label"
            id="instrument-select"
            value={instrument}
            label="Instrument"
            onChange={handleInstrumentChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {/* Add dropdown options */}
          </Select>
        </FormControl>
      </div>
    </>
  );
};

export default Filters;

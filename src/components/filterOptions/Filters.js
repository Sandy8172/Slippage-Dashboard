import * as React from "react";
import { useState } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import dayjs from "dayjs";

const Filters = () => {
  const [selectedDateRange, setSelectedDateRange] = useState([null, null]);
  const [days, setDays] = useState("");
  const [variant, setVariant] = useState("");
  const [type, setType] = useState("");
  const [instrument, setInstrument] = useState("");
  const [region, setRegion] = useState("");
  const [cluster, setCluster] = useState("");
  const [selectedName, setSelectedName] = useState(null);


  const handleDateChange = (newDateRange) => {
    setSelectedDateRange(newDateRange);
  };

  const formatSelectedDate = (date) => {
    return dayjs(date).format("DD/MM/YYYY");
  };

  const startingDate = selectedDateRange[0]
    ? formatSelectedDate(selectedDateRange[0])
    : "";
  const lastDate = selectedDateRange[1]
    ? formatSelectedDate(selectedDateRange[1])
    : "";

    
    const handleDaysChange = (event) => {
      setDays(event.target.value);
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
  const handleRegionChange = (event) => {
    setRegion(event.target.value);
  };
  
  const handleClusterChange = (event) => {
    setCluster(event.target.value);
  };
  
  const handleNameChange = (event, value) => {
    setSelectedName(value);
  };
  


  console.log("from", startingDate, "to", lastDate);
  console.log("selectedName--", selectedName?.label);
  console.log("instrumen--", instrument);
  console.log("region--", region);
  console.log("cluster--", cluster);
  console.log("type--", type);
  console.log("days--", days);

  const names = [
    { label: "Tarun" },
    { label: "Manni" },
    { label: "Tanmay" },
    { label: "Piyush" },
    { label: "Aman" },
    { label: "Hansraj" },
    { label: "Pushpendr" },
    { label: "Ravleen" },
    { label: "Keerti" },
    { label: "Himanshu" },
    { label: "Yashveer" },
    { label: "Shivam" },
    { label: "Nishant" },
    { label: "Umesh" },
    { label: "Puneet" },
    { label: "Mudit" },
    { label: "Sumit" },
    { label: "Hasan" },
    { label: "Dinesh" },
  ];

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.2)",
          width:"90%",
          borderRadius:"0.5rem",
          margin:"1rem auto",
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer sx={{ width: "16%",mb:1 }} components={["DateRangePicker"]}>
            <DateRangePicker
              calendars={1}
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
            <MenuItem value="Monday">Monday</MenuItem>
            <MenuItem value="Tuesday">Tuesday</MenuItem>
            <MenuItem value="Wednesday">Wednesday</MenuItem>
            <MenuItem value="Thursday">Thursday</MenuItem>
            <MenuItem value="Friday">Friday</MenuItem>
          </Select>
        </FormControl>
        {/* Name */}
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={names}
          sx={{ minWidth: 120 }}
          size="small"
          getOptionLabel={(option) => option.label}
          value={selectedName}
          onChange={handleNameChange}
          renderInput={(params) => <TextField {...params} label="Name" />}
        />
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
            <MenuItem value="Simple">Simple</MenuItem>
            <MenuItem value="Discount">Discount</MenuItem>
            <MenuItem value="SimpleDiscount">SimpleDiscount</MenuItem>
            <MenuItem value="DayWise">DayWise</MenuItem>
            <MenuItem value="DayWise_SL">DayWise_SL</MenuItem>
            <MenuItem value="Straddle_Premium">Straddle_Premium</MenuItem>
            <MenuItem value="Trailing">Trailing</MenuItem>
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
            <MenuItem value="Nifty">NIFTY</MenuItem>
            <MenuItem value="BankNifty">BANKNIFTY</MenuItem>
            <MenuItem value="FinNifty">FINNIFTY</MenuItem>
          </Select>
        </FormControl>
        {/* Region */}
        <FormControl sx={{ minWidth: 120 }} size="small">
          <InputLabel id="region-select-label">Region</InputLabel>
          <Select
            labelId="region-select-label"
            id="region-select"
            value={region}
            label="Region"
            onChange={handleRegionChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Delhi">Delhi</MenuItem>
            <MenuItem value="Gujrat">Gujrat</MenuItem>
            <MenuItem value="Delhi-XTS">Delhi-XTS</MenuItem>
          </Select>
        </FormControl>
        {/* Cluster */}
        <FormControl sx={{ minWidth: 120 }} size="small">
          <InputLabel id="Cluster-select-label">Cluster</InputLabel>
          <Select
            labelId="Cluster-select-label"
            id="Cluster-select"
            value={cluster}
            label="Cluster"
            onChange={handleClusterChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Cluster1">Cluster1</MenuItem>
            <MenuItem value="Cluster2">Cluster2</MenuItem>
            <MenuItem value="Cluster3">Cluster3</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained">View</Button>
      </div>
    </>
  );
};

export default Filters;

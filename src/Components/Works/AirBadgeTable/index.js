import React, { Fragment, Component, useEffect, useRef, useState, useReducer } from "react";
import mockBadgeData from "./mockBadgeData";
import DataPopup from "./Popup";
import "./custom.scss";

// eslint-disable-next-line complexity
const AirBadgeTable = (props) => {
  // Toggler state
  const [filtersToggleState, setFiltersToggleState] = useState(true);
  const [showMobileToggleState, setShowMobileToggleState] = useState(
    Boolean(window.matchMedia("(max-width: 768px)").matches)
  );

  // Column Selectors State
  const initialColumnsSelectorsState = {
    Name: true,
    Type: Boolean(!showMobileToggleState),
    ID: true,
    "Card Number": Boolean(!showMobileToggleState),
    Issued: Boolean(!showMobileToggleState),
    Collected: false,
    Expires: Boolean(!showMobileToggleState),
    Status: true,
    Signatory: Boolean(!showMobileToggleState),
    Company: Boolean(!showMobileToggleState),
    Parking: Boolean(!showMobileToggleState),
    Driving: Boolean(!showMobileToggleState),
  };
  const columnsSelectorsReducer = (state, action) => {
    let newState = {};
    if (action.type === "showMobile") {
      if (action.value) {
        newState = {
          Name: true,
          Type: false,
          ID: true,
          "Card Number": false,
          Issued: false,
          Collected: false,
          Expires: false,
          Status: true,
          Signatory: false,
          Company: false,
          Parking: false,
          Driving: false,
        };
      } else {
        newState = initialColumnsSelectorsState;
      }
    } else {
      newState = { ...state, [action.type]: !state[action.type] };
    }
    return newState;
  };
  const [columnsSelectorsState, columnsSelectorsDispatch] = useReducer(
    columnsSelectorsReducer,
    initialColumnsSelectorsState
  );

  // Data and filters state
  const initialcolumnFiltersState = {
    Name: false,
    Type: false,
    ID: false,
    "Card Number": false,
    Issued: false,
    Collected: false,
    Expires: false,
    Status: false,
    Signatory: false,
    Company: false,
    Parking: false,
    Driving: false,
  };
  const initialBadgeDataState = { data: mockBadgeData, filters: initialcolumnFiltersState };
  const badgeDataReducer = (state, action) => {
    const newState = { data: mockBadgeData, filters: { ...state.filters } };
    // set the filter to filters state
    if (action.type === "filter") {
      newState.filters[action.target] = action.value ? action.value : false;
    }

    //  filter data to users filters
    newState.data = newState.data.filter((data) => {
      const filterKeys = Object.keys(newState.filters);
      let toReturn = true;
      for (let i = 0; i < filterKeys.length; i++) {
        if (newState.filters[filterKeys[i]]) {
          if (toReturn)
            toReturn = data[filterKeys[i]].toLowerCase().match(newState.filters[filterKeys[i]].toLowerCase());
        }
      }
      return toReturn;
    });
    return newState;
  };

  const [badgeDataState, badgeDataDispatch] = useReducer(badgeDataReducer, initialBadgeDataState);

  // Shared styles
  const columnSelectorsStyles = {
    color: "blue",
    padding: "0 1vmin",
    cursor: "pointer",
    userSelect: "none",
  };
  const buttonStyles = {
    // background: 'linear-gradient(180deg,#006290 0%,#003852 100%)',
    // color: 'white',
    margin: "1vmin",
    padding: "1vmin",
    borderRadius: "4px",
    fontSize: "16px",
    fontWeight: 200,
    fontFamily: "Spartan",
    userSelect: "none",
  };
  const toggleStyles = {
    // background: 'linear-gradient(180deg,#006290 0%,#003852 100%)',
    background: "inherit",
    margin: "1vmin",
    padding: "0.3vmin 1vmin",
    borderRadius: "4px",
    fontSize: "16px",
    fontWeight: 200,
    fontFamily: "Spartan",
    userSelect: "none",
    // color: 'black'
    color: "#003852",
    border: "1px solid #003852",
    lineHeight: "32px",
  };

  // Global JS for Creting Table Entries
  const columnNames = Object.keys(mockBadgeData[0]);
  let activeColumnCount = 0;
  const activeRowsCount = 0;
  const filterTypes = {
    Name: "text",
    Type: "select",
    ID: "text",
    "Card Number": "text",
    Issued: "select",
    Expires: "select",
    Collected: "select",
    Status: "select",
    Signatory: "select",
    Company: "select",
    Parking: "select",
    Driving: "select",
  };

  // Create Filters
  const getFilter = (columnName = "Name") => {
    const filterType = filterTypes[columnName];
    const filterStyles = { width: "100%" };
    switch (filterType) {
      case "text":
        return (
          <input
            key={columnName}
            value={badgeDataState.filters[columnName] ? badgeDataState.filters[columnName] : ""}
            type="text"
            style={{ ...filterStyles }}
            name={columnName}
            onChange={(event) => {
              badgeDataDispatch({ type: "filter", target: columnName, value: event.target.value });
            }}
          ></input>
        );
      case "select":
        return (
          <select
            value={badgeDataState.filters[columnName]}
            key={columnName}
            style={{ ...filterStyles }}
            name={columnName}
            onChange={(event) => {
              badgeDataDispatch({
                type: "filter",
                target: columnName,
                value:
                  filterTypes[columnName] === "date select"
                    ? new Date(event.target.value).toLocaleDateString()
                    : event.target.value,
              });
            }}
          >
            <option value="" style={{ background: "blue", color: "blue" }}></option>
            {/* Get all unique values of mockData and create selectors for all unique values */}
            {/* make date objects selectable in select without calendar select */}
            {[...new Set(badgeDataState.data.map((data) => data[columnName]))].sort().map((option) => (
              <option key={`${option}`}>{option}</option>
            ))}
          </select>
        );
      default:
        console.log("error finding filter type");
    }
  };

  // Create Columns/Table Entries
  const columns = columnNames.map((columnName) => {
    if (columnsSelectorsState[columnName]) {
      activeColumnCount++;
      return (
        <Fragment key={columnName}>
          <div
            className="columnHeader"
            key={columnName}
            style={{
              gridRow: 1,
              position: "sticky",
              top: 0,
              // background: 'white',
              borderBottom: "2px solid black",
              zIndex: 1,
              // background: '#003852',
              background: "#006290",
              fontSize: "16px",
              padding: "0 1vmin",
              color: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            {columnName}
            {filtersToggleState ? (
              <div className="columnFilter" key={columnName}>
                {getFilter(columnName)}
              </div>
            ) : null}
          </div>
          {/* for each entry of the badge data, display the data from this columnName's data value */}
          {badgeDataState.data.map((data) => {
            return (
              <div
                className="data"
                key={`${Math.random()}+${data[columnName]}`}
                style={{
                  justifySelf: "center",
                  placeSelf: "center center",
                  alignSelf: "stretch",
                  borderBottom: "1px solid black",
                  padding: "1vmin",
                  width: "100%",
                }}
              >
                {/* {typeof data[columnName] === 'object' ? data[columnName].toLocaleDateString() : data[columnName]} */}
                <DataPopup data={{ columnName, dataValue: data[columnName] }}></DataPopup>
              </div>
            );
          })}
        </Fragment>
      );
    }
  });

  // post mount js
  useEffect(() => {
    // effect
    // document.getElementById('airbadgeTableContainer')?.scrollIntoView()
    return () => {
      // cleanup
    };
  }, []);

  return (
    <div
      id="airbadgeTableContainer"
      style={{
        scrollSnapAlign: "start",
        width: "100%",
        height: "100%",
        boxSizing: "border-box",
        userSelect: "none",
        position: "absolute",
        left: "0",
        right: "0",
        top: "0",
        zIndex: "2",
      }}
    >
      <div
        id="airbadgeTable"
        style={{
          color: "black",
          fontFamily: "Spartan, sans-serif",
          fontWeight: "300",
          fontSize: "16px",
          whiteSpace: "nowrap",
          background: "white",
          padding: "2vmin",
          borderRadius: "4px",
          boxShadow: "rgb(255 255 255 / 56%) 0px 0px 15px 0px",
          flex: 1,
          textAlign: "center",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          id="controlsSection"
          style={{
            background: "white",
            borderBottom: "1px solid black",
          }}
        >
          <div
            onClick={() => {
              props.tableStateSend("HIDE");
            }}
            style={{
              color: "red",
              fontSize: "4vmin",
              position: "absolute",
              background: "white",
              padding: "3vmin",
            }}
          >
            Return
          </div>
          <div
            id="controllsHeader"
            style={{
              fontWeight: 500,
              fontSize: "20px",
              color: "#003852",
              borderBottom: "1px solid #003852",
              marginBottom: "2vmin",
            }}
          >
            Controls
          </div>
          <div
            id="controlsContainer"
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
          >
            <div id="buttons" style={{ display: "inline-flex", width: "min-content" }}>
              <button
                id="addNewButton"
                style={{ ...buttonStyles }}
                onClick={() => {
                  alert("Add New Function");
                }}
              >
                Add New
              </button>
              <button
                id="optionsButton"
                style={{ ...buttonStyles }}
                onClick={() => {
                  alert("Options Function");
                }}
              >
                Options
              </button>
              <button
                id="exportButton"
                style={{ ...buttonStyles }}
                onClick={() => {
                  alert("Export Table Function");
                }}
              >
                Export Table
              </button>
            </div>
            <div id="toggles" style={{ display: "inline-flex", width: "min-content" }}>
              <div
                id="showFiltersToggle"
                onClick={() => setFiltersToggleState(!filtersToggleState)}
                style={{ ...toggleStyles, background: filtersToggleState ? "#549EFD" : "#ededed" }}
              >
                Show Filters
              </div>
              <div
                id="showMobile"
                onClick={() => {
                  // Set columns to just name id and status
                  columnsSelectorsDispatch({ type: "showMobile", value: !showMobileToggleState });
                  setShowMobileToggleState(!showMobileToggleState);
                }}
                style={{ ...toggleStyles, background: showMobileToggleState ? "#549EFD" : "#ededed" }}
              >
                Mobile View
              </div>
            </div>
            <div
              id="columnSelectorsSection"
              style={{
                fontWeight: 400,
                fontSize: "18px",
                color: "#003852",
                margin: "1.5vmin 0",
                border: "2px solid #003852",
              }}
            >
              <div style={{ borderBottom: "1px solid #003852" }}>Columns</div>
              <div
                id="columnSelectors"
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  flexWrap: "wrap",
                  fontSize: "16px",
                  fontWeight: "400",
                  padding: "2vmin",
                }}
              >
                <div
                  id="Name Selector"
                  onClick={() => columnsSelectorsDispatch({ type: "Name" })}
                  style={{ ...columnSelectorsStyles, color: columnsSelectorsState.Name ? "#00618F" : "black" }}
                >
                  {" "}
                  Name{" "}
                </div>
                <div
                  id="typeSelector"
                  onClick={() => columnsSelectorsDispatch({ type: "Type" })}
                  style={{ ...columnSelectorsStyles, color: columnsSelectorsState.Type ? "#00618F" : "black" }}
                >
                  Type
                </div>
                <div
                  id="idSelector"
                  onClick={() => columnsSelectorsDispatch({ type: "ID" })}
                  style={{ ...columnSelectorsStyles, color: columnsSelectorsState.ID ? "#00618F" : "black" }}
                >
                  ID
                </div>
                <div
                  id="cardNumberSelector"
                  onClick={() => columnsSelectorsDispatch({ type: "Card Number" })}
                  style={{
                    ...columnSelectorsStyles,
                    color: columnsSelectorsState["Card Number"] ? "#00618F" : "black",
                  }}
                >
                  Card Number
                </div>
                <div
                  id="issuedSelector"
                  onClick={() => columnsSelectorsDispatch({ type: "Issued" })}
                  style={{ ...columnSelectorsStyles, color: columnsSelectorsState.Issued ? "#00618F" : "black" }}
                >
                  Issued
                </div>
                <div
                  id="expiresSelector"
                  onClick={() => columnsSelectorsDispatch({ type: "Expires" })}
                  style={{ ...columnSelectorsStyles, color: columnsSelectorsState.Expires ? "#00618F" : "black" }}
                >
                  Expires
                </div>
                <div
                  id="collectedSelector"
                  onClick={() => columnsSelectorsDispatch({ type: "Collected" })}
                  style={{ ...columnSelectorsStyles, color: columnsSelectorsState.Collected ? "#00618F" : "black" }}
                >
                  Collected
                </div>
                <div
                  id="statusSelector"
                  onClick={() => columnsSelectorsDispatch({ type: "Status" })}
                  style={{ ...columnSelectorsStyles, color: columnsSelectorsState.Status ? "#00618F" : "black" }}
                >
                  Status
                </div>
                <div
                  id="signatorySelector"
                  onClick={() => columnsSelectorsDispatch({ type: "Signatory" })}
                  style={{ ...columnSelectorsStyles, color: columnsSelectorsState.Signatory ? "#00618F" : "black" }}
                >
                  Signatory
                </div>
                <div
                  id="companySelector"
                  onClick={() => columnsSelectorsDispatch({ type: "Company" })}
                  style={{ ...columnSelectorsStyles, color: columnsSelectorsState.Company ? "#00618F" : "black" }}
                >
                  Company
                </div>
                <div
                  id="parkingSelector"
                  onClick={() => columnsSelectorsDispatch({ type: "Parking" })}
                  style={{ ...columnSelectorsStyles, color: columnsSelectorsState.Parking ? "#00618F" : "black" }}
                >
                  Parking
                </div>
                <div
                  id="drivingSelector"
                  onClick={() => columnsSelectorsDispatch({ type: "Driving" })}
                  style={{ ...columnSelectorsStyles, color: columnsSelectorsState.Driving ? "#00618F" : "black" }}
                >
                  Driving
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="table"
          style={{
            background: "#ededed",
            border: "1px solid black",
            overflow: "auto",
            width: "100%",
            // height: '100%',
            display: "grid",
            gridTemplateColumns: `repeat(${activeColumnCount},1fr)`,
            gridTemplateRows: `1fr repeat(${mockBadgeData.length},1fr)`,
            gridAutoFlow: "column",
          }}
        >
          {columns}
        </div>
      </div>
    </div>
  );
};

export default AirBadgeTable;

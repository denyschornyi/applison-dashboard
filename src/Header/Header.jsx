import React from "react";
import "./Header.css";

import { FormControl, Select, MenuItem } from "@material-ui/core";

function Header() {
  return (
    <div className="header">
      <div className="row">
        <div className="col-md-6">
          <h1>Enterprise Shiny Dashboard</h1>
        </div>
        <div className="col-md-6 text-lg-right text-md-left">
          <FormControl className="app__dropdown">
            <Select variant="outlined">
              <MenuItem value="worldwide">Worldwide</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
}

export default Header;

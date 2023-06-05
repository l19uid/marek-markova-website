import React from "react";
import Button from "@mui/material/Button";
import {Icon} from "@mui/material";

const ToTopButton = () => {

    function ScrollUp() {
        window.scrollTo({top:0, behavior: "smooth"});
    }

  return (
      <Icon sx={{width: "100%", height: "100%", textAlign:"left"}}><img onClick={ScrollUp} style={{width:"100%"}} src={"./svg/logo.svg"} alt={"logo"}/></Icon>
  );
};

export default ToTopButton;

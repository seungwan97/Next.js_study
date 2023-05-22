// Cobby Character
import * as style from "./style/Cobby.styled";
import { useState, useEffect } from "react";

const Cobby = (props) => {
  const [cobbyCostume, setCobbyCostume] = useState("");

  useEffect(() => {
    if (props.gifSrc) {
      setCobbyCostume(props.gifSrc);
    }
  }, [props.gifSrc]);

  return (
    <style.CobbyWrapper>
      <style.Cobby src="/Character/Cobby.gif" />
      {cobbyCostume && (
        <style.CobbyCostumedItem src={props.gifSrc}></style.CobbyCostumedItem>
      )}
    </style.CobbyWrapper>
  );
};

export default Cobby;

import React from "react";
import LoaderStyleWrapper from "./Loader.styles";

export default function Loader () {
    return (
        <LoaderStyleWrapper className="loader-wrapper">
            <div className="dot-flashing"></div>
        </LoaderStyleWrapper>
    )
} 
import React from "react";
import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox";
import {PaletteTree} from "./palette";
import Work from "../components/Work";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Work">
                <Work/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;
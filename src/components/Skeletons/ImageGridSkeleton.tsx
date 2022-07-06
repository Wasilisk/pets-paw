/*node-modules*/
import React from 'react';

/*components*/
import {ImageSkeleton} from "./ImageSkeleton";
import {ImageGrid} from "../Common/Grid";

export const ImageGridSkeleton = () => {
    return (
        <ImageGrid>
            {
                Array.from({length: 20}, ((_, index) => <ImageSkeleton key={index}/>))
            }
        </ImageGrid>
    );
};

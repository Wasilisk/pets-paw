/*node-modules*/
import React from 'react';

/*components*/
import {ImageSkeleton} from './ImageSkeleton';
import {ImageGrid} from "../Common/Grid";

type ImageGridSkeletonProps = {
    limit: number
}

export const ImageGridSkeleton = ({limit}: ImageGridSkeletonProps) => {
    return (
        <ImageGrid>
            {
                Array.from({length: limit}, ((_, index) => <ImageSkeleton key={index}/>))
            }
        </ImageGrid>
    );
};

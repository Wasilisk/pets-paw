/*node-modules*/
import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {useSwipeable} from 'react-swipeable';

/*components*/
import {ImageSkeleton} from '../Skeletons';

type CarouselProps = {
    imagesUrl: string[],
    isLoading: boolean
}

const CarouselContainer = styled.div`
  overflow: hidden;
  overflow-y: visible;
  height: 375px;
  width: 100%;
  position: relative;

  .inner {
    white-space: nowrap;
    transition: transform 0.3s;
    height: 360px;
  }

  img {
    height: 360px;
    width: 640px;
    border-radius: 20px;
    object-fit: cover;
  }

  .navigation {
    height: 30px;
    width: auto;
    padding: 10px;
    background: #FFFFFF;
    border-radius: 20px;
    display: flex;
    align-items: center;
    position: absolute;
    z-index: 2;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -100%);

    .active {
      background: #FF868E;
    }

    button {
      width: 10px;
      height: 10px;
      background: #FBE0DC;
      border-radius: 10px;
      border: none;

      &:not(:last-child) {
        margin-right: 5px;
      }

      &:hover {
        background: #FFD0D0;
      }
    }
  }
`

export const Carousel = ({imagesUrl, isLoading}: CarouselProps) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    const updateIndex = (newIndex: number) => {
        if (newIndex < 0) {
            newIndex = imagesUrl.length - 1;
        } else if (newIndex >= imagesUrl.length) {
            newIndex = 0;
        }
        setActiveIndex(newIndex);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (!paused) {
                updateIndex(activeIndex + 1);
            }
        }, 3000);

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    });

    const handlers = useSwipeable({
        onSwipedLeft: () => updateIndex(activeIndex + 1),
        onSwipedRight: () => updateIndex(activeIndex - 1)
    });

    return (
        <CarouselContainer
            {...handlers}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <div
                className="inner"
                style={{transform: `translateX(-${activeIndex * 100}%)`}}
            >
                {
                    isLoading
                        ? <ImageSkeleton height="360px"/>
                        : imagesUrl && imagesUrl.map((imageUrl: string) =><img src={imageUrl} alt="Cat"/>)
                }
            </div>
            <div className="navigation">
                {
                    isLoading
                        ? null
                        : imagesUrl && imagesUrl.map((_, index) => {
                            const isButtonActive = index === activeIndex;
                            return (
                                <button className={isButtonActive ? "active" : ""} onClick={() => updateIndex(index)}/>
                                )
                    })
                }
            </div>
        </CarouselContainer>
    );
};
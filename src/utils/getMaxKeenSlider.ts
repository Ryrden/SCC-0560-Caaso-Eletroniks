import {TrackDetails} from "keen-slider/react";

export const getMaxKeenSlider = (trackDetails: TrackDetails | undefined) => trackDetails?.maxIdx != null ? trackDetails?.maxIdx : 0;
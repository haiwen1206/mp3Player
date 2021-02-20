import PropTypes from "prop-types";
import moment from "moment-timezone";
import momentDuration from "moment-duration-format";
import { useCallback, useRef, useState } from "react";

const useTimer = (timeformat) => {
    // reuseable function to return current time
    const getCurrentTime = useCallback(
        format =>
            moment()
                .format(format),
        []
    );

    // utilize a ref to set and clear an interval
    // const intervalRef = useRef();

    // utilize state to initialize and update "currentTime"
    const [currentTime, setTime] = useState(getCurrentTime(timeformat));

    return {
        currentTime
    };
};

useTimer.propTypes = {
    format: PropTypes.string.isRequired,
};

export default useTimer;
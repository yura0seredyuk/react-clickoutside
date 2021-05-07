import React, { useRef, useState, useEffect } from "react";
import "./style.css";

export default function App() {
  const tooltip = useRef(null);
  const [tooltipVisible, setTooltipVisible] = useState(false);

  useEffect(() => {
        // only add the event listener when the dropdown is opened
        if (!tooltipVisible) return;
        function handleClick (event) {
            if (tooltip.current && !tooltip.current.contains(event.target)) {
                setTooltipVisible(false);
            }
        }
        window.addEventListener('click', handleClick);
        // clean up
        return () => window.removeEventListener('click', handleClick);
    }, [tooltipVisible]);

  return (
    <div>
      <button onClick={() => setTooltipVisible(!tooltipVisible)}>
        Open tooltip
      </button>
      {tooltipVisible && (
        <div ref={tooltip}>
          Random text
        </div>
      )}
    </div>
  );
}

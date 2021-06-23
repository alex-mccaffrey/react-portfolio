import React from "react";
import "./Calendly.css"
import { openPopupWidget } from "react-calendly";

const CalendlyWidget = () => {
  const onClick = () =>
    openPopupWidget({
      url: "https://calendly.com/alex-mccaffrey",
      pageSettings: {
        backgroundColor: "ffffff",
        hideEventTypeDetails: false,
        hideLandingPageDetails: false,
        primaryColor: "00a2ff",
        textColor: "4d5055",
      },
    });

  return <button className="schedule-button" onClick={onClick}>Schedule a time to chat</button>;

  // <div>
  //   <link
  //     href="https://assets.calendly.com/assets/external/widget.css"
  //     rel="stylesheet"
  //   >
  //     <script
  //       src="https://assets.calendly.com/assets/external/widget.js"
  //       type="text/javascript"
  //       async
  //     ></script>
  //     <script type="text/javascript">
  //       window.onload = function(){" "}
  //       {Calendly.initBadgeWidget({
  //         url: "https://calendly.com/alex-mccaffrey?primary_color=9bc1bc",
  //         text: "Schedule a meeting",
  //         color: "#9bc1bc",
  //         textColor: "#ffffff",
  //         branding: true,
  //       })}
  //     </script>
  //   </link>
  // </div>
};

export default CalendlyWidget;

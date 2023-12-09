let isRendered = "true";

const Message = () => {
  if (isRendered === "true") {
    isRendered = "false";
  } else {
    isRendered = "true";
  }

  return <div>Message {isRendered}</div>;
};

export default Message;

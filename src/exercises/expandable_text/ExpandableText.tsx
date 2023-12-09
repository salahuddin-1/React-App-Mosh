import { useState } from "react";

interface ExpandableTextProps {
  children: string;
  maxChar: number;
}

const ExpandableText = (props: ExpandableTextProps) => {
  const [isExpanded, setExpand] = useState(false);

  const maxText = props.children.substring(0, props.maxChar) + "...";

  let finalText = props.children;
  let buttonName = "Less";

  if (isExpanded === false) {
    buttonName = "More";
    finalText = maxText;
  }

  return (
    <div>
      {finalText}{" "}
      <button
        onClick={() => {
          setExpand(!isExpanded);
        }}
      >
        {buttonName}
      </button>
    </div>
  );
};

export default ExpandableText;

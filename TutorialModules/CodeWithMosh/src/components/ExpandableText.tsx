import React, { ReactNode } from "react";
import { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}

const ExpandableText = ({ children, maxChars = 10 }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const text = expanded ? children : children.substring(0, maxChars);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  if (children.length <= maxChars) return <p>{children}</p>;

  return (
    <>
      <div>
        {text}
        <button onClick={handleClick}>{expanded ? "Less" : "More"}</button>
      </div>
    </>
  );
};

export default ExpandableText;

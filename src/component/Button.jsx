import React from "react";
import clsx from "clsx";

export default function Button(props) {
  const { className = "", text, children } = props;
  return (
    <button {...props} className={clsx(className,'[&>svg]:h-7 flex gap-1 items-center justify-center')}>
      {text || children}
    </button>
  );
}

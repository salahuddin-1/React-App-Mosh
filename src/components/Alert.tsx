// Passing children to a component

import { ReactNode } from "react";

interface AlertProps {
  children: ReactNode;
}

const Alert = (props: AlertProps) => {
  return <div className="alert alert-primary">{props.children}</div>;
};

export default Alert;

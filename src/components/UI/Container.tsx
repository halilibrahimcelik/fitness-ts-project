import React from "react";

type Props = {
  children?: React.ReactNode;
};

const Container = (props: Props) => {
  return <div className="container   mx-auto px-6">{props.children}</div>;
};

export default Container;

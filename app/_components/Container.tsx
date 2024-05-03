import { PropsWithChildren, ReactNode } from "react";

type Props = {
    className: string;
};
const Container = (props: PropsWithChildren<Props>) => {
    return (
      <div
        className={`container p-8 mx-auto xl:px-0 ${
          props.className ? props.className : ""
        }`}
      >
        {props.children}
      </div>
    );
  };
  
  export default Container;
  
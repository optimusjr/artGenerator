import { PropsWithChildren } from "react";

const CappedForm = ({ children }: PropsWithChildren) => (
  <form
    onSubmit={(e) => {
      e.preventDefault();
    }}
  >
    {children}
  </form>
);

export default CappedForm;

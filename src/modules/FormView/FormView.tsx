import React, { ChangeEventHandler, useCallback } from "react";
import { useVersion } from "../Document/Document.usecase";

export const FormView: React.FC = () => {
  const [version, setVersion] = useVersion();

  const onChangeVersion: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
    setVersion(e.target.value);
  }, []);

  return (
    <div>
      <input type="text" value={version} onChange={onChangeVersion} />
    </div>
  )
}

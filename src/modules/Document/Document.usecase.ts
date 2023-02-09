import { SetStateAction, useAtom } from "jotai";
import { documentState, documentYamlState, versionState } from "./Document.store";
import { Document } from "./Document.type";

type SetState<T> = (action: SetStateAction<T>) => void;

export const useDocument = (): [Document, SetState<Document>] => {
  const [document, setDocument] = useAtom(documentState);
  return [document, setDocument];
}

export const useYaml = (): [string, (newValue: string) => void] => {
  const [yaml, setYaml] = useAtom(documentYamlState);
  return [yaml, setYaml];
}

export const useVersion = (): [string, (newValue: string) => void] => {
  const [version, setVersion] = useAtom(versionState);
  return [version, setVersion];
}

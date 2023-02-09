import { atom } from "jotai";
import * as YAML from "yaml";
import petStoreYaml from "../../assets/PetStore.yaml"
import { Document } from "./Document.type";

export const documentState = atom<Document>({});

documentState.onMount = (setAtom) => {
  fetch(new URL(petStoreYaml, window.location.origin)).then((res) => res.text()).then((yaml) => {
    const document = YAML.parse(yaml) as Document;
    setAtom(document);
  });
}

export const documentYamlState = atom(
  (get): string => YAML.stringify(get(documentState)),

  (get, set, newValue: string) => {
    set(YAML.parse(newValue));
  },
);

export const versionState = atom(
  (get): string => get(documentState)?.openapi ?? "",

  (get, set, newValue: string) => {
    set(documentState, (document) => ({
      ...document,
      openapi: newValue,
    }));
  }
);

import { globalStyle } from "@vanilla-extract/css";

globalStyle("*", {
  boxSizing: "border-box",
});

globalStyle("html", {
  background: "rgb(32 32 32)",
  color: "rgb(232 232 232)",
});

globalStyle("body", {
  margin: 0,
  lineHeight: 1,
});

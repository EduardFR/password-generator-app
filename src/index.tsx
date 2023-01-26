import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { createGlobalStyle, ThemeProvider } from "styled-components";

const Global = createGlobalStyle`
:root {
  --color-Red: #F64A4A;
  --color-Orange: #FB7C58;
  --color-Yellow: #F8CD65;
  --color-White: #E6E5EA;
  --color-NeonGreen: #A4FFAF;
  --color-Gray: #817D92;
  --color-DarkGray: #24232C;
  --color-VeryDarkGray: #18171F;
}

* {
  margin: 0;
  padding: 0;
  font-family:  "JetBrains";  
}

body {
  background-color: var(--color-VeryDarkGray);
  color: var(--color-White);
}

h1 {
  font-size: 32px;
  font-weight: 700;
  line-height: 43px;
}

h2 {
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
}

p {
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
}

.customSlider {
  max-width: 100%;
  margin-bottom: 24px;
 }
  
.customSlider-track {
  top: 12px;
  height: 8px;
  margin-left: 2px;
  background: var(--color-VeryDarkGray);
}
    
.customSlider-track.customSlider-track-0 {
  background: var(--color-NeonGreen);
}

.customSlider-thumb {
  cursor: pointer;
  width: 28px;
  height: 28px;
  border-radius: 100%;
  background: var(--color-White);
  border: 2px solid var(--color-White);
  outline: none;
  &:active {
    border: 2px solid var(--color-NeonGreen);
    background: var(--color-VeryDarkGray);
  }
  &:hover {
    border: 2px solid var(--color-NeonGreen);
    background: var(--color-VeryDarkGray);
  }
}
`;

const theme = {
  media: {
    phone: "(max-width: 425px)",
    tablet: "(max-width: 768px) and (min-width: 425px) ",
  },
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
    <Global />
    <App />
  </ThemeProvider>
);

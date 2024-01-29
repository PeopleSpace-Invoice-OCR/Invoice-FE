import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{ 
    --primary-color: #5B86E5E5;   
    --bg-color: #5B86E54D;  /* background-color: var(--primary-color); */
    --third-color: #5B86E5;
    --dark-color: #3d6ab7;
    --font-black: #2D2D2D;
    --font-regular: 1rem;
    --font-big: 1.3rem;
    --font-small: 0.8rem;
}



/* CSS reset */ 
body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
  background-color: white;
  min-width: fit-content; // 중간에 추가함
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a{
    text-decoration: none;
    color: inherit;
}
`;

export default GlobalStyle;

import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    :root {
    /* primary colors */
    --primary-color: #fb6b6b;
    --primary-color-hover:#d85656;
    /*container color*/
    --background: #f3f3f3;
    --sidebar-background: #ffffff;
    --color-hover:#EDEDED;
    /*text color*/
    --text-color-gray: #b7b2b2;
    --text-color-header: #6d6d6d;
  
    --input-background-color: #e3e3e3;
    --text-large: 1.4rem;
    --text-medium: 1.2rem;
    --text-small: 1rem;
    --text-xsmall: 0.9rem;
    --text-xxsmall: 0.7rem;
  }
  #root {
    height: 100vh;
  }
  html,
  body {
    background-color: var(--background) !important;
    font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
    box-sizing: border-box;
    height: 100vh;
    padding: 0px;
    margin: 0px;
  }
  a{
      text-decoration: none !important;
  }
  
  li {
    list-style: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0px;
    padding: 0px;
  }

  .flex {
      display: flex;
  }
  .flex-center {
      justify-content: center;
      align-items: center;
  }
  .flex-column {
      flex-direction: column;
  }
  .flex-row {
      flex-direction: row;
  }
  
  .text-primary-color{
      color: var(--primary-color)!important;
  }
  
  .obj-fit{
      object-fit: cover;
  }
  
  .fs-7{
      font-size: 0.8rem;
  }


::placeholder{
    color: #A7A7A7;
}

input:disabled{
  filter:grayscale(50%) ;
}
button:disabled{
  filter:grayscale(50%) ;
}
  
svg#freepik_stories-reset - password: not(.animated).animable {
	opacity: 0;
}

svg#freepik_stories - reset - password.animated #freepik--speech - bubble--inject - 42 {
	animation: 1s 1 forwards cubic - bezier(.36, -0.01, .5, 1.38) slideDown;
	animation - delay: 0s;
}

svg#freepik_stories - reset - password.animated #freepik--Tab--inject - 42 {
	animation: 1s 1 forwards cubic - bezier(.36, -0.01, .5, 1.38) zoomIn, 1.5s Infinite linear floating;
	animation - delay: 0s, 1s;
}

@keyframes slideDown {
	0 % {
		opacity: 0;
		transform: translateY(-30px);
	}
	100 % {
		opacity: 1;
		transform: translateY(0);
	}
}

@keyframes zoomIn {
	0 % {
		opacity: 0;
		transform: scale(0.5);
	}
	100 % {
		opacity: 1;
		transform: scale(1);
	}
}

@keyframes floating {
	0 % {
		opacity: 1;
		transform: translateY(0px);
	}
	50 % {
		transform: translateY(-10px);
	}
	100 % {
		opacity: 1;
		transform: translateY(0px);
	}
}

`

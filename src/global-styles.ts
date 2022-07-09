import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing: border-box;
        font-family: 'Jost', sans-serif;
        font-weight: 400;
    }
    #root {
        height: 100vh;
        margin:0 auto;
        background-color: #F8F8F7;;
    }
`;
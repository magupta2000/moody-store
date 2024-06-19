import styled from "styled-components";

const LoaderStyleWrapper = styled.div`

    width: auto;
    left: 50%;
    bottom: -16px;
    transform: translate(-14px, 0);
    position: absolute;

    .dot-flashing {
        position: relative;
        width: 8px;
        height: 8px;
        border-radius: 5px;
        background-color: #035592;
        color: #035592;
        animation: dotFlashing 1s infinite linear alternate;
        animation-delay: .5s;
        margin: auto;
        visibility: visible;
        @media only screen and (max-width: 1440px)
        {
            width: 6px;
        height: 6px;
        }
    }

    .dot-flashing::before {
        left: -15px;
        width: 8px;
        height: 8px;
        border-radius: 5px;
        background-color: #035592;
        color: #035592;
        animation: dotFlashing 1s infinite alternate;
        animation-delay: 0s;
        @media only screen and (max-width: 1440px)
        {
            width: 6px;
        height: 6px;
        }
    }

    .dot-flashing::after {
        left: 15px;
        width: 8px;
        height: 8px;
        border-radius: 5px;
        background-color: #035592;
        color: #035592;
        animation: dotFlashing 1s infinite alternate;
        animation-delay: 1s;
        @media only screen and (max-width: 1440px)
        {
            width: 6px;
        height: 6px;
        }
    }

    @keyframes dotFlashing {
  0% {
    background-color: #035592;
  }
  50%,
  100% {
    background-color: #E8F5FF;
  }
}
`

export default LoaderStyleWrapper;
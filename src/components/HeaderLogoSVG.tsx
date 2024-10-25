import { useRef } from "react";

export const HeaderLogoSVG = () => {
  const elem1Ref = useRef<SVGRectElement>(null);
  const elem2Ref = useRef<SVGRectElement>(null);
  const elem3Ref = useRef<SVGRectElement>(null);
  const elem4Ref = useRef<SVGRectElement>(null);
  const elem5Ref = useRef<SVGRectElement>(null);
  const elem6Ref = useRef<SVGRectElement>(null);
  const elem7Ref = useRef<SVGRectElement>(null);
  const elem8Ref = useRef<SVGRectElement>(null);

  const setDefaultValsOnMouseOver = () => {
    const elem1Current = window.getComputedStyle(elem1Ref.current!);
    const elem2Current = window.getComputedStyle(elem2Ref.current!);
    const elem3Current = window.getComputedStyle(elem3Ref.current!);
    const elem4Current = window.getComputedStyle(elem4Ref.current!);
    const elem5Current = window.getComputedStyle(elem5Ref.current!);
    const elem6Current = window.getComputedStyle(elem6Ref.current!);
    const elem7Current = window.getComputedStyle(elem7Ref.current!);
    const elem8Current = window.getComputedStyle(elem8Ref.current!);

    const elementsCurrent = [
      elem1Current,
      elem2Current,
      elem3Current,
      elem4Current,
      elem5Current,
      elem6Current,
      elem7Current,
      elem8Current,
    ];

    const elementsRef = [
      elem1Ref,
      elem2Ref,
      elem3Ref,
      elem4Ref,
      elem5Ref,
      elem6Ref,
      elem7Ref,
      elem8Ref,
    ];

    elementsCurrent.forEach((element, index) => {
      elementsRef[index].current!.style.width = element.width;
      elementsRef[index].current!.style.height = element.height;
      elementsRef[index].current!.style.x = element.x;
      elementsRef[index].current!.style.y = element.y;
    });

    const allKeyframes = `
      @keyframes elem1MouseOver {
        from {
          width: ${elem1Current.width};
        }
        to {
          width: 40px;
        }
      }
      .elem1MouseOver {
        animation: elem1MouseOver .4s forwards;
      }

      @keyframes elem2MouseOver {
        from {
          height: ${elem2Current.height};
          y: ${elem2Current.y};
        }
        to {
          height: 42px;
          y: 18px;
        }
      }
      .elem2MouseOver {
        animation: elem2MouseOver .4s forwards;
      }

      @keyframes elem3MouseOver {
        from {
          x: ${elem3Current.x};
          y: ${elem3Current.y};
          width: ${elem3Current.width};
          height: ${elem3Current.height};
        }
        to {
          x: 34px;
          y: -7px;
          width: 3.2px;
          height: 56px;
        }
      }
      .elem3MouseOver {
        animation: elem3MouseOver 1.05s forwards;
      }

      @keyframes elem4MouseOver {
        from {
          x: ${elem4Current.x};
          y: ${elem4Current.y};
          width: ${elem4Current.width};
          height: ${elem4Current.height};
        }
        to {
          x: 15px;
          y: -14px;
          width: 3.5px;
          height: 34px;
        }
      }
      .elem4MouseOver {
        animation: elem4MouseOver .4s .35s forwards;
      }

      @keyframes elem5MouseOver {
        from {
          x: ${elem5Current.x};
          y: ${elem5Current.y};
          width: ${elem5Current.width};
          height: ${elem5Current.height};
        }
        to {
          x: 5px;
          y: -64.5px;
          width: 3.5px;
          height: 46.5px;
        }
      }
      .elem5MouseOver {
        animation: elem5MouseOver .4s .15s forwards;
      }

      @keyframes elem6MouseOver {
        from {
          height: ${elem6Current.height};
          y: ${elem6Current.y};
        }
        to {
          height: 42px;
          y: 18px;
        }
      }
      .elem6MouseOver {
        animation: elem6MouseOver .4s .35s forwards;
      }

      @keyframes elem7MouseOver {
        from {
          x: ${elem7Current.x};
          y: ${elem7Current.y};
          width: ${elem7Current.width};
          height: ${elem7Current.height};
        }
        to {
          x: -15px;
          y: -47px;
          width: 3.5px;
          height: 13px;
        }
      }
      .elem7MouseOver {
        animation: elem7MouseOver .25s .65s forwards;
      }

      @keyframes elem8MouseOver {
        from {
          x: ${elem8Current.x};
          y: ${elem8Current.y};
          width: ${elem8Current.width};
          height: ${elem8Current.height};
        }
        to {
          x: -15px;
          y: -34px;
          width: 3.5px;
          height: 21px;
        }
      }
      .elem8MouseOver {
        animation: elem8MouseOver .25s .65s forwards;
      }
    `;

    injectDynamicStyles(allKeyframes);
  };

  const setDefaultValsOnMouseLeave = () => {
    const elem1Current = window.getComputedStyle(elem1Ref.current!);
    const elem2Current = window.getComputedStyle(elem2Ref.current!);
    const elem3Current = window.getComputedStyle(elem3Ref.current!);
    const elem4Current = window.getComputedStyle(elem4Ref.current!);
    const elem5Current = window.getComputedStyle(elem5Ref.current!);
    const elem6Current = window.getComputedStyle(elem6Ref.current!);
    const elem7Current = window.getComputedStyle(elem7Ref.current!);
    const elem8Current = window.getComputedStyle(elem8Ref.current!);

    const elementsCurrent = [
      elem1Current,
      elem2Current,
      elem3Current,
      elem4Current,
      elem5Current,
      elem6Current,
      elem7Current,
      elem8Current,
    ];

    const elementsRef = [
      elem1Ref,
      elem2Ref,
      elem3Ref,
      elem4Ref,
      elem5Ref,
      elem6Ref,
      elem7Ref,
      elem8Ref,
    ];

    elementsCurrent.forEach((element, index) => {
      elementsRef[index].current!.style.width = element.width;
      elementsRef[index].current!.style.height = element.height;
      elementsRef[index].current!.style.x = element.x;
      elementsRef[index].current!.style.y = element.y;
    });

    const allKeyframes = `
      @keyframes elem1MouseLeave {
        from {
          width: ${elem1Current.width};
        }
        to {
          width: 0px;
        }
      }
      .elem1MouseLeave {
        animation: elem1MouseLeave .4s 0.65s forwards;
      }

      @keyframes elem2MouseLeave {
        from {
          height: ${elem2Current.height};
          y: ${elem2Current.y};
        }
        to {
          height: 0;
          y: 60px;
        }
      }
      .elem2MouseLeave {
        animation: elem2MouseLeave .4s 0.65s forwards;
      }

      @keyframes elem3MouseLeave {
        from {
          x: ${elem3Current.x};
          y: ${elem3Current.y};
          width: ${elem3Current.width};
          height: ${elem3Current.height};
        }
        to {
          x: 34px;
          y: 49px;
          width: 3.2px;
          height: 0px;
        }
      }
      .elem3MouseLeave {
        animation: elem3MouseLeave 1.05s forwards;
      }

      @keyframes elem4MouseLeave {
        from {
          x: ${elem4Current.x};
          y: ${elem4Current.y};
          width: ${elem4Current.width};
          height: ${elem4Current.height};
        }
        to {
          x: 15px;
          y: 20px;
          width: 3.5px;
          height: 0px;
        }
      }
      .elem4MouseLeave {
        animation: elem4MouseLeave .4s .35s forwards;
      }

      @keyframes elem5MouseLeave {
        from {
          x: ${elem5Current.x};
          y: ${elem5Current.y};
          width: ${elem5Current.width};
          height: ${elem5Current.height};
        }
        to {
          x: 5px;
          y: -64.5px;
          width: 3.5px;
          height: 0px;
        }
      }
      .elem5MouseLeave {
        animation: elem5MouseLeave .4s .15s forwards;
      }

      @keyframes elem6MouseLeave {
        from {
          height: ${elem6Current.height};
          y: ${elem6Current.y};
        }
        to {
          height: 0;
          y: 60px;
        }
      }
      .elem6MouseLeave {
        animation: elem6MouseLeave .4s .35s forwards;
      }

      @keyframes elem7MouseLeave {
        from {
          x: ${elem7Current.x};
          y: ${elem7Current.y};
          width: ${elem7Current.width};
          height: ${elem7Current.height};
        }
        to {
          x: -15px;
          y: -47px;
          width: 3.5px;
          height: 0px;
        }
      }
      .elem7MouseLeave {
        animation: elem7MouseLeave .4s forwards;
      }

      @keyframes elem8MouseLeave {
        from {
          x: ${elem8Current.x};
          y: ${elem8Current.y};
          width: ${elem8Current.width};
          height: ${elem8Current.height};
        }
        to {
          x: -15px;
          y: -13px;
          width: 3.5px;
          height: 0;
        }
      }
      .elem8MouseLeave {
        animation: elem8MouseLeave .25s forwards;
      }
    `;
    injectDynamicStyles(allKeyframes);
  };

  const injectDynamicStyles = (styles: string) => {
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
  };

  const mouseOverHandler = () => {
    setDefaultValsOnMouseOver();

    elem1Ref.current!.classList.remove("elem1MouseLeave");
    elem2Ref.current!.classList.remove("elem2MouseLeave");
    elem3Ref.current!.classList.remove("elem3MouseLeave");
    elem4Ref.current!.classList.remove("elem4MouseLeave");
    elem5Ref.current!.classList.remove("elem5MouseLeave");
    elem6Ref.current!.classList.remove("elem6MouseLeave");
    elem7Ref.current!.classList.remove("elem7MouseLeave");
    elem8Ref.current!.classList.remove("elem8MouseLeave");

    elem1Ref.current!.classList.add("elem1MouseOver");
    elem2Ref.current!.classList.add("elem2MouseOver");
    elem3Ref.current!.classList.add("elem3MouseOver");
    elem4Ref.current!.classList.add("elem4MouseOver");
    elem5Ref.current!.classList.add("elem5MouseOver");
    elem6Ref.current!.classList.add("elem6MouseOver");
    elem7Ref.current!.classList.add("elem7MouseOver");
    elem8Ref.current!.classList.add("elem8MouseOver");
  };

  const mouseLeaveHandler = () => {
    setDefaultValsOnMouseLeave();

    elem1Ref.current!.classList.remove("elem1MouseOver");
    elem2Ref.current!.classList.remove("elem2MouseOver");
    elem3Ref.current!.classList.remove("elem3MouseOver");
    elem4Ref.current!.classList.remove("elem4MouseOver");
    elem5Ref.current!.classList.remove("elem5MouseOver");
    elem6Ref.current!.classList.remove("elem6MouseOver");
    elem7Ref.current!.classList.remove("elem7MouseOver");
    elem8Ref.current!.classList.remove("elem8MouseOver");

    elem1Ref.current!.classList.add("elem1MouseLeave");
    elem2Ref.current!.classList.add("elem2MouseLeave");
    elem3Ref.current!.classList.add("elem3MouseLeave");
    elem4Ref.current!.classList.add("elem4MouseLeave");
    elem5Ref.current!.classList.add("elem5MouseLeave");
    elem6Ref.current!.classList.add("elem6MouseLeave");
    elem7Ref.current!.classList.add("elem7MouseLeave");
    elem8Ref.current!.classList.add("elem8MouseLeave");
  };

  return (
    <svg
      className="mySvg"
      onMouseOver={mouseOverHandler}
      onMouseLeave={mouseLeaveHandler}
      width="40"
      height="60"
      viewBox="0 0 40 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <clipPath id="clip">
        <path
          d="M20.0051 0.0182953L3.03252 19.2587L0.0117188 22.6881V60.0183H40.0117V22.6837L20.0051 0.0182953ZM20.0051 4.71333L30.1351 16.1876L13.9278 39.7292L4.95 21.7766L20.0051 4.71333ZM3.12595 25.2635L11.8635 42.7294L3.12595 55.4162V25.2635ZM5.95544 56.9207L13.4874 45.9818L18.9595 56.9207H5.95544ZM36.1323 58.4695H36.0077V58.2792L36.1323 58.4209V58.4695ZM36.8975 56.9207H22.5231L15.5517 42.9816L32.3062 18.648L36.8975 23.8475V56.9207Z"
          fill="white"
        />
      </clipPath>

      <path
        d="M20.0051 0.0182953L3.03252 19.2587L0.0117188 22.6881V60.0183H40.0117V22.6837L20.0051 0.0182953ZM20.0051 4.71333L30.1351 16.1876L13.9278 39.7292L4.95 21.7766L20.0051 4.71333ZM3.12595 25.2635L11.8635 42.7294L3.12595 55.4162V25.2635ZM5.95544 56.9207L13.4874 45.9818L18.9595 56.9207H5.95544ZM36.1323 58.4695H36.0077V58.2792L36.1323 58.4209V58.4695ZM36.8975 56.9207H22.5231L15.5517 42.9816L32.3062 18.648L36.8975 23.8475V56.9207Z"
        fill="white"
      />

      <g clipPath="url(#clip)">
        <rect
          className="elem1"
          ref={elem1Ref}
          x="0"
          y="56.9"
          width="0"
          height="3.1"
          fill="#13b09a"
        />
        <rect
          className="elem2"
          ref={elem2Ref}
          x="0"
          y="56.9"
          width="3.1"
          height="0"
          fill="#13b09a"
        />
        <rect
          className="elem3"
          ref={elem3Ref}
          x="0"
          y="56.9"
          width="3.2"
          height="0"
          fill="#13b09a"
        />
        <rect
          className="elem4"
          ref={elem4Ref}
          x="0"
          y="56.9"
          width="3.1"
          height="0"
          fill="#13b09a"
        />
        <rect
          className="elem5"
          ref={elem5Ref}
          x="0"
          y="56.9"
          width="3.1"
          height="0"
          fill="#13b09a"
        />
        <rect
          className="elem6"
          ref={elem6Ref}
          x="36.9"
          y="56.9"
          width="3.1"
          height="0"
          fill="#13b09a"
        />
        <rect
          className="elem7"
          ref={elem7Ref}
          x="0"
          y="56.9"
          width="3.1"
          height="0"
          fill="#13b09a"
        />
        <rect
          className="elem8"
          ref={elem8Ref}
          x="0"
          y="56.9"
          width="3.1"
          height="0"
          fill="#13b09a"
        />
      </g>
    </svg>
  );
};

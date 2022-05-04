import * as React from "react";
import { Link } from "gatsby";

const Nav = () => {
  return (
    <nav className="block fixed inset-x-0 md:inset-x-auto z-10 bg-grey-100/85 md:bg-transparent">
      <ul className="list-none md:mb-12 mb-0 md:space-y-1 h-full flex flex-row md:flex-col justify-between">
        <div className="flex flex-auto flex-row gap-y-1 md:gap-x-1 md:flex-col items-center md:items-stretch md:justify-start justify-between">
          <li className="nav">
            <Link
              className="flex flex-auto md:flex-none items-center p-0 md:mb-6"
              to="/"
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 512 512"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M368.252 1.41c28.369 12.255 2.16 136.1-58.538 276.617-60.699 140.517-132.902 244.495-161.27 232.241-10.901-4.709-13.744-25.895-9.667-58.171.873 18.39 5.471 28.538 11.011 30.931 16.984 7.337 84.586-94.504 139.6-221.862 55.015-127.358 80.721-241.409 63.737-248.745-6.477-2.799-19.575 5.72-37.075 25.802 22.123-27.74 40.74-41.763 52.202-36.812Z"
                  fill="url(#a)"
                />
                <path
                  d="M312.507 156.189C286.484 194.917 256 247.039 256 247.039s-69.5-118.277-88-130.826c-18.5-12.548-40-9.344-40-9.344V349.83s7.5 25.821 24 42.051 32 14.017 32 14.017V256.383l56.091 72.799c6.018-11.954 11.725-23.729 16.341-34.048 23.357-52.211 37.865-85.412 56.075-138.945Z"
                  fill="url(#b)"
                />
                <path
                  d="M328 279.109v126.789s16 1.919 32.5-14.601S384 349.83 384 349.83V113.157c-3.023 12.021-6.385 23.429-10.333 36.831l-.008.026-.005.015c-1.558 5.291-3.209 10.892-4.966 16.965-13.423 46.388-25.669 78.074-40.688 112.115Z"
                  fill="url(#c)"
                />
                <path
                  d="m0 256.456 74.828-71.8S83.5 182 91 182s20 .785 20 .785l-76.345 73.671L111 330s-12 2-20 2c-6.94 0-14.658-2-14.658-2L0 256.456Z"
                  fill="url(#d)"
                />
                <path
                  d="m512 256.456-74.828-71.8S428.5 182 421 182s-20 .785-20 .785l76.345 73.671L401 330s12 2 20 2c6.94 0 14.658-2 14.658-2L512 256.456Z"
                  fill="url(#e)"
                />
                <defs>
                  <linearGradient
                    id="a"
                    x1="-.441"
                    y1="511.249"
                    x2="517.139"
                    y2="5.234"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#E4FFFC" />
                    <stop offset="0" stopColor="#07BEB8" />
                    <stop offset="1" stopColor="#E5FFFC" />
                  </linearGradient>
                  <linearGradient
                    id="b"
                    x1="-.441"
                    y1="511.249"
                    x2="517.139"
                    y2="5.234"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#E4FFFC" />
                    <stop offset="0" stopColor="#07BEB8" />
                    <stop offset="1" stopColor="#E5FFFC" />
                  </linearGradient>
                  <linearGradient
                    id="c"
                    x1="-.441"
                    y1="511.249"
                    x2="517.139"
                    y2="5.234"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#E4FFFC" />
                    <stop offset="0" stopColor="#07BEB8" />
                    <stop offset="1" stopColor="#E5FFFC" />
                  </linearGradient>
                  <linearGradient
                    id="d"
                    x1="-.441"
                    y1="511.249"
                    x2="517.139"
                    y2="5.234"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#E4FFFC" />
                    <stop offset="0" stopColor="#07BEB8" />
                    <stop offset="1" stopColor="#E5FFFC" />
                  </linearGradient>
                  <linearGradient
                    id="e"
                    x1="-.441"
                    y1="511.249"
                    x2="517.139"
                    y2="5.234"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#E4FFFC" />
                    <stop offset="0" stopColor="#07BEB8" />
                    <stop offset="1" stopColor="#E5FFFC" />
                  </linearGradient>
                </defs>
              </svg>
            </Link>
          </li>
          <div className="contents">
            <li className="nav flex-inital items-center md:flex-none">
              <Link
                className="flex items-center nav"
                to="/"
                activeClassName="bg-grey-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.245 1.042C1.005 1.042 0 2.047 0 3.287v11.837c0 1.24 1.005 2.245 2.245 2.245h15.51c1.24 0 2.245-1.005 2.245-2.245V4.919c0-1.24-1.005-2.245-2.245-2.245H8.769a1.02 1.02 0 0 1-.549-.16L6.464 1.394c-.361-.23-.779-.352-1.207-.352H2.245zm-1.02 2.245a1.02 1.02 0 0 1 1.02-1.02h3.012a1.02 1.02 0 0 1 .549.16l1.757 1.121c.361.23.779.352 1.207.352h8.986a1.02 1.02 0 0 1 1.02 1.02v1.837H1.224V3.287zm0 4.694v7.143a1.02 1.02 0 0 0 1.02 1.02h15.51a1.02 1.02 0 0 0 1.02-1.02V7.98H1.224z"
                    fill="url(#A)"
                  />
                  <defs>
                    <radialGradient
                      id="A"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(10 14.9872) rotate(-128.458) scale(19.7635 29.2366)"
                    >
                      <stop stopColor="#e6fffc" />
                      <stop offset="1" stopColor="#07beb8" />
                    </radialGradient>
                  </defs>
                </svg>
                <span className="hide">Work</span>
              </Link>
            </li>
            <li className="nav flex-inital items-center md:flex-none">
              <Link
                className="flex items-center nav"
                to="/about"
                activeClassName="bg-grey-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                >
                  <path
                    d="M13.333 7.5c0 1.841-1.492 3.333-3.333 3.333S6.667 9.341 6.667 7.5 8.159 4.167 10 4.167s3.333 1.492 3.333 3.333z"
                    fill="url(#A)"
                  />
                  <path
                    fillRule="evenodd"
                    d="M20 10c0 5.523-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0s10 4.477 10 10zM2.775 14.937C3.656 13.531 6.557 12.5 10 12.5s6.344 1.031 7.226 2.437A8.71 8.71 0 0 0 18.75 10a8.75 8.75 0 1 0-17.5 0 8.71 8.71 0 0 0 1.525 4.937z"
                    fill="url(#A)"
                  />
                  <defs>
                    <radialGradient
                      id="A"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(10 17.0833) rotate(-122.957) scale(22.5943 31.3277)"
                    >
                      <stop stopColor="#e6fffc" />
                      <stop offset="1" stopColor="#07beb8" />
                    </radialGradient>
                  </defs>
                </svg>
                <span className="hide">About</span>
              </Link>
            </li>
            <li className="nav flex-inital items-center md:flex-none">
              <a
                href="mailto:mariahtao@gmail.com"
                className="flex items-center nav"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.839.434a1.49 1.49 0 0 0-1.678 0L.279 6.49A.64.64 0 0 0 0 7.018v12.34a.64.64 0 0 0 .638.638h18.723a.64.64 0 0 0 .638-.638V7.018a.64.64 0 0 0-.279-.527L10.839.434zM9.88 1.489c.072-.049.167-.049.24 0l8.474 5.778-6.088 5.327-1.535-1.325a1.49 1.49 0 0 0-1.943-.004l-1.542 1.322-6.08-5.32L9.88 1.489zm3.601 11.947l5.242 4.527V8.85l-5.242 4.587zM1.277 8.85l5.23 4.577-5.23 4.483V8.85zm1.016 9.87h15.353l-7.509-6.485c-.08-.069-.198-.069-.278-.001L2.293 18.72z"
                    fill="url(#A)"
                  />
                  <defs>
                    <radialGradient
                      id="A"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(10 17.1057) rotate(-123.193) scale(22.4521 31.244)"
                    >
                      <stop stopColor="#e6fffc" />
                      <stop offset="1" stopColor="#07beb8" />
                    </radialGradient>
                  </defs>
                </svg>
                <span className="hide">Contact</span>
              </a>
            </li>
            <li className="nav flex-inital items-center md:flex-none">
              <a
                href="https://drive.google.com/file/d/1CjKOAJN56O2eqCk0vMVofPdWmKZhE1Et/view?usp=sharing"
                className="flex items-center nav"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                >
                  <g fillRule="evenodd">
                    <path
                      d="M4.584 1.458c0-.115.093-.208.208-.208H10c.23 0 .417.187.417.417v6.042a1.46 1.46 0 0 0 1.458 1.458h6.042c.23 0 .417.187.417.417v8.871c0 .115-.093.208-.208.208h-7.708a6.28 6.28 0 0 1-1.095 1.25h8.802a1.46 1.46 0 0 0 1.458-1.458V8.47a1.46 1.46 0 0 0-.427-1.031L12.145.427A1.46 1.46 0 0 0 11.113 0H4.792a1.46 1.46 0 0 0-1.458 1.458v7.5c0 .098.034.188.09.259.373-.111.76-.188 1.159-.228l.001-.031v-7.5zM16.86 7.917a.42.42 0 0 0 .295-.711l-4.777-4.777a.42.42 0 0 0-.711.295v4.985c0 .115.093.208.208.208h4.985z"
                      fill="url(#A)"
                    />
                    <path
                      d="M10.209 15a5 5 0 1 1-10 0 5 5 0 1 1 10 0zm-3.542-1.875a1.46 1.46 0 0 1-1.458 1.458 1.46 1.46 0 0 1-1.458-1.458 1.46 1.46 0 0 1 1.458-1.458 1.46 1.46 0 0 1 1.458 1.458zm-1.458 2.083c1.681 0 2.548 1.763 2.82 2.444.052.13-.046.264-.186.264H2.574c-.14 0-.238-.134-.186-.264.272-.681 1.14-2.444 2.82-2.444z"
                      fill="url(#A)"
                    />
                  </g>
                  <defs>
                    <radialGradient
                      id="A"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(9.896 17.0833) rotate(-122.133) scale(22.3877 30.6289)"
                    >
                      <stop stopColor="#e6fffc" />
                      <stop offset="1" stopColor="#07beb8" />
                    </radialGradient>
                  </defs>
                </svg>
                <span className="hide">Résumé</span>
              </a>
            </li>
            <li className="nav flex-inital items-center md:flex-none">
              <a
                href="https://www.linkedin.com/in/mariaht8/"
                className="flex items-center nav"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                >
                  <path
                    d="M17.041 17.041h-2.963V12.4c0-1.107-.02-2.531-1.541-2.531-1.543 0-1.78 1.206-1.78 2.451v4.721H7.794V7.497h2.845v1.304h.04a3.12 3.12 0 0 1 2.807-1.542c3.004 0 3.557 1.976 3.557 4.546l-.001 5.235zM4.45 6.193a1.73 1.73 0 0 1-1.72-1.72 1.73 1.73 0 0 1 1.72-1.72 1.73 1.73 0 0 1 1.72 1.719 1.73 1.73 0 0 1-1.719 1.72zm1.482 10.848H2.965V7.497h2.966v9.544zM18.519.001H1.476C.676-.008.01.643 0 1.443v17.114A1.47 1.47 0 0 0 1.476 20h17.043A1.47 1.47 0 0 0 20 18.557V1.442A1.47 1.47 0 0 0 18.519 0v.001z"
                    fill="#0a66c2"
                  />
                </svg>
                <span className="hide">Connect</span>
              </a>
            </li>
          </div>
        </div>
        <div className="hidden md:inline pb-0 md:pb-16">
          <p className="small">
            Designed and developed with Figma, react.js, and ❤️
          </p>
          <p className="small">2022 Mariah Tao © </p>
        </div>
      </ul>
    </nav>
  );
};

export default Nav;

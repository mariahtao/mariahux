import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image';

const Nav = () => {
    return (
      <nav class="block fixed z-10 md:w-48 p-2 md:mb-12 backdrop-blur">
        <ul class="list-none md:space-y-1 block bg-white/15 md:bg-transparent flex flex-row md:flex-col content-center justify-between">
          <li>
            <Link 
              className="flex items-center p-1 md:mb-6 rounded bg-gradient-to-r from-aqua-600/20 to-aqua-100/20 hover:bg-grey-200"
              to="/"
            >
              <img src="./assets/fav.png"></img>
              <span class="ml-3">mariahux</span>
            </Link>
          </li>
          <div className="flex flex-row md:flex-col">
            <li className="flex shrink md:shrink-0">
              <Link 
                className="flex items-center p-1 rounded hover:bg-grey-200 active:bg-grey-300"
                to="/"
                activeClassName="bg-grey-200"
              >
                <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M1.796.833C.804.833 0 1.637 0 2.63v9.47c0 .992.804 1.796 1.796 1.796h12.408c.992 0 1.796-.804 1.796-1.796V3.935c0-.991-.804-1.796-1.796-1.796H7.016a.816.816 0 0 1-.44-.128l-1.405-.896a1.796 1.796 0 0 0-.966-.282h-2.41zM.98 2.63c0-.45.365-.816.816-.816h2.41c.155 0 .307.044.438.128l1.406.896c.288.184.623.282.966.282h7.188c.45 0 .816.366.816.816v1.47H.98V2.629zm0 3.755V12.1c0 .45.365.816.816.816h12.408c.45 0 .816-.365.816-.816V6.384H.98z" fill="url(#a)"/>
                  <defs>
                    <radialGradient id="a" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(-128.458 6.894 4.064) scale(15.8108 23.3893)">
                      <stop stop-color="#E6FFFC"/>
                      <stop offset="1" stop-color="#07BEB8"/>
                    </radialGradient>
                  </defs>
                </svg>
                <span class="ml-3 invisible md:visible">Work</span>
              </Link>
            </li>

            <li className="flex basis-auto">
              <Link 
                className="flex items-center p-1 rounded hover:bg-grey-200 active:bg-grey-300"
                to="/about"
                activeClassName="bg-grey-200"
              >
                <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.667 6a2.667 2.667 0 1 1-5.334 0 2.667 2.667 0 0 1 5.334 0z" fill="url(#a)"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM2.22 11.95C2.925 10.824 5.246 10 8 10c2.755 0 5.075.825 5.78 1.95a7 7 0 1 0-11.56 0z" fill="url(#b)"/>
                  <defs>
                    <radialGradient id="a" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(-122.957 7.714 4.66) scale(18.0755 25.0622)">
                      <stop stop-color="#E6FFFC"/>
                      <stop offset="1" stop-color="#07BEB8"/>
                    </radialGradient>
                    <radialGradient id="b" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(-122.957 7.714 4.66) scale(18.0755 25.0622)">
                      <stop stop-color="#E6FFFC"/>
                      <stop offset="1" stop-color="#07BEB8"/>
                    </radialGradient>
                  </defs>
                </svg>
                <span class="ml-3 invisible md:visible">About</span>
              </Link>
            </li>

            <li className="flex basis-auto">
              <a href="mailto:mariahtao@gmail.com" 
                class="flex items-center p-1 rounded hover:bg-grey-200"
              >
                <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"d="M8.671.347a1.191 1.191 0 0 0-1.342 0L.223 5.192A.51.51 0 0 0 0 5.614v9.872c0 .282.229.511.51.511h14.98a.51.51 0 0 0 .51-.51V5.613a.51.51 0 0 0-.223-.422L8.671.347zm-.767.844a.17.17 0 0 1 .192 0l6.78 4.622-4.871 4.262-1.228-1.06a1.192 1.192 0 0 0-1.554-.003l-1.234 1.057-4.864-4.256 6.78-4.622zm2.881 9.558 4.194 3.622V7.08l-4.194 3.67zM1.021 7.08l4.185 3.662-4.185 3.587V7.08zm.813 7.897h12.283L8.11 9.788a.17.17 0 0 0-.222 0l-6.054 5.188z" fill="url(#a)"/>
                  <defs>
                    <radialGradient id="a" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-9.83333 -15.03091 20.91676 -13.6839 8 13.685)">
                      <stop stop-color="#E6FFFC"/>
                      <stop offset="1" stop-color="#07BEB8"/>
                    </radialGradient>
                  </defs>
                </svg>
                <span class="ml-3 invisible md:visible">Email</span>
                </a>
            </li>
            
            <li className="flex basis-auto">
              <a href="https://drive.google.com/file/d/1CjKOAJN56O2eqCk0vMVofPdWmKZhE1Et/view?usp=sharing" 
                  className="flex items-center p-1 rounded hover:bg-grey-200"
                >
                  <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.667 1.167c0-.092.074-.167.166-.167H8c.184 0 .333.15.333.333v4.834c0 .644.523 1.166 1.167 1.166h4.833c.184 0 .333.15.333.334v7.097a.167.167 0 0 1-.166.167H8.334a5.025 5.025 0 0 1-.876 1H14.5c.644 0 1.166-.523 1.166-1.167V6.776c0-.31-.122-.606-.341-.825L9.715.341A1.167 1.167 0 0 0 8.89 0H3.833C3.19 0 2.666.522 2.666 1.167v6c0 .078.027.15.072.207.299-.09.609-.15.928-.183V1.167zm9.821 5.166a.333.333 0 0 0 .236-.569L9.902 1.943a.333.333 0 0 0-.569.236v3.988c0 .092.075.166.167.166h3.988z" fill="url(#a)"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.166 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0zm-2.833-1.5A1.167 1.167 0 1 1 3 10.5a1.167 1.167 0 0 1 2.333 0zm-1.167 1.667c1.345 0 2.039 1.41 2.257 1.955.041.104-.037.211-.149.211H2.06c-.112 0-.19-.107-.149-.211.218-.545.912-1.955 2.257-1.955z" fill="url(#b)"/>
                    <defs>
                      <radialGradient id="a" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(-122.133 7.736 4.645) scale(17.9101 24.5031)">
                        <stop stop-color="#E6FFFC"/>
                        <stop offset="1" stop-color="#07BEB8"/>
                      </radialGradient>
                      <radialGradient id="b" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(-122.133 7.736 4.645) scale(17.9101 24.5031)">
                        <stop stop-color="#E6FFFC"/>
                        <stop offset="1" stop-color="#07BEB8"/>
                      </radialGradient>
                    </defs>
                  </svg>    
                  <span class="ml-3 invisible md:visible">Resume</span>
              </a>
            </li>

            <li className="flex basis-auto">
              <a href="https://www.linkedin.com/in/mariaht8/" 
                className="flex items-center p-1 rounded hover:bg-grey-200"
              >
                <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.633 13.633h-2.37V9.92c0-.885-.017-2.025-1.234-2.025-1.235 0-1.423.965-1.423 1.96v3.778H6.235V5.998H8.51V7.04h.032a2.497 2.497 0 0 1 2.245-1.233c2.403 0 2.846 1.58 2.846 3.637l-.001 4.188zM3.56 4.954a1.383 1.383 0 0 1-1.376-1.376c0-.754.62-1.375 1.376-1.375.754 0 1.375.62 1.375 1.375s-.62 1.376-1.375 1.376zm1.185 8.679H2.372V5.998h2.373v7.635zM14.815 0H1.18A1.173 1.173 0 0 0 0 1.154v13.691c.008.64.54 1.161 1.18 1.155h13.635A1.176 1.176 0 0 0 16 14.845V1.153A1.175 1.175 0 0 0 14.815 0v.001z" fill="#0A66C2"/>
                </svg>
                  <span class="ml-3 invisible md:visible">LinkedIn</span>
                </a>
            </li>
          </div>
        </ul>
      </nav>
    )
  }
  
  export default Nav
  
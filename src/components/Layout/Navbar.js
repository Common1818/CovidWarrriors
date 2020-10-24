import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./logo3.PNG";
import $ from "jquery";
import "./css/Navbar.css";

const Navbar = () => {
  useEffect(() => {
    const $body = $("body");
    const $menuOpen = $(".menu-toggle");
    const $menuClose = $(".cancel-btn");
    const $btnSearch = $(".search-toggle");
    $(function () {
      $menuOpen.click(function () {
        $body.addClass("menu-open");
      });
      $menuClose.click(function () {
        $body.removeClass("menu-open");
      });

      $btnSearch.click(function () {
        $body.toggleClass("search-open");
      });
    });
  });

  var svg1 =
    '<svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" version="1.1" x="0px" y="0px" viewBox="0 0 100 125"><g transform="translate(0,-952.36218)"><path d="m 16,979.36218 c -1.65685,0 -3,1.3431 -3,3 0,1.6568 1.34315,3 3,3 l 68,0 c 1.65685,0 3,-1.3432 3,-3 0,-1.6569 -1.34315,-3 -3,-3 z m 0,20 c -1.65685,0 -3,1.34312 -3,3.00002 0,1.6568 1.34315,3 3,3 l 68,0 c 1.65685,0 3,-1.3432 3,-3 0,-1.6569 -1.34315,-3.00002 -3,-3.00002 z m 0,20.00002 c -1.65685,0 -3,1.3431 -3,3 0,1.6568 1.34315,3 3,3 l 68,0 c 1.65685,0 3,-1.3432 3,-3 0,-1.6569 -1.34315,-3 -3,-3 z" style="text-indent:0;text-transform:none;direction:ltr;block-progression:tb;baseline-shift:baseline;enable-background:accumulate;" fill-opacity="1" stroke="none" marker="none" visibility="visible" display="inline" overflow="visible"/></g></svg>';

  var svg2 = ` <svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
                        xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" version="1.1" x="0px" y="0px" viewBox="0 0 100 125"><g transform="translate(0,-952.36218)"><path style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;opacity:1;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:3.99999976000000010;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:Sans;-inkscape-font-specification:Sans" d="M 15 8 C 13.542451 8 12.003446 8.50749 10.59375 9.625 C 9.1840537 10.74251 8 12.64176 8 15 L 8 85 C 8 87.3583 9.1840606 89.2575 10.59375 90.375 C 12.003439 91.4925 13.542421 92 15 92 L 85 92 C 86.457579 92 87.996548 91.4925 89.40625 90.375 C 90.815952 89.2575 92 87.3583 92 85 L 92 15 C 92 12.64175 90.815958 10.74251 89.40625 9.625 C 87.996542 8.50749 86.457549 8 85 8 C 61.83749 7.99997 38.162516 7.99994 15 8 z M 15 12 C 38.162506 11.99994 61.83749 11.99997 85 12 C 85.325201 12 86.292896 12.23901 86.9375 12.75 C 87.582104 13.26099 88 13.8723 88 15 L 88 85 C 88 86.1277 87.582111 86.70765 86.9375 87.21875 C 86.292889 87.72975 85.325171 88 85 88 L 15 88 C 14.674829 88 13.707098 87.72975 13.0625 87.21875 C 12.417902 86.70765 12 86.1277 12 85 L 12 15 C 12 13.87229 12.417909 13.26099 13.0625 12.75 C 13.707091 12.23901 14.674799 12 15 12 z M 27.78125 25.96875 A 2.0001999 2.0001999 0 0 0 26.59375 29.40625 L 47.1875 50 L 26.59375 70.5625 A 2.0001999 2.0001999 0 1 0 29.40625 73.40625 L 50 52.8125 L 70.59375 73.40625 A 2.0001999 2.0001999 0 1 0 73.40625 70.5625 L 52.8125 50 L 73.40625 29.40625 A 2.0001999 2.0001999 0 0 0 71.75 25.96875 A 2.0001999 2.0001999 0 0 0 70.59375 26.5625 L 50 47.15625 L 29.40625 26.5625 A 2.0001999 2.0001999 0 0 0 27.78125 25.96875 z " transform="translate(0,952.36218)"/></g></svg>`;

  return (
    <div className="nav-container">
      <header class="main-header">
        <nav class="navbar-top navbar">
          <a href="/" class="logo">
            <img src={Logo} id="logo" alt="Project Target"></img>
          </a>

          <ul class="navbar-social-links">
            <li>
              <a href="#">
                <i class="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-twitter-square"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <header class="bottom-header">
        <nav class="navbar-bottom navbar">
          <button class="menu-toggle toggler">
            <svg dangerouslySetInnerHTML={{ __html: svg1 }} />
          </button>
          <ul class="nav-links">
            <div class="toggler cancel-btn">
              <svg dangerouslySetInnerHTML={{ __html: svg2 }} />
            </div>
            <li>
              <NavLink
                onClick={() => {
                  const $body = $("body");
                  $body.removeClass("menu-open");
                }}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => {
                  const $body = $("body");
                  $body.removeClass("menu-open");
                }}
                to="/getHelp"
              >
                Get Help
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => {
                  const $body = $("body");
                  $body.removeClass("menu-open");
                }}
                to="/helpOthers"
              >
                Help Others
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => {
                  const $body = $("body");
                  $body.removeClass("menu-open");
                }}
                to="/track"
              >
                Track
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => {
                  const $body = $("body");
                  $body.removeClass("menu-open");
                }}
                to="/5"
              >
                Donate
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;

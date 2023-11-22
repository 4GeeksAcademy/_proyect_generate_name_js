/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { left } from "@popperjs/core";

window.onload = function() {
  function generateDomain(pronun, adj, noun) {
    let randomDomain = [];

    for (let i in pronun) {
      for (let j in adj) {
        for (let k in noun) {
          let domain = pronun[i] + adj[j] + noun[k];
          randomDomain.push(domain);
        }
      }
    }
    return randomDomain;
  }
  let pronun = ["the", "of", "other"];
  let adj = ["great", "big", "small"];
  let noun = [".es ", " .com"];

  let result = generateDomain(pronun, adj, noun);
  document.getElementById("listDomainn").innerHTML = result
    .map(domain => '<li class="list-group-item">' + domain + "</li>")
    .join("");
};

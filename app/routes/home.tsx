import React, { useState, useEffect } from "react";

import type { Route } from "./+types/home";
import Nav from "../Nav/Nav";
import ExtensionsList from "../ExtensionsList/ExtensionsList";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Browser Extensions" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  let fullPageClassName;
  if (darkMode) {
    fullPageClassName = "full-page full-page-dark";
  } else fullPageClassName = "full-page full-page-light";
  return (
    <div className={fullPageClassName}>
      <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
      <ExtensionsList />
    </div>
  );
}

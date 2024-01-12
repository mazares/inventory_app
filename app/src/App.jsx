import "./App.css";

import Header from "./componets/header/Header";

import Main from "./componets/main/Main";

import Footer from "./componets/footer/Footer";

import { useState, useEffect } from "react";

import axios from "axios";

export default function App() {
  return (
    <div className="app">
      <Header />

      <Main />

      <Footer />
    </div>
  );
}

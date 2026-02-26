"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faHome, 
    faUser, 
    faEnvelope 
    
} from "@fortawesome/free-solid-svg-icons";

const navItems = [
    { name: "Home", icon: faHome},
    { name: "About", icon: faUser },
    { name: "Contact", icon: faEnvelope },
];

const Sidebar = () => {
    const [activeItem, setActiveItem] = useState("Home");


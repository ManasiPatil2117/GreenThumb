import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Buy from "./Buy";
export default function NavigateBuy(){
    const navigate=useNavigate()
    navigate('/buy')
}
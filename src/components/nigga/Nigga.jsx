import React, { useEffect } from "react";
import './nigga.scss'
import axios from "axios";

export const Nigga = () => {
  const apiUrl = 'https://swapi.dev/api/planets';

  useEffect(() => {
    fetchSW()
  }, [])
  async function fetchSW() {
    const response = await axios.get(apiUrl);
    console.log(response.data)
  }


  return (
    <div className="nigga">
      <div>I have white tooth</div>
    </div>
  )
}

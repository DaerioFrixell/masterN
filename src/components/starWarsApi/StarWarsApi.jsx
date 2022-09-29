import React from "react";
import './starWarsApi.scss'
import axios from "axios";
import { api } from "../../Core/api";
import { useEffect } from "react";
import { useState } from "react";
import { Planets } from "./planets/Planets";

export const StarWarsApi = () => {
  const [planetsList, setPlanetsList] = useState([])
  const [err, setErr] = useState('')
  useEffect(() => {
    const response = axios.get(`https://swapi.dev/api/planets`)
      .then((response) => {
        setPlanetsList(response.data.results)
        console.log(response.data.results)
      })
      .catch(error => {
        setErr(error.message)
      })

  }, [])


  const all = planetsList.map(p => <Planets
    key={p.created}
    name={p.name}
    population={p.population}
    rotate={p.rotation_period} />)


  console.log("err: ", err)


  return (
    <div className="swa">
      <h2>список планет</h2>
      <div className="swa__planets">{all}</div>
      <p>{err}</p>
    </div >
  )
}

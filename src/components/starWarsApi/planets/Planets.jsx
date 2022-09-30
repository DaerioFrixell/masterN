import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Loader } from "../../UI/loader/Loader";
import { PlanetTemplate } from "./planetTemplate/PlanetTemplate";

// import './starWarsApi.scss'


export const Planets = () => {
  const [planetsList, setPlanetsList] = useState([])
  const [err, setErr] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get(`https://swapi.dev/api/planets/`)
      .then((response) => {
        setPlanetsList(response.data.results)
        const load = false
        setLoading(load)
        console.log("loading: ", loading)
      })
      .catch(error => {
        setErr(error.message)
      })
  }, [loading])

  const all = planetsList.map(p => <PlanetTemplate
    key={p.created}
    name={p.name}
    population={p.population}
    rotate={p.rotation_period} />)

  const isLoading = loading ? <Loader loading={"loading..."} /> : all

  return (
    <div className="planets">
      <div className="planets__all">{isLoading}</div>
      <p>{err}</p>
    </div >
  )
}

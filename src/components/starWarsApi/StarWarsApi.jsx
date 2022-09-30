import React from "react";
import './starWarsApi.scss'
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Planets } from "./planets/Planets";
import { Loader } from "../UI/loader/Loader";

export const StarWarsApi = () => {
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

  const all = planetsList.map(p => <Planets
    key={p.created}
    name={p.name}
    population={p.population}
    rotate={p.rotation_period} />)

  const isLoading = loading ? <Loader loading={"loading"} /> : all



  return (
    <div className="swa">
      <h2>список планет</h2>
      <div className="swa__planets">{isLoading}</div>
      <p>{err}</p>
    </div >
  )
}

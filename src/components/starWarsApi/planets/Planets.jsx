import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
// import { Loader } from "../../UI/loader/Loader";
import { PlanetTemplate } from "./planetTemplate/PlanetTemplate";
import { getPlanets } from "../../../models/planets/planet.services";
import { addPlanetsAction } from "../../../models/planets/planet.action";

export const Planets = () => {
  const [err, setErr] = useState('')
  const dispatch = useDispatch();

  useEffect(
    () => {
      (async () => {
        const { data } = await getPlanets();
        dispatch(addPlanetsAction(data.results));
      })()
    }, []);

  const planetsList = useSelector(state => state.planets.data)
  const all = planetsList.map(p => <PlanetTemplate
    key={p.created}
    name={p.name}
    population={p.population}
    rotate={p.rotation_period} />)

  // const isLoading = loading ? <Loader loading={"loading..."} /> : all

  return (
    <div className="planets">
      <div className="planets__all">{all}</div>
      <p>{err}</p>
    </div >
  )
}

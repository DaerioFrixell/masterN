import React from "react";
import { useEffect, } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PlanetTemplate } from "./planetTemplate/PlanetTemplate";
import {
  getPlanetsAction,
} from "../../../models/planets/planet.action";

export const Planets = () => {
  const planetsList = useSelector(state => state.planets.data)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPlanetsAction())
  }, []);

  const all = planetsList.map(p => <PlanetTemplate
    key={p.created}
    name={p.name}
    population={p.population}
    rotate={p.rotation_period} />)

  return (
    <div className="planets">
      <div className="planets__all">
        {all}
      </div>
    </div >
  )
}

import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Loader } from "../../UI/loader/Loader";
import { PersonTemplate } from "./personTemplate/PersonTemplate";

export const People = () => {
  const [peopleList, setPeopleList] = useState([])
  const [err, setErr] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/`)
      .then((response) => {
        setPeopleList(response.data.results)
        const load = false
        setLoading(load)
        console.log("loading: ", loading)
      })
      .catch(error => {
        setErr(error.message)
      })
  }, [loading])

  const all = peopleList.map(p => <PersonTemplate
    key={p.created}
    name={p.name}
    old={p.birth_year}
    eye={p.eye_color} />)

  const isLoading = loading ? <Loader loading={"loading..."} /> : all

  return (
    <div className="people">
      <div className="people__all">{isLoading}</div>
      <p>{err}</p>
    </div >
  )
}

import { SWApi } from "../../core/api";

export const getPlanets = async () => SWApi.get('/planets');

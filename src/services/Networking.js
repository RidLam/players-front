import axios from "axios";
import { sortByRank } from "../utils/Sorting";

const base_url = "http://localhost:8080/";

export const getAllPlayers = () =>
  new Promise((resolve, reject) => {
    axios.get(base_url + 'api/players')
    .then(players => {
      if (!players) resolve([]);
      resolve(players.data.sort(sortByRank));
    })
    .catch(() => {
      reject(`Error getting user with id : ${player_id}, please try again later`);
    });
  });

export const getPlayerById = (player_id) =>
  new Promise((resolve, reject) => {
    axios.get(base_url + 'api/players/' + player_id)
    .then(player => {
      if (!player) resolve({});
      resolve(player.data);
    })
    .catch(() => {
      reject(`Error getting user with id : ${player_id}, please try again later`);
    });
  });
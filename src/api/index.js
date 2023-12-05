import axios from 'axios';

const baseUrl = "https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT/";
const basePlayersUrl = `${baseUrl}/players`;

const getAllPlayers = async () => {
    let players = [];
    try {
        const response = await axios.get(basePlayersUrl);
        players = response.data.data.players;
    } catch (err) {
        console.error(err);
    }
    return players;
};

const getPlayerById = async (playerId) => {
    let player = undefined;
    console.info(`getting data for playerid: ${playerId}`)
    try {
        const response = await axios.get(`${basePlayersUrl}/${playerId}`);
        player = response.data.data.player;
    } catch (err) {
        console.error(err);
    }
    return player;
};

const addPlayer = async (player) => {
    try {
        const response = await axios.post(basePlayersUrl, player, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log(response.data);
    } catch (err) {
        console.error('Oops, something went wrong with adding that player!', err);
    }
};

const deletePlayer = async (playerId) => {
    console.info(`deleting data for playerid: ${playerId}`)
    try {
        const response = await axios.delete(`${basePlayersUrl}/${playerId}`);
        console.log(`Delete result for ${playerId}: ${response.data.success}`)
    } catch (err) {
        console.error(err);
        return false;
    }
    return true;
}

export { getAllPlayers, getPlayerById, addPlayer, deletePlayer };
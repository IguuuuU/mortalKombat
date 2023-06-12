const Messages = {
    EVENT: 'event',
    LIFE_UPDATE: 'life-update',
    POSITION_UPDATE: 'position-update',
    PLAYER_CONNECTED: 'player-connected',
}

function Game (id, GameCollection) {
    this._id = id;
    this._gameCollection = GameCollection;
    this._players = [];
}

Game.prototype.getId = () => this._id;
Game.prototype.addPlayer = (p) => {
  if (this._players.length > 1) {}
}

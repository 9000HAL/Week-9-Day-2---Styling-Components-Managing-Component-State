import { useState } from 'react';

const UpdateState = () => {
  // Declare the game state and the setGame function to update it
  const [game, setGame] = useState({
    id: 1,
    player: {
    name: "Dylan"
    }
  });

  // Define the handleClick function
  const handleClick = () => {
    // Create a new game object by spreading the existing game state
    // and update the name of the player to any other name you want)
    const newGame = { ...game, player: { name: "Christian" } };

    // Update the game state using the setGame function
    setGame(newGame);
  };

  return (
    <div>
      <h1>Game</h1>
      <p>Player Name: {game.player.name}</p>
      <button onClick={handleClick}>Change Name</button>
    </div>


  );


};

export default UpdateState;






/*

  return (
    <div>
      <h1>Game</h1>
      <p>Player Name: {game.player.name}</p>
      <button onClick={handleClick}>Change Name</button>
    </div>
</>
);    



//<> </>

*/
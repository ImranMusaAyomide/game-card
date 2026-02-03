// BattleLogic.js

/**
 * Calculates the outcome of an attack.
 * @param {Object} attacker - The card attacking.
 * @param {Object} defender - The card receiving damage.
 * @returns {Object} - The updated defender stats.
 */
export const calculateAttack = (attacker, defender) => {
  const newHP = Math.max(0, defender.hp - attacker.atk);
  
  return {
    ...defender,
    hp: newHP,
    isDefeated: newHP === 0
  };
};

/**
 * Checks if a player has won the game.
 * @param {Array} playerDeck - List of cards in player's deck.
 * @returns {Boolean}
 */
export const checkWinCondition = (opponentDeck) => {
  // If all cards in the opponent's deck have 0 HP, player wins
  return opponentDeck.every(card => card.hp === 0);
};

/**
 * Basic skill execution logic
 */
export const executeSkill = (card, target) => {
  if (card.name === "Armatula") {
    return { ...target, hp: target.hp + 20 }; // Heal logic
  }
  // Add other skills here
  return target;
};
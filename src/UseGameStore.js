// useGameStore.js
import { create } from 'zustand';
import { cardDatabase } from './cards';
import { calculateAttack, checkWinCondition } from './BattleLogic';

const useGameStore = create((set, get) => ({
  // --- INITIAL STATE ---
  playerHP: 100,
  opponentHP: 100,
  playerDeck: [...cardDatabase], // Start with all cards for testing
  opponentDeck: [...cardDatabase].map(card => ({ ...card, id: card.id + 100 })), 
  turn: 'player', // 'player' or 'opponent'
  isGameOver: false,
  battleLogs: ["Welcome to the Arena!"],

  // --- ACTIONS ---
  
  // 1. Attack Logic
  playAttack: (attackerId, targetId) => {
    const { playerDeck, opponentDeck, turn, battleLogs } = get();
    
    // Check if it's the right turn
    if (turn !== 'player') return;

    const attacker = playerDeck.find(c => c.id === attackerId);
    let target = opponentDeck.find(c => c.id === targetId);

    if (!attacker || !target) return;

    // Use our BattleLogic
    const updatedTarget = calculateAttack(attacker, target);

    const newOpponentDeck = opponentDeck.map(c => 
      c.id === targetId ? updatedTarget : c
    );

    set({
      opponentDeck: newOpponentDeck,
      battleLogs: [`${attacker.name} deals ${attacker.atk} damage to ${target.name}!`, ...battleLogs],
      turn: 'opponent' // Automatically switch turn
    });

    // Check if player won
    if (checkWinCondition(newOpponentDeck)) {
      set({ isGameOver: true, battleLogs: ["VICTORY! All enemies defeated.", ...battleLogs] });
    }
  },

  // 2. End Turn Manually
  endTurn: () => {
    set((state) => ({
      turn: state.turn === 'player' ? 'opponent' : 'player',
      battleLogs: [`Turn switched to ${state.turn === 'player' ? 'Opponent' : 'Player'}`, ...state.battleLogs]
    }));
  },

  // 3. Reset Game
  resetGame: () => set({
    playerHP: 100,
    opponentHP: 100,
    playerDeck: [...cardDatabase],
    isGameOver: false,
    battleLogs: ["New Game Started!"],
    turn: 'player'
  })
}));

export default useGameStore;
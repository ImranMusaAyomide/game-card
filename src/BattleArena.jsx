import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useGameStore from './useGameStore';
import './BattleArena.css';

const BattleArena = () => {
  const { 
    playerDeck, 
    opponentDeck, 
    playerHP, 
    opponentHP, 
    turn, 
    playAttack, 
    battleLogs, 
    isGameOver, 
    resetGame 
  } = useGameStore();

  return (
    <div className="battle-arena">
      {/* --- HUD: Top Bar --- */}
      <div className="battle-hud">
        <div className="health-bar-container">
          <span>Opponent HP: {opponentHP}</span>
          <div className="health-bar" style={{ width: `${opponentHP}%`, backgroundColor: '#ef4444' }}></div>
        </div>
        <div className="turn-indicator">
          <h2 className={turn === 'player' ? 'active-turn' : ''}>
            {turn === 'player' ? "YOUR TURN" : "OPPONENT'S TURN"}
          </h2>
        </div>
        <div className="health-bar-container">
          <span>Player HP: {playerHP}</span>
          <div className="health-bar" style={{ width: `${playerHP}%`, backgroundColor: '#22c55e' }}></div>
        </div>
      </div>

      {/* --- Battlefield --- */}
      <div className="battlefield">
        {/* Opponent Cards */}
        <div className="card-row opponent-row">
          {opponentDeck.map((card) => (
            <div key={card.id} className={`game-card opponent ${card.hp <= 0 ? 'dead' : ''}`}>
              <img src={`/assets/${card.icon}.svg`} alt={card.name} />
              <div className="card-stats">HP: {card.hp}</div>
            </div>
          ))}
        </div>

        {/* Player Cards */}
        <div className="card-row player-row">
          {playerDeck.map((card) => (
            <motion.div 
              whileHover={{ scale: 1.05 }}
              key={card.id} 
              className={`game-card player ${card.hp <= 0 ? 'dead' : ''}`}
              onClick={() => turn === 'player' && playAttack(card.id, opponentDeck[0].id)}
            >
              <img src={`/assets/${card.icon}.svg`} alt={card.name} />
              <div className="card-info">
                <span className="name">{card.name}</span>
                <span className="atk">ATK: {card.atk}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- Battle Logs --- */}
      <div className="battle-logs">
        <h3>Battle Log</h3>
        <div className="log-container">
          {battleLogs.map((log, i) => (
            <p key={i} className="log-entry">{log}</p>
          ))}
        </div>
      </div>

      {/* --- Game Over Overlay --- */}
      <AnimatePresence>
        {isGameOver && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="game-over-overlay"
          >
            <h1>BATTLE ENDED</h1>
            <button onClick={resetGame}>REPLAY</button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BattleArena;
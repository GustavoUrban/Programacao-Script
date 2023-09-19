import React from 'react';

function DamasBoard() {
  const renderCasa = (linha, col) => {
    const ispreta = (linha + col) % 2 === 1;
    const classNames = ispreta ? 'casa preta' : 'casa branca';
    return <div className={classNames} key={linha * 8 + col}></div>;
  };

  const renderTabu = () => {
    const casas = [];
    for (let linha = 0; linha < 8; linha++) {
      for (let col = 0; col < 8; col++) {
        casas.push(renderCasa(linha, col));
      }
    }
    return casas;
  };

  return (
    <div className="board">
      {renderTabu()}
      <style>{`
       .board {
        display: grid;
        grid-template-columns: repeat(8, 100px); 
        grid-template-linhas: repeat(8, 100px);   
        width: 800px;    
        height: 800px;   
        border: solid 2px;
        
      }
      .square {
        width: 100px;    
        height: 100px;   
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
       
      }
      .preta {
        background-color: #000;
        color: #fff;
      }
      .branca {
        background-color: #fff;
      }
      `}</style>
    </div>
  );
}

export default DamasBoard;
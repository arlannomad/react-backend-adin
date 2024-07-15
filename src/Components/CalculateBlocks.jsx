import React, { useState } from 'react';
import './CalculateBlocks.css';

const CalculateBlocks = () => {
  const [areaHouse, setAreaHouse] = useState('');
  const [heightHouse, setHeightHouse] = useState('');
  const [thicknessWall, setThicknessWall] = useState('');
  const [lengthBlock, setLengthBlock] = useState('');
  const [widthBlock, setWidthBlock] = useState('');
  const [heightBlock, setHeightBlock] = useState('');
  const [wasteFactor, setWasteFactor] = useState(0.1);
  const [result, setResult] = useState(null);

  const calculateBlocks = () => {
    const areaHouseNum = parseFloat(areaHouse);
    const heightHouseNum = parseFloat(heightHouse) / 100; // convert to meters
    const thicknessWallNum = parseFloat(thicknessWall) / 100; // convert to meters
    const lengthBlockNum = parseFloat(lengthBlock) / 1000; // convert to meters
    const widthBlockNum = parseFloat(widthBlock) / 1000; // convert to meters
    const heightBlockNum = parseFloat(heightBlock) / 1000; // convert to meters
    const wasteFactorNum = parseFloat(wasteFactor);
    
    // Volume of one gas block
    const volumeBlock = lengthBlockNum * widthBlockNum * heightBlockNum;
    
    // Volume of house walls
    const volumeWalls = areaHouseNum * heightHouseNum * thicknessWallNum;
    
    // Total number of blocks
    let totalBlocks = volumeWalls / volumeBlock;
    
    // Account for waste and losses
    totalBlocks *= (1 + wasteFactorNum);
    
    setResult(Math.ceil(totalBlocks));
  };

  return (
    <div className="calculate-blocks-container">
      <h1>Расчет количества газоблоков для постройки дома</h1>
      <form>
        <label>
          Площадь дома (кв. м):
          <input type="number" value={areaHouse} onChange={(e) => setAreaHouse(e.target.value)} required />
        </label><br /><br />
        
        <label>
          Высота стен дома (см):
          <input type="number" value={heightHouse} onChange={(e) => setHeightHouse(e.target.value)} required />
        </label><br /><br />
        
        <label>
          Толщина стен (см):
          <input type="number" value={thicknessWall} onChange={(e) => setThicknessWall(e.target.value)} required />
        </label><br /><br />
        
        <label>
          Длина газоблока (мм):
          <input type="number" value={lengthBlock} onChange={(e) => setLengthBlock(e.target.value)} required />
        </label><br /><br />
        
        <label>
          Ширина газоблока (мм):
          <input type="number" value={widthBlock} onChange={(e) => setWidthBlock(e.target.value)} required />
        </label><br /><br />
        
        <label>
          Высота газоблока (мм):
          <input type="number" value={heightBlock} onChange={(e) => setHeightBlock(e.target.value)} required />
        </label><br /><br />
        
        <label>
          Коэффициент отходов и потерь (десятичное число, например, 0.1 для 10%):
          <input type="number" step="0.01" value={wasteFactor} onChange={(e) => setWasteFactor(e.target.value)} required />
        </label><br /><br />
        
        <button type="button" onClick={calculateBlocks}>Рассчитать</button>
      </form>
      
      {result !== null && (
        <h2>Примерное количество газоблоков: {result}</h2>
      )}
    </div>
  );
};

export default CalculateBlocks;





"use client"

import React, { useState, useEffect } from 'react';
import { Plus, Edit3, Trash2, Play } from 'lucide-react';

const CookingRoulette = () => {
  const [dishes, setDishes] = useState([
    '唐揚げ', 'カレーライス', 'ラーメン', 'パスタ', 'オムライス', '焼き肉'
  ]);
  const [newDish, setNewDish] = useState('');
  const [editingIndex, setEditingIndex] = useState(-1);
  const [editingText, setEditingText] = useState('');
  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState('');
  const [rotation, setRotation] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  // クライアントサイドでのマウント確認
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // 料理を追加
  const addDish = () => {
    if (newDish.trim() && !dishes.includes(newDish.trim())) {
      setDishes([...dishes, newDish.trim()]);
      setNewDish('');
    }
  };

  // 料理を削除
  const deleteDish = (index:number) => {
    setDishes(dishes.filter((_, i) => i !== index));
  };

  // 編集開始
  const startEdit = (index:number) => {
    setEditingIndex(index);
    setEditingText(dishes[index]);
  };

  // 編集完了
  const finishEdit = () => {
    if (editingText.trim() && !dishes.includes(editingText.trim())) {
      const newDishes = [...dishes];
      newDishes[editingIndex] = editingText.trim();
      setDishes(newDishes);
    }
    setEditingIndex(-1);
    setEditingText('');
  };

  // ルーレットを回す
  const spinRoulette = () => {
    if (dishes.length === 0 || isSpinning) return;
    
    setIsSpinning(true);
    setResult('');
    
    // ランダムな回転角度を計算（最低3回転 + ランダム）
    const minRotation = 360 * 3; // 最低3回転
    const randomRotation = Math.random() * 360; // 0-360度のランダム
    const totalRotation = rotation + minRotation + randomRotation;
    
    // 正確な結果を計算
    const segmentAngle = 360 / dishes.length;
    const finalAngle = totalRotation % 360;
    // 矢印（12時方向）が指している位置を計算
    // finalAngleは時計回りの回転角なので、逆回転して元の位置を求める
    const normalizedAngle = (360 - finalAngle) % 360;
    // 各セグメントは0度から始まるので、そのまま計算
    const resultIndex = Math.floor(normalizedAngle / segmentAngle) % dishes.length;
    const selectedDish = dishes[resultIndex];
    
    setRotation(totalRotation);
    
    // アニメーション完了後に結果を表示
    setTimeout(() => {
      setIsSpinning(false);
      setResult(selectedDish);
    }, 3000);
  };

  // 扇形のclipPathを生成する関数
  const generateClipPath = (index:number, totalSegments:number) => {
    const segmentAngle = 360 / totalSegments;
    const startAngle = segmentAngle * index;
    
    // 中心点
    const centerX = 50;
    const centerY = 50;
    const radius = 50;
    
    // 扇形の座標を計算（12時方向を0度として）
    const points = [`${centerX}% ${centerY}%`]; // 中心点
    
    // 扇形の弧を細かく分割して滑らかにする
    const divisions = Math.max(8, Math.ceil(segmentAngle / 5));
    for (let i = 0; i <= divisions; i++) {
      const angle = startAngle + (segmentAngle * i / divisions) - 90; // -90で12時方向に調整
      const x = centerX + radius * Math.cos(angle * Math.PI / 180);
      const y = centerY + radius * Math.sin(angle * Math.PI / 180);
      points.push(`${x.toFixed(2)}% ${y.toFixed(2)}%`);
    }
    
    return `polygon(${points.join(', ')})`;
  };

  return (
    <div className="min-h-screen bg-yellow-200 p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-orange-800">
          🍽️ 料理ルーレット
        </h1>
        
        {/* 料理追加フォーム */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">料理を追加</h2>
          <div className="flex gap-2">
            <input
              type="text"
              value={newDish}
              onChange={(e) => setNewDish(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addDish()}
              placeholder="料理名を入力..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
              onClick={addDish}
              className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors flex items-center gap-2"
            >
              <Plus size={20} />
              追加
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* 料理リスト */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">料理リスト</h2>
            <div className="space-y-2 max-h-64 overflow-y-auto">
              {dishes.map((dish, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  {editingIndex === index ? (
                    <input
                      type="text"
                      value={editingText}
                      onChange={(e) => setEditingText(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && finishEdit()}
                      onBlur={finishEdit}
                      className="flex-1 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                      autoFocus
                    />
                  ) : (
                    <>
                      <span className="text-gray-700 font-medium">{dish}</span>
                      <div className="flex gap-1">
                        <button
                          onClick={() => startEdit(index)}
                          className="p-1 text-blue-500 hover:bg-blue-100 rounded transition-colors"
                        >
                          <Edit3 size={16} />
                        </button>
                        <button
                          onClick={() => deleteDish(index)}
                          className="p-1 text-red-500 hover:bg-red-100 rounded transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </>
                  )}
                </div>
              ))}
              {dishes.length === 0 && (
                <p className="text-gray-500 text-center py-4">料理を追加してください</p>
              )}
            </div>
          </div>

          {/* ルーレット */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">ルーレット</h2>
            <div className="flex flex-col items-center">
              <div className="relative w-64 h-64 mb-6">
                {/* 矢印 */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 z-10">
                  <div className="w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-red-600"></div>
                </div>
                
                {/* ルーレット円 */}
                <div 
                  className="w-full h-full rounded-full border-4 border-gray-300 relative overflow-hidden"
                  style={{
                    transform: `rotate(${rotation}deg)`,
                    transition: isSpinning ? 'transform 3s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none'
                  }}
                >
                  {/* クライアントサイドでマウントされてからルーレットを描画 */}
                  {isMounted && dishes.map((dish, index) => {
                    const segmentAngle = 360 / dishes.length;
                    const startAngle = segmentAngle * index;
                    const endAngle = segmentAngle * (index + 1);
                    const midAngle = (startAngle + endAngle) / 2; // テキスト回転用
                    const colors = ['bg-red-400', 'bg-blue-400', 'bg-green-400', 'bg-yellow-400', 'bg-purple-400', 'bg-pink-400'];
                    
                    return (
                      <div
                        key={index}
                        className={`absolute w-full h-full ${colors[index % colors.length]}`}
                        style={{
                          clipPath: generateClipPath(index, dishes.length)
                        }}
                      >
                        <div className="w-full h-full flex items-center justify-center relative">
                          <span 
                            className="text-white font-bold text-sm absolute pointer-events-none whitespace-nowrap"
                            style={{
                              transform: `rotate(${midAngle}deg) translateY(-70px) rotate(${-midAngle}deg)`,
                              transformOrigin: 'center center'
                            }}
                          >
                            {dish}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                  
                  {/* マウント前のプレースホルダー */}
                  {!isMounted && (
                    <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-gray-500">読み込み中...</span>
                    </div>
                  )}
                </div>
              </div>
              
              <button
                onClick={spinRoulette}
                disabled={dishes.length === 0 || isSpinning || !isMounted}
                className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:from-orange-600 hover:to-red-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2 text-lg font-semibold"
              >
                <Play size={20} />
                {isSpinning ? 'ルーレット回転中...' : 'ルーレットを回す！'}
              </button>
            </div>
          </div>
        </div>

        {/* 結果表示 */}
        {result && (
          <div className="mt-6 bg-white rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">🎉 結果発表 🎉</h2>
            <p className="text-5xl font-bold text-orange-600 mb-4">{result}</p>
            <p className="text-xl text-gray-600">今日の料理に決定！</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookingRoulette;
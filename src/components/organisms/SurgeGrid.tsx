'use client';

import { useAppSelector } from '@/store/hooks';
import { formatCurrency } from '@/lib/formatters';
import { Zap } from 'lucide-react';
import Image from 'next/image'; 

export default function SurgeGrid() {
  // Sirf pehle 6 tokens lenge demo ke liye
  const { tokens } = useAppSelector((state) => state.market);
  const surgeTokens = tokens.slice(0, 6); 

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
      {surgeTokens.map((token) => (
        <div key={token.id} className="bg-[#0f0f0f] border border-gray-800 rounded-xl p-4 hover:border-gray-700 transition-all">
          
          {/* Header: Image & Name */}
          <div className="flex justify-between items-start mb-4">
            <div className="flex gap-3">
              {/* OPTIMIZED IMAGE FIX: added 'unoptimized' prop */}
              <div className="relative w-12 h-12 rounded overflow-hidden bg-gray-800 flex-shrink-0">
                <Image 
                  src={token.image} 
                  alt={token.name} 
                  fill
                  className="object-cover"
                  sizes="48px"
                  unoptimized
                />
              </div>
              
              <div>
                <h3 className="text-white font-bold text-sm">{token.name}</h3>
                <p className="text-gray-500 text-xs">MC {formatCurrency(token.marketCap)}</p>
              </div>
            </div>
            <span className="text-gray-400 text-xs">12m ago</span>
          </div>

          {/* Progress Bar Visual */}
          <div className="w-full bg-gray-800 h-1.5 rounded-full mb-4 overflow-hidden">
            <div 
              className="bg-blue-500 h-full rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]" 
              style={{ width: `${Math.abs(token.change24h)}%` }} 
            />
          </div>

          {/* Stats Footer */}
          <div className="flex justify-between items-center text-xs">
             <div className="flex gap-4">
                <span className="text-gray-400">Vol <span className="text-white">{formatCurrency(token.volume)}</span></span>
                <span className={token.change24h >= 0 ? "text-green-400" : "text-red-400"}>
                  {token.change24h.toFixed(2)}%
                </span>
             </div>
             
             {/* Quick Buy Bolt Icon */}
             <button className="bg-blue-600/20 hover:bg-blue-600 text-blue-500 hover:text-white p-2 rounded-full transition-colors">
                <Zap size={14} fill="currentColor" />
             </button>
          </div>

        </div>
      ))}
    </div>
  );
}
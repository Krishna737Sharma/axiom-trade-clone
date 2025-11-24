'use client';

import { useAppSelector } from '@/store/hooks';
import { formatCurrency, formatNumber, getChangeColor } from '@/lib/formatters';
import { ShoppingCart, ShieldCheck, Activity } from 'lucide-react'; 
import Image from 'next/image'; 

export default function TokenTable() {
  const { tokens, isLoading } = useAppSelector((state) => state.market);

  if (isLoading) return <div className="text-white text-center p-10">Loading Market Data...</div>;

  return (
    <div className="w-full overflow-x-auto bg-[#0a0a0a] border border-gray-800 rounded-lg">
      <table className="w-full text-left text-sm text-gray-400">
        <thead className="text-xs uppercase bg-[#111] border-b border-gray-800">
          <tr>
            <th className="px-4 py-3">Pair Info</th>
            <th className="px-4 py-3">Market Cap</th>
            <th className="px-4 py-3">Liquidity</th>
            <th className="px-4 py-3">Volume</th>
            <th className="px-4 py-3">Audit Log</th>
            <th className="px-4 py-3 text-right">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-800">
          {tokens.map((token) => (
            <tr key={token.id} className="hover:bg-gray-900/50 transition-colors group cursor-pointer">
              
              {/* Column 1: Pair Info */}
              <td className="px-4 py-3">
                <div className="flex items-center gap-3">
                  {/* OPTIMIZED IMAGE FIX: added 'unoptimized' prop */}
                  <div className="relative w-10 h-10 rounded-md overflow-hidden bg-gray-800 flex-shrink-0">
                    <Image 
                      src={token.image} 
                      alt={token.name} 
                      fill
                      className="object-cover"
                      sizes="40px"
                      unoptimized 
                    />
                  </div>
                  
                  <div>
                    <div className="font-bold text-white flex items-center gap-2">
                      {token.symbol} <span className="text-gray-500 text-xs font-normal">{token.name}</span>
                    </div>
                    <div className="text-xs flex items-center gap-2 mt-1">
                      <span className="bg-gray-800 text-gray-300 px-1 rounded">10m</span>
                      <Activity size={12} className="text-blue-400" />
                    </div>
                  </div>
                </div>
              </td>

              {/* Column 2: Market Cap */}
              <td className="px-4 py-3">
                <div className="text-white font-medium">{formatCurrency(token.marketCap)}</div>
                <div className={`text-xs ${getChangeColor(token.change24h)}`}>
                  {token.change24h > 0 ? '+' : ''}{token.change24h.toFixed(2)}%
                </div>
              </td>

              {/* Column 3: Liquidity */}
              <td className="px-4 py-3 text-white">
                {formatCurrency(token.liquidity)}
              </td>

              {/* Column 4: Volume */}
              <td className="px-4 py-3 text-white">
                {formatCurrency(token.volume)}
              </td>

              {/* Column 5: Audit Log */}
              <td className="px-4 py-3">
                <div className="flex flex-col gap-1 text-xs">
                  <div className="flex items-center gap-1 text-green-400">
                    <ShieldCheck size={12} /> No Mint
                  </div>
                  <div className="text-gray-500">Blacklist: Clean</div>
                </div>
              </td>

              {/* Column 6: Action Button */}
              <td className="px-4 py-3 text-right">
                <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-1.5 rounded-full text-xs font-bold transition-all shadow-[0_0_10px_rgba(37,99,235,0.2)]">
                  Buy
                </button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
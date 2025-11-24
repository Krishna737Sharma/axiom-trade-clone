'use client';

import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setTokens, updatePrices } from '@/store/marketSlice';
import { generateMockTokens, updateTokenPrices } from '@/lib/mockData';
import TokenTable from '@/components/organisms/TokenTable';
import SurgeGrid from '@/components/organisms/SurgeGrid'; 
import TabNavigation from '@/components/molecules/TabNavigation'; 
import { Radio } from 'lucide-react'; // Icon for the "Live" tab

export default function Home() {
  const dispatch = useAppDispatch();
  const { tokens } = useAppSelector((state) => state.market);
  
  // State to track which tab is active
  const [activeTab, setActiveTab] = useState('Trending');

  useEffect(() => {
    const initialData = generateMockTokens(12); 
    dispatch(setTokens(initialData));
  }, [dispatch]);

  useEffect(() => {
    if (tokens.length === 0) return;
    const interval = setInterval(() => {
      const updatedData = updateTokenPrices(tokens);
      dispatch(updatePrices(updatedData));
    }, 2000);
    return () => clearInterval(interval);
  }, [tokens, dispatch]);

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Top Navbar */}
      <nav className="h-16 border-b border-gray-800 flex items-center px-6 mb-6 bg-[#0a0a0a]/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="font-bold text-xl tracking-wider flex items-center gap-2">
           <div className="w-3 h-3 bg-white rotate-45"></div> AXIOM <span className="text-gray-600 text-sm font-normal">Pro</span>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 pb-10">
        {/* Navigation Tabs */}
        <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Content Switching Logic */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          
          {/* 1. Trending View (Table) */}
          {activeTab === 'Trending' && <TokenTable />}
          
          {/* 2. Surge View (Grid/Cards) */}
          {activeTab === 'Surge' && <SurgeGrid />}
          
          {/* 3. DEX Screener (Reusing Table for Feature Completeness) */}
          {activeTab === 'DEX Screener' && (
            <div>
               <div className="mb-4 text-sm text-gray-500 flex justify-between items-center">
                  <span>Showing results for <strong>Solana Chain</strong></span>
                  <span className="text-xs border border-gray-800 px-2 py-1 rounded">Live Filter Active</span>
               </div>
               <TokenTable />
            </div>
          )}

          {/* 4. Pump Live (Professional Placeholder) */}
          {activeTab === 'Pump Live' && (
            <div className="flex flex-col items-center justify-center h-96 border border-gray-800 border-dashed rounded-xl bg-[#0f0f0f]">
              <div className="bg-red-500/10 p-6 rounded-full mb-6 animate-pulse">
                 <Radio size={48} className="text-red-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Live Streams Loading...</h3>
              <p className="text-gray-500 text-sm max-w-md text-center">
                Establishing secure WebSocket connection to decentralized stream nodes. Please wait while we fetch the latest pump events.
              </p>
            </div>
          )}

        </div>
      </div>
    </main>
  );
}
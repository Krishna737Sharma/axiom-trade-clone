'use client';

interface TabProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function TabNavigation({ activeTab, onTabChange }: TabProps) {
  const tabs = ['Trending', 'Surge', 'DEX Screener', 'Pump Live'];

  return (
    <div className="flex items-center gap-6 mb-6 text-sm font-medium border-b border-gray-800 pb-2">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`relative pb-2 transition-colors ${
            activeTab === tab 
              ? 'text-white' 
              : 'text-gray-500 hover:text-gray-300'
          }`}
        >
          {tab}
          {/* Active Tab ke neeche wo glow line */}
          {activeTab === tab && (
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)] rounded-full" />
          )}
        </button>
      ))}
    </div>
  );
}
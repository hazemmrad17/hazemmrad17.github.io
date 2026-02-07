"use client";

import React from "react";
import { Monitor, Palette, User, Shield, Info, Check } from "lucide-react";

interface SettingsAppProps {
    currentWallpaper: string;
    onWallpaperChange: (url: string) => void;
}

const wallpapers = [
    {
        id: "blue-mesh",
        name: "Vibrant Blue",
        url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop",
        preview: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=200&auto=format&fit=crop"
    },
    {
        id: "purple-gradient",
        name: "Purple Dreams",
        url: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2074&auto=format&fit=crop",
        preview: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=200&auto=format&fit=crop"
    },
    {
        id: "monterey",
        name: "Monterey",
        url: "https://images.unsplash.com/photo-1635830383423-276b65399583?q=80&w=2070&auto=format&fit=crop",
        preview: "https://images.unsplash.com/photo-1635830383423-276b65399583?q=80&w=200&auto=format&fit=crop"
    },
    {
        id: "macos-sonoma",
        name: "Sonoma Horizon",
        url: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2070&auto=format&fit=crop",
        preview: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=200&auto=format&fit=crop"
    },
    {
        id: "aurora",
        name: "Vibrant Aurora",
        url: "https://images.unsplash.com/photo-1483366759340-abc9eca45bc0?q=80&w=2070&auto=format&fit=crop",
        preview: "https://images.unsplash.com/photo-1483366759340-abc9eca45bc0?q=80&w=200&auto=format&fit=crop"
    }
];

export default function SettingsApp({ currentWallpaper, onWallpaperChange }: SettingsAppProps) {
    const [activeTab, setActiveTab] = React.useState("appearance");

    const renderContent = () => {
        switch (activeTab) {
            case "appearance":
                return (
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-bold text-white mb-4">Wallpaper</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {wallpapers.map((wp) => (
                                    <button
                                        key={wp.id}
                                        onClick={() => onWallpaperChange(wp.url)}
                                        className={`group relative aspect-video rounded-lg overflow-hidden border-2 transition-all ${currentWallpaper === wp.url ? "border-blue-500 shadow-lg shadow-blue-500/20" : "border-transparent hover:border-white/20"
                                            }`}
                                    >
                                        <img src={wp.preview} alt={wp.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                                        <div className="absolute inset-x-0 bottom-0 bg-black/60 backdrop-blur-md p-2 flex justify-between items-center translate-y-full group-hover:translate-y-0 transition-transform">
                                            <span className="text-[10px] font-medium text-white">{wp.name}</span>
                                            {currentWallpaper === wp.url && <Check size={12} className="text-blue-400" />}
                                        </div>
                                        {currentWallpaper === wp.url && (
                                            <div className="absolute top-2 right-2 h-5 w-5 rounded-full bg-blue-500 flex items-center justify-center shadow-lg">
                                                <Check size={12} className="text-white" />
                                            </div>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-sm font-bold text-zinc-500 mb-3 uppercase tracking-wider">Interface Style</h3>
                            <div className="flex gap-4">
                                <button className="flex-1 flex flex-col items-center gap-2 p-4 rounded-xl bg-white/5 border-2 border-blue-500">
                                    <div className="h-12 w-full rounded bg-zinc-800 border border-white/10" />
                                    <span className="text-xs text-white">Dark Mode</span>
                                </button>
                                <button className="flex-1 flex flex-col items-center gap-2 p-4 rounded-xl bg-white/5 border-2 border-transparent opacity-50 cursor-not-allowed">
                                    <div className="h-12 w-full rounded bg-white border border-black/10" />
                                    <span className="text-xs text-zinc-400">Light Mode (Soon)</span>
                                </button>
                            </div>
                        </div>
                    </div>
                );
            case "display":
                return (
                    <div className="p-4 text-center text-zinc-500">
                        <Monitor size={48} className="mx-auto mb-4 opacity-20" />
                        <h3 className="text-white font-medium mb-1">Display Settings</h3>
                        <p className="text-xs">Adjust resolution and brightness.</p>
                    </div>
                );
            default:
                return (
                    <div className="flex flex-col items-center justify-center h-full opacity-50">
                        <Info size={48} className="mb-4" />
                        <span className="text-sm">This section is coming soon.</span>
                    </div>
                );
        }
    };

    return (
        <div className="flex h-full bg-[#1e1e1e]/95 backdrop-blur-md">
            <div className="w-56 border-r border-white/5 p-3 flex flex-col gap-1">
                <div className="px-3 py-4 mb-2">
                    <h2 className="text-lg font-bold text-white">System Settings</h2>
                </div>
                {[
                    { id: "personal", label: "Apple ID", icon: User },
                    { id: "appearance", label: "Appearance", icon: Palette },
                    { id: "display", label: "Display", icon: Monitor },
                    { id: "privacy", label: "Privacy & Security", icon: Shield },
                    { id: "about", label: "About", icon: Info },
                ].map((item) => (
                    <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${activeTab === item.id ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20" : "text-zinc-400 hover:bg-white/5"
                            }`}
                    >
                        <item.icon size={16} />
                        <span className="font-medium">{item.label}</span>
                    </button>
                ))}
            </div>
            <div className="flex-1 p-8 overflow-y-auto">
                {renderContent()}
            </div>
        </div>
    );
}

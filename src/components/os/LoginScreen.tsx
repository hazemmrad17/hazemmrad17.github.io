"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { User, Lock } from "lucide-react";

interface LoginScreenProps {
    onLogin: () => void;
    username: string;
    wallpaper?: string;
}

export default function LoginScreen({ onLogin, username, wallpaper }: LoginScreenProps) {
    const [password, setPassword] = useState("");
    const wallpaperUrl = wallpaper || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop";

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real OS this would check password, here we just login
        onLogin();
    };

    return (
        <div
            className="relative h-screen w-screen flex flex-col items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${wallpaperUrl})` }}
        >
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative flex flex-col items-center gap-6"
            >
                <div className="h-24 w-24 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center overflow-hidden">
                    <User size={48} className="text-white/80" />
                </div>

                <h2 className="text-2xl font-medium text-white shadow-sm">{username}</h2>

                <form onSubmit={handleLogin} className="flex flex-col items-center gap-4 w-64">
                    <div className="relative w-full">
                        <input
                            type="password"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-white/20 border border-white/20 rounded-full px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:bg-white/30 transition-all text-center"
                            autoFocus
                        />
                        <button
                            type="submit"
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors"
                        >
                            <div className="h-6 w-6 rounded-full border border-white/30 flex items-center justify-center bg-white/10">
                                <span className="text-xs">→</span>
                            </div>
                        </button>
                    </div>
                    <p className="text-xs text-white/60">Click arrow or press Enter to login</p>
                </form>
            </motion.div>

            <div className="absolute bottom-12 flex gap-8">
                <button className="flex flex-col items-center gap-2 text-white/80 hover:text-white transition-all">
                    <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                        <span className="text-lg">⟳</span>
                    </div>
                    <span className="text-[10px] font-medium">Restart</span>
                </button>
                <button className="flex flex-col items-center gap-2 text-white/80 hover:text-white transition-all">
                    <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                        <span className="text-lg">⏻</span>
                    </div>
                    <span className="text-[10px] font-medium">Shut Down</span>
                </button>
            </div>
        </div>
    );
}

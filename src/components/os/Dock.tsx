"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Folder,
    Terminal,
    Settings,
    Mail,
    Chrome,
    Github,
    LayoutGrid
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const DOCK_APPS = [
    { id: "finder", icon: Folder, color: "text-blue-400" },
    { id: "terminal", icon: Terminal, color: "text-zinc-400" },
    { id: "chrome", icon: Chrome, color: "text-red-400" },
    { id: "mail", icon: Mail, color: "text-blue-300" },
    { id: "github", icon: Github, color: "text-white" },
    { id: "settings", icon: Settings, color: "text-zinc-300" },
    { id: "apps", icon: LayoutGrid, color: "text-purple-400" },
];

interface DockProps {
    onLaunch: (appId: string) => void;
}

export default function Dock({ onLaunch }: DockProps) {
    return (
        <div className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2">
            <div className="flex items-end gap-2 rounded-2xl glass p-2 pb-3">
                {DOCK_APPS.map((app) => (
                    <motion.div
                        key={app.id}
                        onClick={() => onLaunch(app.id)}
                        whileHover={{
                            scale: 1.2,
                            y: -10,
                            transition: { type: "spring", stiffness: 300, damping: 20 }
                        }}
                        whileTap={{ scale: 0.9 }}
                        className={cn(
                            "group relative flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 transition-colors hover:bg-white/20 cursor-pointer shadow-sm",
                            app.color
                        )}
                    >
                        <app.icon className="h-7 w-7" />

                        {/* Tooltip */}
                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 scale-0 rounded-md bg-black/80 px-2 py-1 text-xs text-white transition-transform group-hover:scale-100 whitespace-nowrap">
                            {app.id.charAt(0).toUpperCase() + app.id.slice(1)}
                        </div>

                        {/* Active Indicator */}
                        <div className="absolute -bottom-1 h-1 w-1 rounded-full bg-white/50" />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

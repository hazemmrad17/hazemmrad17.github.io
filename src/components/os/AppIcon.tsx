"use client";

import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface AppIconProps {
    label: string;
    icon: LucideIcon;
    onClick?: () => void;
    color?: string;
}

export default function AppIcon({ label, icon: Icon, onClick, color = "text-white" }: AppIconProps) {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            className="flex flex-col items-center gap-1 w-20 cursor-pointer group"
        >
            <div className="h-16 w-16 flex items-center justify-center rounded-2xl glass transition-colors group-hover:bg-white/20">
                <Icon className={`h-10 w-10 ${color}`} />
            </div>
            <span className="text-xs text-white text-shadow font-medium drop-shadow-md">
                {label}
            </span>
        </motion.div>
    );
}

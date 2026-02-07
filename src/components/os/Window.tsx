"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Maximize2 } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface WindowProps {
    id: string;
    title: string;
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    initialX?: number;
    initialY?: number;
    width?: number;
    height?: number;
    active?: boolean;
    onFocus?: () => void;
}

export default function Window({
    id,
    title,
    isOpen,
    onClose,
    children,
    initialX = 100,
    initialY = 100,
    width = 600,
    height = 400,
    active = true,
    onFocus
}: WindowProps) {
    const [isMaximized, setIsMaximized] = useState(false);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{
                        opacity: 0,
                        scale: 0.8,
                        y: initialY + 50,
                        x: initialX,
                        filter: "blur(10px)"
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        x: isMaximized ? 0 : initialX,
                        y: isMaximized ? 32 : initialY,
                        width: isMaximized ? "100vw" : width,
                        height: isMaximized ? "calc(100vh - 32px)" : height,
                        filter: "blur(0px)",
                        zIndex: active ? 30 : 20,
                    }}
                    exit={{
                        opacity: 0,
                        scale: 0.8,
                        y: initialY + 50,
                        filter: "blur(10px)",
                        transition: { duration: 0.2, ease: "easeIn" }
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                        mass: 0.8
                    }}
                    drag={!isMaximized}
                    dragMomentum={false}
                    onMouseDown={onFocus}
                    className={cn(
                        "fixed flex flex-col overflow-hidden rounded-xl border bg-zinc-900/95 text-white shadow-2xl backdrop-blur-3xl",
                        isMaximized ? "rounded-none" : "window-shadow border-white/20",
                        active ? "ring-1 ring-white/20" : "opacity-90 contrast-75 brightness-75"
                    )}
                >
                    {/* Header / Title Bar */}
                    <div
                        className={cn(
                            "flex h-10 shrink-0 items-center justify-between px-4 transition-colors",
                            active ? "bg-zinc-800/80" : "bg-zinc-900/80"
                        )}
                        onDoubleClick={() => setIsMaximized(!isMaximized)}
                    >
                        <div className="flex items-center gap-2">
                            <button
                                onClick={(e) => { e.stopPropagation(); onClose(); }}
                                className="group flex h-3 w-3 items-center justify-center rounded-full bg-[#FF5F56] hover:bg-[#FF5F56]/80 transition-all active:scale-95"
                            >
                                <X className="h-2 w-2 text-black opacity-0 group-hover:opacity-100" />
                            </button>
                            <button className="group flex h-3 w-3 items-center justify-center rounded-full bg-[#FFBD2E] hover:bg-[#FFBD2E]/80 transition-all active:scale-95">
                                <Minus className="h-2 w-2 text-black opacity-0 group-hover:opacity-100" />
                            </button>
                            <button
                                onClick={(e) => { e.stopPropagation(); setIsMaximized(!isMaximized); }}
                                className="group flex h-3 w-3 items-center justify-center rounded-full bg-[#27C93F] hover:bg-[#27C93F]/80 transition-all active:scale-95"
                            >
                                <Maximize2 className="h-2 w-2 text-black opacity-0 group-hover:opacity-100" />
                            </button>
                        </div>

                        <div className={cn(
                            "absolute left-1/2 -translate-x-1/2 text-[13px] font-medium transition-colors select-none",
                            active ? "text-zinc-200" : "text-zinc-500"
                        )}>
                            {title}
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 overflow-hidden">
                        {children}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

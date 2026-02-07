"use client";

import React, { useState, useEffect } from "react";
import { Apple, Wifi, Battery, Search, Command, SlidersHorizontal } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export default function MenuBar() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (date: Date) => {
        return date.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
        });
    };

    const formatDate = (date: Date) => {
        return date.toLocaleDateString("en-US", {
            weekday: "short",
            month: "short",
            day: "numeric",
        });
    };

    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex h-8 items-center justify-between px-4 glass text-[13px] font-medium text-white/90">
            <div className="flex items-center gap-4">
                <Apple className="h-4 w-4 fill-current" />
                <span className="font-bold">Finder</span>
                <span className="hidden sm:inline">File</span>
                <span className="hidden sm:inline">Edit</span>
                <span className="hidden sm:inline">View</span>
                <span className="hidden sm:inline">Go</span>
                <span className="hidden sm:inline">Window</span>
                <span className="hidden sm:inline">Help</span>
            </div>

            <div className="flex items-center gap-4">
                <Wifi className="h-4 w-4" />
                <Battery className="h-4 w-4" />
                <SlidersHorizontal className="h-4 w-4" />
                <Search className="h-4 w-4" />
                <div className="flex gap-2">
                    <span>{formatDate(time)}</span>
                    <span>{formatTime(time)}</span>
                </div>
            </div>
        </div>
    );
}

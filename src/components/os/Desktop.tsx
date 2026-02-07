"use client";

import React, { useState } from "react";
import MenuBar from "@/components/os/MenuBar";
import Dock from "@/components/os/Dock";

interface DesktopProps {
    children?: React.ReactNode;
    onLaunch: (appId: string) => void;
    wallpaper?: string;
}

export default function Desktop({ children, onLaunch, wallpaper }: DesktopProps) {
    // Wallpaper state or static
    // Reliable high-res macOS wallpaper
    const wallpaperUrl = wallpaper || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop";

    return (
        <div
            className="relative h-screen w-screen overflow-hidden bg-cover bg-center"
            style={{
                backgroundImage: `url(${wallpaperUrl})`,
            }}
        >
            {/* OS Components */}
            <MenuBar />

            <main className="relative h-full w-full pt-8 pb-16">
                {children}
            </main>

            <Dock onLaunch={onLaunch} />
        </div>
    );
}

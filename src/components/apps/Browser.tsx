"use client";

import React from "react";
import { ChevronLeft, ChevronRight, RotateCcw, ShieldCheck, Globe } from "lucide-react";

interface BrowserProps {
    url: string;
}

export default function BrowserApp({ url }: BrowserProps) {
    return (
        <div className="flex h-full flex-col bg-zinc-900 overflow-hidden">
            {/* Browser Toolbar */}
            <div className="flex h-12 flex-none items-center gap-4 border-b border-white/5 bg-zinc-800/80 px-4">
                <div className="flex items-center gap-3">
                    <ChevronLeft className="h-5 w-5 text-zinc-500" />
                    <ChevronRight className="h-5 w-5 text-zinc-500" />
                    <RotateCcw className="h-4 w-4 text-zinc-300" />
                </div>

                <div className="flex flex-1 items-center gap-2 rounded-lg bg-black/30 px-3 py-1.5 border border-white/5">
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
                    <div className="flex-1 text-[11px] text-zinc-300 font-medium truncate">
                        {url ? `hazemos.local` + url : "hazemos://home"}
                    </div>
                    <Globe className="h-3.5 w-3.5 text-zinc-500" />
                </div>

                <div className="flex items-center gap-4 text-zinc-400">
                    {/* Add dummy icons if needed */}
                </div>
            </div>

            {/* Browser Content */}
            <div className="flex-1 bg-white relative">
                {url ? (
                    <iframe
                        src={url}
                        className="h-full w-full border-none"
                        title="Preview"
                    />
                ) : (
                    <div className="h-full w-full flex items-center justify-center bg-zinc-900 text-zinc-500">
                        <div className="text-center">
                            <Globe size={48} className="mx-auto mb-4 opacity-20" />
                            <p className="text-sm">Select a project to preview</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

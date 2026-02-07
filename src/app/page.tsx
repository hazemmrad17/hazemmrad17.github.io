"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Desktop from "@/components/os/Desktop";
import Window from "@/components/os/Window";
import FinderApp from "@/components/apps/Finder";
import BrowserApp from "@/components/apps/Browser";
import AppIcon from "@/components/os/AppIcon";
import LoginScreen from "@/components/os/LoginScreen";
import SettingsApp from "@/components/apps/Settings";
import { Folder, FileText, Terminal, Globe } from "lucide-react";

type AppWindow = {
  id: string;
  title: string;
  isOpen: boolean;
  content: React.ReactNode;
  icon: any;
  initialX?: number;
  initialY?: number;
  width?: number;
  height?: number;
};

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [isLogged, setIsLogged] = useState(false);
  const [activeWindow, setActiveWindow] = useState<string | null>(null);
  const [browserUrl, setBrowserUrl] = useState<string | null>(null);
  const [wallpaper, setWallpaper] = useState("https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop");

  // Window states
  const [windows, setWindows] = useState<{ [key: string]: boolean }>({
    finder: false,
    browser: false,
    terminal: false,
    settings: false,
  });

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLogged) {
      toggleWindow("finder", true);
    }
  }, [isLogged]);

  const toggleWindow = (id: string, state?: boolean) => {
    setWindows((prev) => ({
      ...prev,
      [id]: state !== undefined ? state : !prev[id],
    }));
    if (state !== false) setActiveWindow(id);
  };

  const openProjectInBrowser = (url: string) => {
    setBrowserUrl(url);
    toggleWindow("browser", true);
  };

  const handleLaunch = (appId: string) => {
    switch (appId) {
      case "finder":
        toggleWindow("finder", true);
        break;
      case "chrome":
        setBrowserUrl("/legacy_portfolio/index.html");
        toggleWindow("browser", true);
        break;
      case "terminal":
        toggleWindow("terminal", true);
        break;
      case "mail":
        window.location.href = "mailto:hazem.mrad@esprit.tn";
        break;
      case "github":
        window.open("https://github.com/hazemmrad17", "_blank");
        break;
      case "settings":
        toggleWindow("settings", true);
        break;
      case "apps":
        // For now, toggle finder as an "apps" view or show a toast
        toggleWindow("finder", true);
        break;
    }
  };

  return (
    <main className="h-screen w-screen bg-black overflow-hidden select-none">
      <AnimatePresence mode="wait">
        {showIntro ? (
          <motion.div
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black text-white"
          >
            <motion.h1
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-4xl font-light tracking-tight"
            >
              Welcome to HazemOS.
            </motion.h1>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              onClick={() => setShowIntro(false)}
              className="absolute bottom-12 px-6 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all text-sm font-medium tracking-wide"
            >
              GO TO LOGIN →
            </motion.button>
          </motion.div>
        ) : !isLogged ? (
          <motion.div
            key="login"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            <LoginScreen username="Hazem Mrad" onLogin={() => setIsLogged(true)} wallpaper={wallpaper} />
          </motion.div>
        ) : (
          <motion.div
            key="desktop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Desktop onLaunch={handleLaunch} wallpaper={wallpaper}>
              {/* Finder Window */}
              <Window
                id="finder"
                title="Finder"
                isOpen={windows.finder}
                onClose={() => toggleWindow("finder", false)}
                onFocus={() => setActiveWindow("finder")}
                active={activeWindow === "finder"}
                initialX={150}
                initialY={80}
                width={850}
                height={550}
              >
                <FinderApp onOpenProject={openProjectInBrowser} />
              </Window>

              {/* Browser Window */}
              <Window
                id="browser"
                title="Safari"
                isOpen={windows.browser}
                onClose={() => toggleWindow("browser", false)}
                onFocus={() => setActiveWindow("browser")}
                active={activeWindow === "browser"}
                initialX={200}
                initialY={120}
                width={1000}
                height={650}
              >
                <BrowserApp url={browserUrl || ""} />
              </Window>

              {/* Terminal Placeholder */}
              <Window
                id="terminal"
                title="Terminal"
                isOpen={windows.terminal}
                onClose={() => toggleWindow("terminal", false)}
                onFocus={() => setActiveWindow("terminal")}
                active={activeWindow === "terminal"}
                initialX={300}
                initialY={200}
                width={600}
                height={400}
              >
                <div className="p-4 font-mono text-xs text-emerald-500 bg-black h-full">
                  hazem@macbook-pro ~ % Welcome to HazemOS Terminal<br />
                  hazem@macbook-pro ~ % _
                </div>
              </Window>

              {/* Settings Window */}
              <Window
                id="settings"
                title="System Settings"
                isOpen={windows.settings}
                onClose={() => toggleWindow("settings", false)}
                onFocus={() => setActiveWindow("settings")}
                active={activeWindow === "settings"}
                initialX={400}
                initialY={150}
                width={700}
                height={500}
              >
                <SettingsApp currentWallpaper={wallpaper} onWallpaperChange={setWallpaper} />
              </Window>

              {/* Desktop Icons */}
              <div className="p-8 grid grid-cols-1 gap-8 w-fit pointer-events-none">
                <div className="pointer-events-auto">
                  <AppIcon
                    label="Portfolio"
                    icon={Folder}
                    onClick={() => toggleWindow("finder", true)}
                    color="text-blue-400"
                  />
                </div>
                <div className="pointer-events-auto">
                  <AppIcon
                    label="Resume.pdf"
                    icon={FileText}
                    onClick={() => {
                      setBrowserUrl("/hazem_mrad_cv.pdf");
                      toggleWindow("browser", true);
                    }}
                    color="text-red-400"
                  />
                </div>
                <div className="pointer-events-auto">
                  <AppIcon
                    label="Terminal"
                    icon={Terminal}
                    onClick={() => toggleWindow("terminal", true)}
                    color="text-zinc-400"
                  />
                </div>
              </div>
            </Desktop>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

import React from 'react';
import Header from '@/components/Header';
import RoboticsHero from '@/components/robotics/RoboticsHero';
import RobotTwinsList from '@/components/robotics/RobotTwinsList';
import RoboticsFeatures from '@/components/robotics/RoboticsFeatures';
import RoboticsStats from '@/components/robotics/RoboticsStats';
import AIAgentPanel from '@/components/robotics/AIAgentPanel';
import LLMCapabilities from '@/components/robotics/LLMCapabilities';
import DeveloperToolsPanel from "@/components/robotics/DeveloperToolsPanel";

const Robotics = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <Header />
      <div className="pt-4">
        <RoboticsHero />
        <RoboticsStats />
        <RobotTwinsList />
        <AIAgentPanel />
        <LLMCapabilities />
        <RoboticsFeatures />
        <DeveloperToolsPanel />
      </div>
    </div>
  );
};

export default Robotics;

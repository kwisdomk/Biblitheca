"use client";

import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const data = [
  { subject: 'Security', A: 100, fullMark: 100 },
  { subject: 'Frontend', A: 80, fullMark: 100 },
  { subject: 'Backend', A: 70, fullMark: 100 },
  { subject: 'AI/ML', A: 60, fullMark: 100 },
  { subject: 'Cloud', A: 40, fullMark: 100 },
  { subject: 'DevOps', A: 40, fullMark: 100 },
];

const SkillsRadar = () => (
  <ResponsiveContainer width="100%" height="100%">
    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
      <PolarGrid stroke="rgba(255, 255, 255, 0.2)" />
      <PolarAngleAxis dataKey="subject" tick={{ fill: '#a1a1aa', fontSize: 12 }} />
      <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
      <Radar name="Skills" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
    </RadarChart>
  </ResponsiveContainer>
);

export default SkillsRadar;
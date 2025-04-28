import React from 'react';

interface SkillListProps {
  skills: string[];
}

const SkillList: React.FC<SkillListProps> = ({ skills }) => {
  return (
    <div className="space-y-2">
      {skills.map((skill, index) => (
        <div key={index} className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary"></div>
          <span className="text-gray-700">{skill}</span>
        </div>
      ))}
    </div>
  );
};

export default SkillList;
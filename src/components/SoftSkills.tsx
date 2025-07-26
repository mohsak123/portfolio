"use client";

import React from "react";

const SoftSkills = () => {
    const skills = [
        "Communication",
        "Teamwork",
        "Problem Solving",
        "Adaptability",
        "Creativity",
        "Time Management",
        "Critical Thinking",
        "Conflict Resolution",
        "Leadership",
    ];

    return (
        <section
            id="soft-skills"
            className="p-6 md:p-10 bg-bgHeader text-textColor rounded-md shadow-[1px_1px_40px_#3532324a] my-8"
        >
            <h2 className="text-xl md:text-2xl font-bold mb-6 text-blueColor animate-pulse">
                Soft Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-6 text-[1rem]">
                {skills.map((skill, index) => (
                    <div key={index} className="flex items-start gap-2">
                        <span className="text-blueColor">•</span>
                        <span>{skill}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SoftSkills;
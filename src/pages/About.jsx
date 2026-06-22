import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import CTA from "../components/CTA";
import { experiences, skills } from "../constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import "react-vertical-timeline-component/style.min.css";

const About = () => {
  const [tooltipVisibility, setTooltipVisibility] = useState({});

  const showTooltip = (skillName) => {
    setTooltipVisibility({ ...tooltipVisibility, [skillName]: true });
  };

  const hideTooltip = (skillName) => {
    setTooltipVisibility({ ...tooltipVisibility, [skillName]: false });
  };

  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello World, I'm{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          {" "}
          Gabriel
        </span>{" "}
        👨‍💻
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-700 ' style={{ textAlign: 'justify' }}>
        <p>
          I'm a senior software engineer focused on AI and automation. Most of my time goes into
          solving the problems that show up when LLMs need to work inside real systems, not demos.
        </p>
        <p>
          I have 5+ years of experience building scalable systems. Over the past year, I worked at
          Adapta, one of Latin America's largest AI companies, where I grew from Senior Software
          Engineer to Domain Lead — leading critical platform domains including scheduled tasks,
          skills system, and context management, and owning product decisions, architecture, and
          feature prioritization.
        </p>
        <p>
          In production, I refactored the core application logic to operate asynchronously via
          scheduled tasks, resolving critical timeout and server-to-server authentication failures;
          implemented the payment gateway responsible for the platform's subscription renewals; and
          drove ongoing LLM performance optimization and cost reduction in live environments.
        </p>
        <p>
          My main stack is Node.js, React, Next.js, and TypeScript, with experience in C#, Angular,
          Supabase, Docker, and AWS. I believe the edge of an engineer today isn't knowing AI tools.
          It's knowing where they break, and how to build systems that hold up anyway.
        </p>
        <p>
          If you're looking for someone who can ship reliable AI-powered features and full-stack
          applications, feel free to{" "}
          <Link to="/contact" className="text-blue-500 hover:underline">reach out</Link>.
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div
              className='block-container w-20 h-20 '
              key={skill.name}
              onMouseEnter={() => showTooltip(skill.name)}
              onMouseLeave={() => hideTooltip(skill.name)}
            >
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
              {tooltipVisibility[skill.name] && (
                <div className='tooltip' style={
                  {
                    position: 'absolute',
                    bottom: '120%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    padding: '4px 8px',
                    color: 'white',
                    backgroundColor: 'black',
                    borderRadius: '4px',
                    fontSize: '12px',
                    transition: 'all 0.3s ease'
                  }

                }>
                  {skill.name}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Work Experience.</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p style={{ textAlign: 'justify' }}>
            Throughout my career, I've worked on production systems across AI platforms, enterprise
            web applications, and mobile products. Most recently at Adapta, I led core platform
            domains and shipped infrastructure that kept LLM workloads reliable at scale. Before
            that, I spent over three years at Dhauz growing from intern to tech lead, and began my
            professional journey at LUMO building mobile interfaces for university event platforms.
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={`${experience.company_name}-${experience.title}-${experience.date}`}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-black-700 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-black-500/80 font-normal pl-1 text-sm'
                      style={{ textAlign: 'justify' }}
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>


      </div>



      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default About;

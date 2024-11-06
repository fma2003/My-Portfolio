import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { Social } from "../typings";

type Props = {
  socials: Social[];
};

export default function Header({ socials }: Props) {
  const handleDownloadResume = () => {
    // Replace this URL with your external resume link
    const resumeUrl = 'https://your-storage-service.com/path-to-your-resume.pdf';
    
    // Open the URL in a new tab - this works better with external links
    window.open(resumeUrl, '_blank');
  };

  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {/* React social icons */}
        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor="gray"
            bgColor="transparent"
          />
        ))}
      </motion.div>

      <div className="flex flex-row items-center space-x-4">
        {/* Download Resume Button */}
        <motion.button
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          onClick={handleDownloadResume}
          className="px-4 py-2 border border-gray-400 rounded-full text-sm text-gray-400 hover:border-gray-300 hover:text-gray-300 transition-all"
        >
          Download CV
        </motion.button>

        <Link href="#contact">
          <motion.div
            initial={{
              x: 500,
              opacity: 0.5,
              scale: 0.5,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.5,
            }}
            className="flex flex-row items-center text-gray-300 cursor-pointer"
          >
            <SocialIcon
              className="cursor-pointer"
              network="email"
              fgColor="grey"
              bgColor="transparent"
            />
            <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
              Get in touch
            </p>
          </motion.div>
        </Link>
      </div>
    </header>
  );
}
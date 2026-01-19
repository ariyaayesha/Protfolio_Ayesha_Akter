import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-gray-400 text-lg">
            Professional experience will be added here as I grow in my career
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center text-center bg-gray-900/70 border border-gray-700/50 rounded-lg p-10"
        >
          <div className="p-4 bg-blue-500/20 rounded-full mb-6">
            <Briefcase className="w-8 h-8 text-blue-400" />
          </div>

          <p className="text-gray-300 text-lg max-w-md">
            Currently focused on learning, building projects, and preparing for
            entry-level opportunities. This section will be updated with
            professional experience in the future.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

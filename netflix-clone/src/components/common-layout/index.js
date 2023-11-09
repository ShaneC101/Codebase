"use client";

import { motion } from "framer-motion";

export default function CommonLayout() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <head>
        <title>Netflix Clone</title>
        {/* to do => to add all other proprties */}
      </head>
      <>
        <Navbar />
        <div className="relative pl-4 pb-24 lg:space-y-24"></div>
      </>
    </motion.div>
  );
}

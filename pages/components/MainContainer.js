import { motion } from "framer-motion";

export default function MainContainer(props) {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      initial={{ opacity: 0 }}
    >
      <div className="w-full flex justify-center">
        <div className="mt-0 md:mt-8 max-w-3xl ">{props.children}</div>
      </div>
    </motion.div>
  );
}

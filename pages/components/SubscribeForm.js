import Mailchimp from "react-mailchimp-form";
import { motion } from "framer-motion";

export default function SubscribeForm() {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      initial={{ opacity: 0 }}
    >
      <Mailchimp
        action="https://izem.us14.list-manage.com/subscribe/post?u=609d418efe3e2644069e91d0b&amp;id=80d9be0cb3"
        fields={[
          {
            name: "FNAME",
            placeholder: "Your Name",
            type: "text",
            required: false,
          },
          {
            name: "EMAIL",
            placeholder: "Your Email",
            type: "email",
            required: true,
          },
        ]}
        className="subscribe-form flex flex-col items-center md:p-10 p-4"
      />
    </motion.div>
  );
}

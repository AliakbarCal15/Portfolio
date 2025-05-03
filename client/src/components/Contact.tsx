import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Initialize EmailJS with debugging enabled
  useEffect(() => {
    // Log environment variables (sanitized) for debugging
    console.log('EmailJS Config:', {
      serviceIDAvailable: !!import.meta.env.VITE_EMAILJS_SERVICE_ID,
      templateIDAvailable: !!import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      publicKeyAvailable: !!import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    });
    
    // Enable debug mode for EmailJS
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '', { debug: true });
  }, []);
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      setIsSubmitting(true);
      
      // Prepare the template parameters for EmailJS
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
        to_name: 'Aliakbar', // Your name (recipient)
        reply_to: data.email
      };
      
      // Send the email using EmailJS
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ''
      );
      
      // Show success toast
      toast({
        title: "Message sent successfully!",
        description: "Thanks for reaching out. I'll get back to you soon.",
        className: "bg-neon-blue text-dark border-none",
      });
      
      // Reset the form after successful submission
      form.reset();
    } catch (error) {
      console.error('Error sending email:', error);
      // Show detailed error toast with the actual error
      toast({
        title: "Error sending message",
        description: `Error: ${error instanceof Error ? error.message : 'Unknown error'}. Please try again or contact directly via email.`,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-20 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-center mb-16 relative inline-block">
          Let's Connect
          <span className="absolute bottom-0 left-0 w-full h-1 bg-neon-blue opacity-70"></span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-montserrat font-semibold mb-6">Get In Touch</h3>
            <p className="text-light-darker mb-8">
              Looking for a dynamic backend or full-stack developer? I'm open to remote roles and exciting collaborations. Feel free to reach out through the form or via any of my contact channels below.
            </p>
            
            <div className="flex flex-col space-y-4 mb-8">
              <a href="mailto:aliakbarcal15@gmail.com" className="flex items-center group">
                <div className="w-12 h-12 rounded-full bg-dark-lighter flex items-center justify-center mr-4 group-hover:bg-neon-blue transition-colors">
                  <i className="fas fa-envelope text-neon-blue group-hover:text-dark transition-colors"></i>
                </div>
                <span className="text-light group-hover:text-neon-blue transition-colors">aliakbarcal15@gmail.com</span>
              </a>
              
              <a href="tel:+919156770832" className="flex items-center group">
                <div className="w-12 h-12 rounded-full bg-dark-lighter flex items-center justify-center mr-4 group-hover:bg-neon-blue transition-colors">
                  <i className="fas fa-phone text-neon-blue group-hover:text-dark transition-colors"></i>
                </div>
                <span className="text-light group-hover:text-neon-blue transition-colors">+91 9156770832</span>
              </a>

              <a href="#" className="flex items-center group">
                <div className="w-12 h-12 rounded-full bg-dark-lighter flex items-center justify-center mr-4 group-hover:bg-neon-blue transition-colors">
                  <i className="fas fa-map-marker-alt text-neon-blue group-hover:text-dark transition-colors"></i>
                </div>
                <span className="text-light group-hover:text-neon-blue transition-colors">Pune, Maharashtra, India 411011</span>
              </a>
            </div>
            
            <div className="flex space-x-4">
              <a href="https://github.com/AliakbarCalcuttawala" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-dark-lighter flex items-center justify-center hover:bg-neon-blue transition-colors group">
                <i className="fab fa-github text-xl text-neon-blue group-hover:text-dark transition-colors"></i>
              </a>
              <a href="https://www.linkedin.com/in/aliakbar-calcuttawala/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-dark-lighter flex items-center justify-center hover:bg-neon-blue transition-colors group">
                <i className="fab fa-linkedin-in text-xl text-neon-blue group-hover:text-dark transition-colors"></i>
              </a>
              <a href="http://wa.me/+919156770832" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-dark-lighter flex items-center justify-center hover:bg-neon-blue transition-colors group">
                <i className="fab fa-whatsapp text-xl text-neon-blue group-hover:text-dark transition-colors"></i>
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <form 
              onSubmit={form.handleSubmit(onSubmit)} 
              className="bg-dark bg-opacity-40 p-8 rounded-lg shadow-lg border border-dark-light"
            >
              <div className="mb-6">
                <label htmlFor="name" className="block text-light mb-2">Name</label>
                <input 
                  {...form.register("name")}
                  id="name" 
                  className={`w-full px-4 py-3 bg-dark-lighter border rounded-md focus:outline-none focus:border-neon-blue text-light ${
                    form.formState.errors.name ? "border-red-500" : "border-dark-light"
                  }`}
                  placeholder="Your Name"
                />
                {form.formState.errors.name && (
                  <p className="mt-1 text-red-500 text-xs">{form.formState.errors.name.message}</p>
                )}
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-light mb-2">Email</label>
                <input 
                  {...form.register("email")}
                  id="email" 
                  type="email"
                  className={`w-full px-4 py-3 bg-dark-lighter border rounded-md focus:outline-none focus:border-neon-blue text-light ${
                    form.formState.errors.email ? "border-red-500" : "border-dark-light"
                  }`}
                  placeholder="your.email@example.com"
                />
                {form.formState.errors.email && (
                  <p className="mt-1 text-red-500 text-xs">{form.formState.errors.email.message}</p>
                )}
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-light mb-2">Message</label>
                <textarea 
                  {...form.register("message")}
                  id="message" 
                  rows={4} 
                  className={`w-full px-4 py-3 bg-dark-lighter border rounded-md focus:outline-none focus:border-neon-blue text-light resize-none ${
                    form.formState.errors.message ? "border-red-500" : "border-dark-light"
                  }`}
                  placeholder="Your message here..."
                />
                {form.formState.errors.message && (
                  <p className="mt-1 text-red-500 text-xs">{form.formState.errors.message.message}</p>
                )}
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full bg-neon-blue text-dark py-3 rounded-md font-medium transition-all duration-300 ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-opacity-90"
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

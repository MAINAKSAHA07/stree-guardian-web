
import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, Users } from 'lucide-react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";

// Define form schema with validation
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  investorType: z.string({
    required_error: "Please select an investor type.",
  }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const investorTypes = [
  { value: "angel", label: "Angel Investor" },
  { value: "vc", label: "Venture Capital" },
  { value: "corporate", label: "Corporate Investor" },
  { value: "incubator", label: "Incubator/Accelerator" },
  { value: "partner", label: "Strategic Partner" },
  { value: "other", label: "Other" },
];

const Contact = () => {
  // Define form with validation schema
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form submission
  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
      form.reset();
      
      // Show success toast
      toast({
        title: "Interest Registered",
        description: "Thank you for your interest in Stree. Our team will contact you shortly to discuss investment opportunities.",
      });
    }, 1500);
  }

  return (
    <section className="section-padding bg-slate-50" id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="animate-slide-up">
            <h2 className="text-3xl font-bold mb-6">Investment <span className="text-stree-600">Opportunity</span></h2>
            <p className="text-muted-foreground mb-8">
              We're seeking investment to bring Stree from concept to market. Our innovative women's safety wearable represents a significant opportunity in the growing personal safety technology sector.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 mt-1 bg-stree-50 p-2 rounded-lg">
                  <Users className="w-5 h-5 text-stree-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Seeking Seed Funding</h3>
                  <p className="text-muted-foreground">
                    $1.5M to complete R&D, finalize prototypes, conduct user testing, and prepare for manufacturing.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1 bg-stree-50 p-2 rounded-lg">
                  <Mail className="w-5 h-5 text-stree-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Email Us</h3>
                  <p className="text-muted-foreground">investors@streedevice.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1 bg-stree-50 p-2 rounded-lg">
                  <Phone className="w-5 h-5 text-stree-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Call Us</h3>
                  <p className="text-muted-foreground">+91 98765 43210</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1 bg-stree-50 p-2 rounded-lg">
                  <MapPin className="w-5 h-5 text-stree-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Visit Our Office</h3>
                  <p className="text-muted-foreground">
                    Tech Innovation Hub, Bangalore<br />
                    Karnataka, India 560001
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md border border-slate-100 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-semibold mb-6">Investor Interest Form</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Your email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="investorType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Investor Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select investor type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {investorTypes.map((type) => (
                            <SelectItem key={type.value} value={type.value}>
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your investment interests and questions" 
                          className="resize-none min-h-[120px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" className="w-full bg-stree-600 hover:bg-stree-700" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Submit Inquiry <Send className="ml-2 h-4 w-4" />
                    </span>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

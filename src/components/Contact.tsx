'use client';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema } from '@/lib/validations';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Mail, User, Phone } from 'lucide-react';
import emailjs from 'emailjs-com';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phoneNumber: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof contactSchema>) {
    setLoading(true);
    const templateParams = values;

    emailjs
      .send(
        'service_5g71swd',
        'template_gphget8',
        templateParams,
        'Z2NCEHsu3SHu5YT_K'
      )
      .then(
        () => {
          toast({ title: 'Message sent successfully!' });
          setLoading(false);
        },
        () => {
          toast({ title: 'Error sending message. Please try again.' });
          setLoading(false);
        }
      );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-5 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 w-full max-w-3xl">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Contact Us
        </h2>
        <p className="text-center text-gray-600 mt-2">
          We'd love to hear from you! Fill out the form below, and we'll get back to you shortly.
        </p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-medium text-gray-700">Name</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          {...field}
                          placeholder="John Doe"
                          className="pl-10 border-black"
                        />
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      </div>
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
                    <FormLabel className="font-medium text-gray-700">Email</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          {...field}
                          placeholder="abc@example.com"
                          className="pl-10 border-black"
                        />
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-medium text-gray-700">Phone Number</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          {...field}
                          placeholder="1234567890"
                          className="pl-10 border-black"
                          maxLength={10}
                          inputMode="numeric"
                          onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
                            (e.target.value = e.target.value.replace(/\D/g, ''))
                          }
                        />
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="service"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-medium text-gray-700">Select a Service</FormLabel>
                    <FormControl>
                      <Select
                        {...field}
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="bg-gray-50 border-black">
                          <SelectValue placeholder="Choose..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="Web Development">Web Development</SelectItem>
                            <SelectItem value="App Development">App Development</SelectItem>
                            <SelectItem value="CMS Services">CMS Services</SelectItem>
                            <SelectItem value="3D Animation">3D Animation</SelectItem>
                            <SelectItem value="Logo Designing">Logo Designing</SelectItem>
                            <SelectItem value="Video Editing">Video Editing</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium text-gray-700">Message</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="Your message..."
                      className="bg-gray-50 border-black"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-md"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Contact;

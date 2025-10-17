'use client'

import React from 'react'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import emailjs from '@emailjs/browser'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

// ✅ Validation schema
const formSchema = z.object({
  firstName: z.string().min(2, { message: 'First name is required' }),
  lastName: z.string().min(2, { message: 'Last name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  phone: z.string().min(6, { message: 'Phone number is required' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
})

const ContactUs = ({ themeColor, btnColor, textColor }) => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    },
  })

  const [status, setStatus] = React.useState('idle') // 'idle' | 'loading' | 'success' | 'failed'

  // ✅ Get env variables

  async function onSubmit(values) {
    setStatus('loading')
    try {
      const result = await emailjs.send(
        "service_e2mjfwh",
        "template_yzrgx7m",
        {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          phone: values.phone,
          message: values.message,
        },
        "DGytf_Q--V4vdtzhB"
      )
      if (result.status === 200) {
        // show success transiently
        setStatus('success')
        form.reset()
        // revert to idle after 3 seconds
        setTimeout(() => setStatus('idle'), 3000)
      } else {
        setStatus('failed')
        setTimeout(() => setStatus('idle'), 3000)
      }
    } catch (error) {
      console.error(error)
      setStatus('failed')
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  return (
    <section className="relative overflow-hidden py-[100px] pt-20 md:pt-40">
      {/* Glow background */}
      <div
        className={`absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-${themeColor}/50 rounded-full blur-3xl pointer-events-none`}
      />

      <div className="relative z-10">
        <div className="mb-12 text-center space-y-4">
          <h1 className={`text-4xl font-bold tracking-tight text-${textColor}`}>
            Contact Us
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mt-4">
            Get in touch with us for investments, collaborations, and hydrogen solutions.
            We’d love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side */}
          <div className="space-y-6">
            <Image
              src="/contact-img.jpg"
              width={600}
              height={400}
              alt="Contact Us"
              className="rounded-2xl object-cover shadow-lg"
            />
          </div>

          {/* Right side (Form) */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 text-eh-white rounded-2xl shadow-lg">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="you@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="+234 800 000 0000" {...field} />
                      </FormControl>
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
                          placeholder="Write your message..."
                          rows={6}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  size="lg"
                  disabled={status === 'loading'}
                  className={`w-full bg-${btnColor} border-${themeColor} hover:bg-${themeColor} transition-colors text-white font-semibold disabled:opacity-50`}
                >
                  {status === 'loading' && 'Sending...'}
                  {status === 'success' && 'Success'}
                  {status === 'failed' && 'Failed'}
                  {status === 'idle' && 'Submit'}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs

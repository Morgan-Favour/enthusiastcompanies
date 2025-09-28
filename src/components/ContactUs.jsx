'use client'

import React from 'react'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

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

// Validation schema
const formSchema = z.object({
    firstName: z.string().min(2, { message: 'First name is required' }),
    lastName: z.string().min(2, { message: 'Last name is required' }),
    email: z.string().email({ message: 'Invalid email address' }),
    phone: z.string().min(6, { message: 'Phone number is required' }),
    message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
})

const ContactUs = () => {
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

    function onSubmit(values) {
        console.log('Form submitted:', values)
        // later: send to API or backend
    }

    return (
        <section className="container py-20">
            <div className="mb-12 text-center space-y-4">
                <h1 className="text-4xl font-bold tracking-tight text-eh-accent">Contact Us</h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
                    Get in touch with us for investments, collaborations, and hydrogen
                    solutions. We’d love to hear from you.
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
                        className=""
                    />
                </div>

                {/* Right side (Form) */}
                <div className="bg-white dark:bg-eh-black/80 p-8 rounded-2xl shadow-lg">
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

                            <Button type="submit" size="lg" className="w-full bg-eh-primary hover:bg-eh-accent text-eh-white">
                                Submit
                            </Button>
                        </form>
                    </Form>
                </div>
            </div>
        </section>
    )
}

export default ContactUs
